import { readable, writable } from 'svelte/store';

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

/* ----------------
The Framework
---------------- */
export const framework = writable([
	{
		index: 1,
		title: 'This website',
		id: 'website',
		content: '',
		show: writable(false)
	},
	{
		index: 2,
		title: 'Web-Notebooks',
		id: 'notebooks',
		content: '',
		show: writable(false)
	},
	{
		index: 3,
		title: 'Custom JupyterLab',
		id: 'jupyterlab',
		content: '',
		show: writable(false)
	},
	{
		index: 4,
		title: 'JupyterLab Widgets',
		id: 'widgets',
		content: '',
		show: writable(false)
	}
]);
