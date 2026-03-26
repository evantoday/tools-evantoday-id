import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://tools.evantoday.id',
	adapter: cloudflare({
		platformProxy: { enabled: true },
	}),
	integrations: [
		sitemap({
			filter(page) {
				return !page.includes('/api/') && !page.includes('/terms') && !page.includes('/privacy-policy');
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
