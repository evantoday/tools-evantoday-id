export const prerender = false;

import type { APIRoute } from 'astro';
import { detectPlatform } from '../../lib/url-validator';
import { fetchMedia } from '../../lib/cobalt';
import { checkRateLimit } from '../../lib/rate-limit';

export const POST: APIRoute = async ({ request, clientAddress, locals }) => {
	const headers = {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': 'https://tools.evantoday.id',
	};

	try {
		const body = await request.json();
		const { url } = body as { url?: string };

		if (!url || typeof url !== 'string') {
			return new Response(JSON.stringify({ success: false, error: 'Please provide a valid URL.' }), {
				status: 400,
				headers,
			});
		}

		const platform = detectPlatform(url);
		if (!platform) {
			return new Response(JSON.stringify({ success: false, error: 'Unsupported platform. We support TikTok, Instagram, YouTube, Twitter/X, Facebook, Pinterest, Snapchat, and Threads.' }), {
				status: 400,
				headers,
			});
		}

		// Rate limiting
		const runtime = locals?.runtime as { env?: { RATE_LIMIT?: any } } | undefined;
		const kv = runtime?.env?.RATE_LIMIT;
		const ip = clientAddress || request.headers.get('cf-connecting-ip') || 'unknown';
		const rateCheck = await checkRateLimit(ip, kv);

		if (!rateCheck.allowed) {
			return new Response(JSON.stringify({
				success: false,
				error: `Rate limit exceeded. You can make ${rateCheck.remaining} more requests this hour. Please try again later.`,
			}), {
				status: 429,
				headers: { ...headers, 'Retry-After': '3600' },
			});
		}

		const result = await fetchMedia(url);
		const status = result.success ? 200 : 422;

		return new Response(JSON.stringify(result), { status, headers });
	} catch {
		return new Response(JSON.stringify({ success: false, error: 'Something went wrong. Please check your URL and try again.' }), {
			status: 500,
			headers,
		});
	}
};
