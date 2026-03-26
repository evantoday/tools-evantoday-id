import { test, expect } from '@playwright/test';

const toolPages = [
	{ slug: 'tiktok-downloader', name: 'TikTok' },
	{ slug: 'instagram-downloader', name: 'Instagram' },
	{ slug: 'instagram-reels-downloader', name: 'Reels' },
	{ slug: 'instagram-story-downloader', name: 'Stories' },
	{ slug: 'instagram-profile-picture-downloader', name: 'Profile' },
	{ slug: 'youtube-downloader', name: 'YouTube' },
	{ slug: 'youtube-shorts-downloader', name: 'Shorts' },
	{ slug: 'twitter-video-downloader', name: 'Twitter' },
	{ slug: 'facebook-video-downloader', name: 'Facebook' },
	{ slug: 'pinterest-downloader', name: 'Pinterest' },
	{ slug: 'snapchat-downloader', name: 'Snapchat' },
	{ slug: 'threads-downloader', name: 'Threads' },
];

for (const tool of toolPages) {
	test.describe(`${tool.name} (/${tool.slug}/)`, () => {
		test('page loads with 200', async ({ page }) => {
			const response = await page.goto(`/${tool.slug}/`);
			expect(response?.status()).toBe(200);
		});

		test('has exactly one H1', async ({ page }) => {
			await page.goto(`/${tool.slug}/`);
			const h1s = page.locator('h1');
			await expect(h1s).toHaveCount(1);
		});

		test('has download form with URL input and submit button', async ({ page }) => {
			await page.goto(`/${tool.slug}/`);
			const input = page.locator('#url-input');
			await expect(input).toBeVisible();
			await expect(input).toHaveAttribute('type', 'url');
			await expect(input).toHaveAttribute('placeholder', /.+/);

			const button = page.locator('#download-form button[type="submit"]');
			await expect(button).toBeVisible();
		});

		test('has FAQ section with expandable items', async ({ page }) => {
			await page.goto(`/${tool.slug}/`);
			const faqHeading = page.getByText('Frequently Asked Questions');
			await expect(faqHeading).toBeVisible();

			const faqButtons = page.locator('[data-faq-toggle]');
			const count = await faqButtons.count();
			expect(count).toBeGreaterThan(0);

			// Click first FAQ item and verify it expands
			const firstButton = faqButtons.first();
			await firstButton.click();
			const firstContent = page.locator('[data-faq-content]').first();
			await expect(firstContent).toBeVisible();
		});

		test('has related tools section', async ({ page }) => {
			await page.goto(`/${tool.slug}/`);
			await expect(page.getByText('You might also like')).toBeVisible();
		});

		test('has breadcrumbs', async ({ page }) => {
			await page.goto(`/${tool.slug}/`);
			await expect(page.getByRole('link', { name: 'Home' })).toBeVisible();
		});

		test('has meta description', async ({ page }) => {
			await page.goto(`/${tool.slug}/`);
			const meta = page.locator('meta[name="description"]');
			const content = await meta.getAttribute('content');
			expect(content).toBeTruthy();
			expect(content!.length).toBeGreaterThan(50);
		});

		test('has JSON-LD schemas (WebApplication + FAQPage + BreadcrumbList)', async ({ page }) => {
			await page.goto(`/${tool.slug}/`);
			const schemas = page.locator('script[type="application/ld+json"]');
			const count = await schemas.count();
			expect(count).toBeGreaterThanOrEqual(3);

			const allText = await Promise.all(
				Array.from({ length: count }, (_, i) => schemas.nth(i).textContent())
			);
			const combined = allText.join(' ');
			expect(combined).toContain('WebApplication');
			expect(combined).toContain('FAQPage');
			expect(combined).toContain('BreadcrumbList');
		});
	});
}
