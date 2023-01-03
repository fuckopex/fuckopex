export const name = 'EmptyLobby';
export const type = 'game';
export const title = 'Пустой гараж';
export const desc = `Убрана 3D-модель гаража в лобби игры`;


import { Resources, Packages, Tanki } from 'mods';

const $ = url => import.meta.resolve( url );


export function use () {

	Resources.use(

		[ /30023217453322\/.+?\.webp/, 	$`./null.webp` ],
		[ /30023217453322\/object.3ds/, $`./view.3ds` ],

		[ /30044420406347\/.+?\.webp/, 	$`./null.webp` ],
		[ /30044420406347\/object.3ds/, $`./view.3ds` ],
		
		[ /30247065363033\/.+?\.webp/, 	$`./null.webp` ],
		[ /30247065363033\/object.3ds/, $`./view.3ds` ],

	);

}

export function launch () {

	use();
	
	Tanki.use();

}