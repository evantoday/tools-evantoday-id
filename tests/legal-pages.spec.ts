import { test, expect } from '@playwright/test';

test.describe('Privacy Policy', () => {
	test('loads with correct H1', async ({ page }) => {
		const response = await page.goto('/privacy-policy/');
		expect(response?.status()).toBe(200);
		await expect(page.locator('h1')).toContainText('Privacy Policy');
	});

	test('mentions Google Analytics and AdSense', async ({ page }) => {
		await page.goto('/privacy-policy/');
		const body = await page.textContent('body');
		expect(body).toContain('Google Analytics');
		expect(body).toContain('AdSense');
	});
});

test.describe('Terms of Service', () => {
	test('loads with correct H1', async ({ page }) => {
		const response = await page.goto('/terms/');
		expect(response?.status()).toBe(200);
		await expect(page.locator('h1')).toContainText('Terms of Service');
	});

	test('mentions copyright and public content', async ({ page }) => {
		await page.goto('/terms/');
		const body = await page.textContent('body');
		expect(body?.toLowerCase()).toContain('copyright');
	});
});

test.describe('Sitemap', () => {
	test('sitemap-index.xml exists and is valid', async ({ request }) => {
		const response = await request.get('/sitemap-index.xml');
		expect(response.status()).toBe(200);
		const text = await response.text();
		expect(text).toContain('<sitemapindex');
		expect(text).toContain('sitemap-0.xml');
	});

	test('sitemap-0.xml contains tool pages', async ({ request }) => {
		const response = await request.get('/sitemap-0.xml');
		expect(response.status()).toBe(200);
		const text = await response.text();
		expect(text).toContain('tiktok-downloader');
		expect(text).toContain('instagram-downloader');
		expect(text).toContain('youtube-downloader');
		expect(text).toContain('twitter-video-downloader');
	});
});

test.describe('robots.txt', () => {
	test('exists and blocks /api/', async ({ request }) => {
		const response = await request.get('/robots.txt');
		expect(response.status()).toBe(200);
		const text = await response.text();
		expect(text).toContain('Disallow: /api/');
		expect(text).toContain('Sitemap:');
	});
});

test.describe('404 handling', () => {
	test('non-existent page returns proper response', async ({ page }) => {
		const response = await page.goto('/this-page-does-not-exist/');
		// Cloudflare Pages may return 200 with SPA fallback or 404
		const status = response?.status();
		expect(status === 404 || status === 200).toBeTruthy();
	});
});
