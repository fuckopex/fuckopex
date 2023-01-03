const match = caches.match.bind( caches );
const open = caches.open.bind( caches );

const cache = 'datapack';
const datapack = new Request( '/', { headers: { 'sw-fetch-dest': 'datapack' } } );

const LOADING = Symbol();
const ACTIVE = Symbol();


let status, responses, response;
let onload = load();


async function load () {

	responses = new Map;
	response = new Response;

	status = LOADING;

	await diff() &&
	await update();
	await parse();

	status = ACTIVE;

	clients.matchAll().then( c => c.forEach( w => w.postMessage( {} ) ) );

}

async function diff () {

	const etag = res => res?.headers.get( 'etag' );

	const client = etag( await match( datapack ) );
	const server = etag( await fetch( datapack, { method: 'HEAD' } ) );
	
	return client !== server;

}

async function update () {

	await open( cache ).then( async c => c.add( datapack ) );

}

async function parse () {

	const res = await match( datapack );
	const ui8 = new Uint8Array( await res.arrayBuffer() );
	const a3i = new Array( 256 ).fill( 0 );

	let len = 0;

	for ( len = 0; len <= ui8.length; len++ )
		if ( a3i[ ui8[ len ] ]++, a3i[ 91 ] == a3i[ 93 ] )
			break;

	const meta = JSON.parse( new TextDecoder().decode( ui8.subarray( 0, len + 1 ) ) );
	const data = ui8.subarray( len + 1, ui8.length );

	meta.reduce( ( begin, file ) => {

		const end = begin + file.size;
		const blob = new Blob( [ data.subarray( begin, end ) ], { type: file.type } );
		
		responses.set( file.path, new Response( blob ) );

		return end;

	}, 0 );

}

function handler ( e ) {

	const url = new URL( e.request.url );
	const path = url.pathname;

	const res = () => responses.has( path ) ? responses.get( path ).clone() : fetch( path );


	if ( location.origin !== url.origin ) return;

	if ( status === LOADING ) 	e.respondWith( onload.then( res ) );
	if ( status === ACTIVE ) 	e.respondWith( res() );

}


self.addEventListener( 'install', e => self.skipWaiting() );

self.addEventListener( 'activate', e => clients.claim() );

self.addEventListener( 'fetch', e => handler( e ) );
