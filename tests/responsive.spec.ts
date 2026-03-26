import { test, expect } from '@playwright/test';

test.describe('Mobile Responsiveness', () => {
	test.use({ viewport: { width: 375, height: 812 } });

	test('homepage renders correctly on mobile', async ({ page }) => {
		await page.goto('/');
		await expect(page.locator('h1')).toBeVisible();
		// Tool cards should stack vertically — verify they exist
		const cards = page.locator('a[href*="-downloader"]');
		await expect(cards.first()).toBeVisible();
	});

	test('tool page form is usable on mobile', async ({ page }) => {
		await page.goto('/tiktok-downloader/');
		const input = page.locator('#url-input');
		await expect(input).toBeVisible();
		// Input should be full width on mobile
		const box = await input.boundingBox();
		expect(box!.width).toBeGreaterThan(250);

		const button = page.locator('#download-form button[type="submit"]');
		await expect(button).toBeVisible();
		const btnBox = await button.boundingBox();
		expect(btnBox!.width).toBeGreaterThan(100);
	});

	test('FAQ accordion works on mobile', async ({ page }) => {
		await page.goto('/tiktok-downloader/');
		const faqButton = page.locator('[data-faq-toggle]').first();
		await faqButton.scrollIntoViewIfNeeded();
		await faqButton.click();
		const content = page.locator('[data-faq-content]').first();
		await expect(content).toBeVisible();
	});

	test('header is visible on mobile', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByRole('link', { name: /EvanTools/i }).first()).toBeVisible();
	});

	test('footer links are visible on mobile', async ({ page }) => {
		await page.goto('/');
		const footer = page.locator('footer');
		await footer.scrollIntoViewIfNeeded();
		await expect(page.getByText('Privacy Policy').first()).toBeVisible();
	});
});

test.describe('Tablet Responsiveness', () => {
	test.use({ viewport: { width: 768, height: 1024 } });

	test('homepage shows grid layout', async ({ page }) => {
		await page.goto('/');
		const cards = page.locator('a[href*="-downloader"]');
		await expect(cards).toHaveCount(12);
	});

	test('tool page renders properly', async ({ page }) => {
		await page.goto('/youtube-downloader/');
		await expect(page.locator('h1')).toBeVisible();
		await expect(page.locator('#url-input')).toBeVisible();
	});
});
