export const name = 'Resources';
export const type = 'util';
export const title = 'Замена ресурсов';
export const desc = 'Таблица замен ресурсов игры на основе регулярных выражений';

import { Tanki } from 'mods';


let urls = [];
let used = false;

export function use ( ..._urls ) {

	if ( ! used && ( used = true ) ) {

		Tanki.replace( /(n\.p\+".+?")/g, `mods.${ name }.match($1)` );
		Tanki.replace( /"url\('"\+(.)\+"'\)"/, `"url('"+mods.${ name }.match($1)+"')"` );
		Tanki.replace( /window.fetch\((.+?)\)/g, `mods.${ name }.fetch($1)` );

		const setAttribute = HTMLImageElement.prototype.setAttribute;

		HTMLImageElement.prototype.setAttribute = function ( name, value ) {

			if ( name === 'src' ) value = match( value );

			return setAttribute.bind( this )( name, value );

		}

	}

	urls = _urls.reverse().concat( urls );

}

export function match ( url ) {

	for ( let e of urls )
		if ( url.match( e[0] ) ) return e[1];

	return url;

}

export function fetch ( url ) {

	return window.fetch( match( url ) );

}