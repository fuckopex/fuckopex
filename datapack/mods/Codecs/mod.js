export const name = 'CODECS';
export const type = 'utils';
export const title = 'Танки CODECS';
export const desc = '';


import { Packages, Tanki } from 'mods';

export function launch () {

	window.Packages = Packages;

	Packages.use(

		[ /Codec/, f => {

			const codecName = f.$metadata$?.simpleName;

			if ( codecName === undefined ) { console.warn(f); return; }

			let decode_1 = null;
			let encode_2 = null;

			try {

				decode_1 = Packages.prop( f.prototype, 'decode', 1 );
				encode_2 = Packages.prop( f.prototype, 'encode', 2 );

			} catch (e) {

				console.error( codecName );
				return;

			}

			if ( decode_1 && encode_2 ) {

				const decode = f.prototype[ decode_1 ];
				const encode = f.prototype[ encode_2 ];

				f.prototype[ decode_1 ] = function ( pb ) {

					const result = decode.bind( this )( pb );

					console.log( `%cd: ${ codecName }`, 'color: blue;', result );

					return result;

				}

				f.prototype[ encode_2 ] = function ( pb, val ) {

					const result = encode.bind( this )( pb, val );

					console.log( `%ce: ${ codecName }`, 'color: red;', val );

					return result;

				}				

			}

		}],

	);

	Tanki.launch();

}