import { fetchText, fetchAll } from '/app/fetch.js';
import { host, port, dev } from '/app/config.js';
import { walk } from 'std/fs/mod.ts';
import * as path from 'std/path/mod.ts';
import { concat } from 'std/bytes/mod.ts';
import { encode } from 'std/encoding/hex.ts';


const datapackDir = './datapack/';

const selfUrl  = `http://${ host }:${ port }/`;
const tankiUrl = 'https://tankionline.com/'; //`http://${ host }:${ 9999 }/` ?? 

const LOADING = Symbol();
const ACTIVE = Symbol();


let status, info, urls, body, response;


export async function refresh () {

	status = LOADING;

	await diff() &&
	await update();

	status = ACTIVE;

	return response.clone();

}

async function diff () {

	const match = t => t?.match( regex )?.[ 0 ];
	const regex = /play\/static\/js\/main.[0-9a-f]{8}.js/;

	const client = match( info );
	const server = match( await fetchText( `${ tankiUrl }play/` ) );

	return client !== server;

}

async function update () {

	urls = [];

	!dev &&
	await appendSelf();
	await appendTanki();

	await fetchAndPack();

}

async function appendSelf () {

	const src = selfUrl;
	
	urls.push( src );

	for await ( let e of walk( datapackDir, { includeDirs: false } ) ) {

		urls.push(
			src + e.path
			.split( path.sep )
			.slice( 1 )
			.join( path.posix.sep )
		);

	}

}

async function appendTanki () {

	const src = tankiUrl;

	urls.push( `${ src }play/` );

	const match = t => t.match( regex );

	let regex = /main.[0-9a-f]{8}.(css|js)/g;
	let tanki = match( await fetchText( urls.at( -1 ) ) );

	urls.push(
		`${ src }play/static/css/${ tanki[ 0 ] }`,
		`${ src }play/static/js/${ tanki[ 1 ] }`,
		`${ src }s/status.js/`
	);

	regex = /"static\/.+?"/g;
	tanki = match( await fetchText( urls.at( -2 ) ) );

	urls.push( ...tanki.map( m => `${ src }play/${ m.slice( 1, -1 ) }` ) );

}

async function fetchAndPack () {

	const resps = await fetchAll( urls );

	const meta = [];
	const data = [];

	for ( let res of resps ) {

		const path = new URL( res.url ).pathname;
		const type = res.headers.get( 'content-type' );
		const ui8 = new Uint8Array( res.ab );
		const size = ui8.length;

		meta.push( { path, type, size } );
		data.push( ui8 );

	}

	info = JSON.stringify( meta );
	body = concat( new TextEncoder().encode( info ), ...data );

	const ebuf = await crypto.subtle.digest( 'SHA-256', body );
	const etag = new TextDecoder().decode( encode( new Uint8Array( ebuf ) ) );

	response = new Response( body );
	response.headers.set( 'etag', etag.slice( 0, 8 ) );
	response.headers.set( 'content-type', 'application/x-tar' );

}