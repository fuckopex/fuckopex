import { serveFile as file, serveDir as dir } from 'std/http/file_server.ts';
import { serve as run } from 'std/http/server.ts';
import { refresh } from '/app/datapack.js';
import { host, port } from '/app/config.js';


const indexFile = './core/document.html';
const workerFile = './core/serviceworker.js';
const datapackDir = './datapack/';


export function start () {

	run( server, { hostname: host, port: port } );

}

async function server ( req ) {

	const dest = getDest( req );
	const root = isRoot( req );
console.log(dest,req.url)
	if ( root && dest === 'document' ) 		return noCache( await file( req, indexFile ) );
	if ( root && dest === 'serviceworker' ) return noCache( await file( req, workerFile ) );
	if ( root && dest === 'datapack' ) 		return noCache( await refresh() );

	return noCache( await dir( req, { fsRoot: datapackDir, showDirListing: true, quiet: true } ) );

}

function getDest ( req ) {

	const get = prefix => req.headers.get( `${ prefix }-fetch-dest` );

	return get( 'sw' ) ?? get( 'sec' ) ?? get( 'self' );

}

function isRoot( req ) {

	return new URL( req.url ).pathname === '/';

}

function noCache ( res ) {

	res.headers.set( 'cache-control', 'no-cache, no-store, must-revalidate' );

	return res;

}