import { readable } from 'svelte/store';

/* ----------------
Navigation
---------------- */
export const navigation = readable([
	{
		name: 'Introduction',
		link: '#introduction'
	},
	{
		name: 'The Framework',
		link: '#the-framework'
	},
	{
		name: 'Notebooks',
		link: '#notebooks'
	},
	{
		name: 'Documentation',
		link: '#documentation'
	}
]);
