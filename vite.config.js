import { sveltekit } from '@sveltejs/kit/vite'
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit({
			preprocess: [
				sveltePreprocess({
					scss: true
				})
			]
		})
	]
}

export default config
