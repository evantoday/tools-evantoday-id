import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
	test('loads and has correct title', async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveTitle(/EvanTools/);
	});

	test('has H1 heading', async ({ page }) => {
		await page.goto('/');
		const h1 = page.locator('h1');
		await expect(h1).toBeVisible();
		await expect(h1).toContainText('Download Videos & Images');
	});

	test('displays all 12 tool cards', async ({ page }) => {
		await page.goto('/');
		const cards = page.locator('a[href*="-downloader"]');
		await expect(cards).toHaveCount(12);
	});

	test('has How It Works section', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByText('How It Works')).toBeVisible();
		await expect(page.getByText('Copy Link')).toBeVisible();
		await expect(page.getByText('Paste URL')).toBeVisible();
	});

	test('has Why Use EvanTools section', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByText('Why Use EvanTools')).toBeVisible();
		await expect(page.getByText('100% Free')).toBeVisible();
	});

	test('header and footer are visible', async ({ page }) => {
		await page.goto('/');
		await expect(page.getByRole('link', { name: /EvanTools/i }).first()).toBeVisible();
		await expect(page.getByText('Privacy Policy').first()).toBeVisible();
	});

	test('tool cards link to correct pages', async ({ page }) => {
		await page.goto('/');
		const tiktokCard = page.locator('a[href*="tiktok-downloader"]').first();
		await expect(tiktokCard).toBeVisible();
		await tiktokCard.click();
		await expect(page).toHaveURL(/tiktok-downloader/);
	});

	test('has WebSite JSON-LD schema', async ({ page }) => {
		await page.goto('/');
		const schema = page.locator('script[type="application/ld+json"]');
		const count = await schema.count();
		expect(count).toBeGreaterThan(0);
		const text = await schema.first().textContent();
		expect(text).toContain('"@type":"WebSite"');
	});
});
