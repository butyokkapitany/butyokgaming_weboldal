import {defineConfig} from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
	integrations: [vue()],
	vite: {
		build: {
			minify: 'terser',
		},
	},
	site: 'https://butyokgaming.hu',
});
