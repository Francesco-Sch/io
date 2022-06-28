import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@import '../styles/index.scss';`
		}
	}),

	kit: {
		adapter: adapter(),
		vite: {
			server: {
				watch: {
					usePolling: true
				}
			}
		}
	}
};

export default config;