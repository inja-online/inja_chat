import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	preprocess: [
		vitePreprocess(), 
		mdsvex()
],
	kit: {
		adapter: adapter({
			config: undefined,
			platformProxy: {
				configPath: undefined,
				environment: undefined,
				persist: undefined
			}
		}),
		prerender: {
			entries: ["/"],
		},
		csp: { mode: "auto" },
	},
	extensions: ['.svelte', '.svx']
};

export default config;
