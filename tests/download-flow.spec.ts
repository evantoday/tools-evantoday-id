import { test, expect } from '@playwright/test';

test.describe('Download Flow - TikTok', () => {
	test('submitting empty URL shows validation', async ({ page }) => {
		await page.goto('/tiktok-downloader/');
		const button = page.locator('#download-form button[type="submit"]');
		await button.click();
		// HTML5 validation should prevent submission — input should be invalid
		const input = page.locator('#url-input');
		const isValid = await input.evaluate((el: HTMLInputElement) => el.validity.valid);
		expect(isValid).toBe(false);
	});

	test('submitting invalid URL shows error message', async ({ page }) => {
		await page.goto('/tiktok-downloader/');
		const input = page.locator('#url-input');
		await input.fill('https://not-a-valid-platform.com/video/123');
		const button = page.locator('#download-form button[type="submit"]');
		await button.click();

		// Wait for error state to appear
		const resultError = page.locator('#result-error');
		await expect(resultError).toBeVisible({ timeout: 15000 });
		const text = await resultError.textContent();
		expect(text?.toLowerCase()).toMatch(/unsupported|error|invalid|failed/);
	});

	test('submitting valid TikTok URL shows loading then result', async ({ page }) => {
		await page.goto('/tiktok-downloader/');
		const input = page.locator('#url-input');
		await input.fill('https://www.tiktok.com/@khaby.lame/video/7225108637744896261');
		const button = page.locator('#download-form button[type="submit"]');
		await button.click();

		// Button should show loading state
		await expect(page.locator('#btn-spinner')).toBeVisible({ timeout: 5000 });

		// Result area should eventually appear (success or error)
		const resultArea = page.locator('#result-area');
		await expect(resultArea).toBeVisible({ timeout: 20000 });
	});
});

test.describe('Download Flow - Instagram', () => {
	test('submitting Instagram URL triggers API call', async ({ page }) => {
		await page.goto('/instagram-downloader/');
		const input = page.locator('#url-input');
		await input.fill('https://www.instagram.com/p/CxTest123/');

		// Intercept API call
		const apiPromise = page.waitForResponse(
			(resp) => resp.url().includes('/api/download') && resp.request().method() === 'POST',
			{ timeout: 15000 }
		);

		const button = page.locator('#download-form button[type="submit"]');
		await button.click();

		const apiResponse = await apiPromise;
		expect(apiResponse.status()).toBeLessThan(500);
		const body = await apiResponse.json();
		expect(body).toHaveProperty('success');
		expect(body).toHaveProperty('platform');
	});
});

test.describe('Download Flow - YouTube', () => {
	test('submitting YouTube URL triggers API call with correct platform', async ({ page }) => {
		await page.goto('/youtube-downloader/');
		const input = page.locator('#url-input');
		await input.fill('https://www.youtube.com/watch?v=dQw4w9WgXcQ');

		const apiPromise = page.waitForResponse(
			(resp) => resp.url().includes('/api/download') && resp.request().method() === 'POST',
			{ timeout: 15000 }
		);

		const button = page.locator('#download-form button[type="submit"]');
		await button.click();

		const apiResponse = await apiPromise;
		const body = await apiResponse.json();
		expect(body).toHaveProperty('platform');
	});
});

test.describe('API Endpoint Direct', () => {
	test('POST /api/download with valid TikTok URL returns JSON', async ({ request }) => {
		const response = await request.post('/api/download', {
			data: { url: 'https://www.tiktok.com/@khaby.lame/video/7225108637744896261' },
		});
		expect(response.status()).toBeLessThan(500);
		const body = await response.json();
		expect(body).toHaveProperty('success');
		expect(body).toHaveProperty('platform', 'tiktok');
		expect(body).toHaveProperty('media');
	});

	test('POST /api/download with invalid URL returns 400', async ({ request }) => {
		const response = await request.post('/api/download', {
			data: { url: 'https://example.com/not-a-video' },
		});
		expect(response.status()).toBe(400);
		const body = await response.json();
		expect(body.success).toBe(false);
		expect(body.error).toBeTruthy();
	});

	test('POST /api/download with empty body returns 400', async ({ request }) => {
		const response = await request.post('/api/download', {
			data: {},
		});
		expect(response.status()).toBe(400);
		const body = await response.json();
		expect(body.success).toBe(false);
	});

	test('POST /api/download with Twitter URL returns correct platform', async ({ request }) => {
		const response = await request.post('/api/download', {
			data: { url: 'https://x.com/elonmusk/status/1234567890' },
		});
		const body = await response.json();
		expect(body.platform).toBe('twitter');
	});

	test('POST /api/download with Instagram URL returns correct platform', async ({ request }) => {
		const response = await request.post('/api/download', {
			data: { url: 'https://www.instagram.com/p/ABC123/' },
		});
		const body = await response.json();
		expect(body.platform).toBe('instagram');
	});
});
