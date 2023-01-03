
export const name = 'PackageViewer';
export const type = 'util';
export const title = 'Список пакетов';
export const desc = 'Отображает полный список танковых классов с возможностью фильтрации';

import { Packages, Tanki } from 'mods';


const html = t => document.createRange().createContextualFragment( t );
const $ = url => import.meta.resolve( url );


export function launch () {

console.log(Tanki.js.length);	Packages.use( [ 'launcher.main:', ( f => render() ).bind( this ) ] );
console.log(Tanki.js.length);	Tanki.replace( /,.{2,3}\(\)}\(t.exports/, '}(t.exports' );
console.log(Tanki.js.length);	

	const blob = new Blob( [ Tanki.js ], { type: 'application/javascript' } );
	const url = URL.createObjectURL( blob );
	const script = document.createElement( 'script' );
	script.setAttribute( 'type', 'module' );
	script.src = url;

	document.body.append( script );

}

async function render () {

	document.body.append( html( body ) );

	const text = document.querySelector( '[text]' );
	const input = document.querySelector( 'input' );

	const filter = () => text.textContent = Packages.list( input.value );

	input.addEventListener( 'change', filter ); filter();

	document.addEventListener( 'keydown', event => {

		if ( event.key == 'F2' ) {

			console.log( Packages.get( document.getSelection().toString() ) )

		}

	})

}


const body = `
	<style>
		
		body {
			display: flex;
		    flex-direction: column;
		    margin: 0;
		    height: 100vh;
		    width: 100vw;
		    font-family: Consolas;
		    font-size: 1.8vh;
		}

		[text] {
		    white-space: pre-wrap;
		    height: 85vh;
		    margin: 2.5vh;
		    background: white;
		    overflow: auto;
		}

		[filter] {
			display: flex;
		    justify-content: center;
		    align-items: center;
		    height: 10vh;
		    background: #c7cbd1;
		}

		input {
			all: unset;
			width: 95vw;
		    background: white;
		    padding: 1vh;
		    border-radius: 0.6vh;
		}

	</style>

	<div text></div>
	<div filter>
		<input>
	</div>
`;