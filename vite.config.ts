import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { GLOBAL_ALIASES } from "./src/config/helpers/global.aliases.js";
import { mdsvex } from 'mdsvex';
import figmaPlugin from './plugins/figma';

// import path from 'path';

export default defineConfig({
	resolve: GLOBAL_ALIASES,
	build: {  },
    // lib: {
		// 	name: 'pfbuild',
    //   entry: ['src/main.js'],
    //   fileName: (format, entryName) => `my-lib-${entryName}.${format}.js`,
    //   // cssFileName: 'my-lib-style',
    // }
	plugins: [
		sveltekit(),
    {
      markup: ({ content }) => processHbs(content),
    },
    mdsvex({
      extensions: ['.svx', '.md'],
    }),
		figmaPlugin({
      watch: process.env.FIGMA_AUTO_UPDATE === 'true',
      outDir: '.figma-components',
      // Leverages Bun's built-in watchers for efficiency
      watchOptions: {
        usePolling: false
      }
    })
	],
	server: {
		fs: {
			allow: ['./src']
		}
	},
});

{
	markup: ({ content }) => processHbs(content),
},
mdsvex({
	extensions: ['.svx', '.md'],
}),		


