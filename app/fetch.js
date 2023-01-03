import { pooledMap } from 'std/async/pool.ts';
import { maxFetchPool } from '/app/config.js';


async function fetchWithArrayBuffer( url, opts ) {

	let res;

	res = await fetch( url, opts );
	res.ab = await res.arrayBuffer();

	return res;

}

export async function fetchAll ( urls, opts ) {

	const resps = [];

	for await ( let res of pooledMap( maxFetchPool, urls, u => fetchWithArrayBuffer( u, opts ) ) ) {

		resps.push( res );

	}

	return resps;

}

export function fetchText ( url, opts ) {

	return fetch( url, opts ).then( r => r.text() );

}