export const name = 'Tanki';
export const type = 'game';
export const title = 'Танки Онлайн';
export const desc = '';


const fetchText = u => fetch( u ).then( r => r.text() );
const html = t => document.createRange().createContextualFragment( t );
const $ = s => document.querySelector( s );


const body = `
		<link main-css rel="stylesheet">
		<style id="media"></style>

		<div id="modal-root"></div>
		<div id="root" class="GlobalStyle-wrapper"></div>

		<script main-js type="module"></script>
	`;

const play = '/play/';
const index = await fetchText( play );

const cssUrl = `${ play }${ index.match( /static\/css\/main\.[0-9a-f]{8}\.css/ ) }`;
const jsUrl = `${ play }${ index.match( /static\/js\/main\.[0-9a-f]{8}\.js/ ) }`;

export let js = `import * as mods from 'mods';\n${ await fetchText( jsUrl ) }`;

replace( 'rel="manifest"', 'rel="!manifest"' );
replace( `window.location.href.toLowerCase()`, `'https://tankionline.com/'` );
replace( `!window.isBuildForChina`, `false` );


export async function launch () {

	window.fbq = () => null;
	window.gtag = () => null;

	document.body.append( html( body ) );

	$( '[main-css]' ).href = cssUrl;
	$( 'html' ).classList.add( 'GlobalStyle-html' );
	$( 'body' ).classList.add( 'GlobalStyle-body' );

	const blob = new Blob( [ js ], { type: 'application/javascript' } );
	const jsUrl = URL.createObjectURL( blob );

	document.querySelector( '[main-js]' ).src = jsUrl;

}

export function replace ( find, replace ) {

	js = js.replace( find, replace );

}