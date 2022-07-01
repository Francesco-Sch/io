import { readable, writable } from 'svelte/store';

/* ----------------
Navigation
---------------- */
export const navigation = readable([
	{
		name: 'Introduction',
		link: 'introduction'
	},
	{
		name: 'The Framework',
		link: 'the-framework'
	},
	{
		name: 'Notebooks',
		link: 'notebooks'
	},
	{
		name: 'Documentation',
		link: 'documentation'
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
		content: '/content/website.md',
		show: writable(false)
	},
	{
		index: 2,
		title: 'Web-Notebooks',
		id: 'notebooks',
		content: '/content/web-notebooks.md',
		show: writable(false)
	},
	{
		index: 3,
		title: 'Custom JupyterLab',
		id: 'jupyterlab',
		content: '/content/custom-jupyterlab.md',
		show: writable(false)
	},
	{
		index: 4,
		title: 'JupyterLab Widgets',
		id: 'widgets',
		content: '/content/jupyterlab-widgets.md',
		show: writable(false)
	}
]);

/* ----------------
Notebooks
---------------- */
export const notebooks = readable([
	{
		title: 'Scraping data with Pinterest',
		link: 'http://localhost:8888/lab/workspaces/pinterest/tree/notebooks/Scraping-Data-with-Pinterest.ipynb',
		available: true
	},
	{
		title: 'Use Clip-Guided VQGAN to generate images',
		link: 'http://localhost:8888/lab/workspaces/VQGAN/tree/notebooks/Use-CLIP-guided-VQGAN-to-generate-images.ipynb',
		available: true
	},
	{
		title: 'Fine tune StyleGAN 3',
		link: '',
		available: false
	}
]);
