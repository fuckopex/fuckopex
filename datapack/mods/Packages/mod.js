export const name = 'Packages';
export const type = 'util';
export const title = 'Танковые классы';
export const desc = 'Доступ к классам танков через cjs.exports';


import { Tanki } from 'mods';


(function init () {

	const defineProperty = Object.defineProperty;

	Object.defineProperty = function( obj, prop, desc ) {

		desc.configurable = desc.configurable ?? true;

		return defineProperty( obj, prop, desc );

	}

})();

let hooks = [];
let used = false;

export function use ( ..._hooks ) {

	if ( ! used && ( used = true ) ) {
		
		Tanki.replace( /i.exports}/, `mods.${ name }.parse( i.exports ),i.exports}` );

	}

	hooks = hooks.concat( _hooks );

}

export function parse ( descriptor, fullname, descriptors, desc ) {

	if ( descriptor.constructor !== Object ) return;

	descriptors = Object.getOwnPropertyDescriptors( descriptor );

	for ( let name in descriptors ) {

		desc = descriptors[ name ];
		name = ( fullname ? fullname + '.' : '' ) + name;

		if ( desc.value == descriptor || name.match( /\$\$importsForInline\$\$/ ) ) continue;

		if ( desc.value?.constructor == Object )

			hook( name, desc ), parse( desc.value, name );

		else

			hook( name, desc );

	}

}

let packages = {};
let pids = {};

function hook ( fullname, descriptor, pid ) {

	pid = pids[ fullname ] = ( pids[ fullname ] ?? 0 ) + 1;
	fullname = `${ fullname }:${ pid }`;

	Object.defineProperty( packages, fullname, descriptor );

	for ( let hook of hooks )
	if ( fullname.match( hook[0] ) )

		if ( Object.hasOwn( descriptor, 'value' ) )
			hook[ 1 ]( descriptor.value );
		else
			hook[ 1 ]( descriptor.get() );			

}

let gets = {};

export function get ( n ) {

	if ( gets[ n ] === undefined )

		gets[ n ] = Object.getOwnPropertyNames( packages ).filter( fn => fn.match( n ) )?.[0] ?? 'Not Matched';

	return packages[ gets[ n ] ];

}

export function list ( n ) {

	return (
		Object.getOwnPropertyNames( packages ).filter( fn => fn.match( new RegExp( n ) ) ).join( '\n' )
	);

}

export function prop ( object, property, length ) {

	const properties = Array.prototype.concat(
		Object.getOwnPropertyNames( object ),
		Object.getOwnPropertyNames( object.constructor.prototype )
	);

	for ( let prop of properties )
	if ( prop.match( property ) )

		if ( typeof object[ prop ] == 'function' ) {

			if ( object[ prop ].length == length ) return prop;
		
		}
		
		else return prop;

	return null;
	
}
