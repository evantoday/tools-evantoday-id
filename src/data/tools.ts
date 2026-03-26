export interface Tool {
	slug: string;
	name: string;
	shortName: string;
	platform: string;
	description: string;
	h1: string;
	placeholder: string;
	color: string;
	keywords: string[];
	supportedTypes: string[];
	content: string;
	faq: { q: string; a: string }[];
	related: string[];
}

export const tools: Tool[] = [
	{
		slug: 'tiktok-downloader',
		name: 'TikTok Video Downloader',
		shortName: 'TikTok',
		platform: 'tiktok',
		description: 'Download TikTok videos online for free. Paste any TikTok link and save videos to your device instantly. No signup or app required.',
		h1: 'Download TikTok Videos Online Free',
		placeholder: 'https://www.tiktok.com/@user/video/1234567890',
		color: '#000000',
		keywords: ['tiktok downloader', 'download tiktok video', 'save tiktok', 'tiktok video saver'],
		supportedTypes: ['video'],
		content: `TikTok is the most popular short-form video platform, and sometimes you want to save a video to watch offline or share it somewhere else. Our free TikTok downloader lets you save any public TikTok video to your phone, tablet, or computer in seconds.\n\nJust copy the TikTok video link from the app or website, paste it in the box above, and hit download. The video will be saved directly to your device. Works on iPhone, Android, Windows, and Mac — no app installation needed.\n\nThis tool only downloads publicly available videos. We do not store any videos on our servers. The download happens directly between your browser and TikTok's servers.`,
		faq: [
			{ q: 'How do I copy a TikTok video link?', a: 'Open the TikTok app, tap the Share button on any video, then tap "Copy Link." You can also copy the URL from your browser if you\'re on the TikTok website.' },
			{ q: 'Is this TikTok downloader free?', a: 'Yes, completely free. No signup, no account, no hidden fees.' },
			{ q: 'Can I download TikTok videos on my phone?', a: 'Yes. This tool works on any device with a web browser — iPhone, Android, iPad, or desktop.' },
			{ q: 'Does this remove the TikTok watermark?', a: 'No, videos are downloaded as-is with the original TikTok watermark.' },
			{ q: 'Is it legal to download TikTok videos?', a: 'Downloading publicly available content for personal use is generally acceptable. Always respect the original creator\'s rights and don\'t reupload without permission.' },
		],
		related: ['instagram-reels-downloader', 'youtube-shorts-downloader', 'twitter-video-downloader'],
	},
	{
		slug: 'instagram-downloader',
		name: 'Instagram Downloader',
		shortName: 'Instagram',
		platform: 'instagram',
		description: 'Download Instagram photos and videos for free. Save any public Instagram post, carousel, or video to your device. No login required.',
		h1: 'Download Instagram Photos & Videos',
		placeholder: 'https://www.instagram.com/p/ABC123/',
		color: '#E4405F',
		keywords: ['instagram downloader', 'download instagram photos', 'save instagram video', 'ig downloader'],
		supportedTypes: ['video', 'image'],
		content: `Want to save an Instagram photo or video? Our Instagram downloader makes it simple. Just paste the link to any public Instagram post and download the media directly to your device.\n\nThis works for single photos, videos, and carousel posts (multiple images). The tool fetches the highest quality version available. No Instagram account or login needed on our end.\n\nPerfect for saving inspiration, archiving your favorite posts, or keeping a backup of content you love.`,
		faq: [
			{ q: 'How do I get an Instagram post link?', a: 'Tap the three dots on any post, then tap "Copy Link." Or copy the URL from your browser on instagram.com.' },
			{ q: 'Can I download Instagram carousel posts?', a: 'Yes, this tool supports carousel posts with multiple photos or videos.' },
			{ q: 'Does this work with private accounts?', a: 'No, this tool only works with public Instagram posts. Private account content cannot be accessed.' },
			{ q: 'What quality are the downloads?', a: 'We fetch the highest resolution available from Instagram, typically up to 1080x1080 for photos and 1080p for videos.' },
		],
		related: ['instagram-reels-downloader', 'instagram-story-downloader', 'instagram-profile-picture-downloader'],
	},
	{
		slug: 'instagram-reels-downloader',
		name: 'Instagram Reels Downloader',
		shortName: 'IG Reels',
		platform: 'instagram',
		description: 'Download Instagram Reels videos in HD quality. Free online tool to save any public Instagram Reel to your device. No watermark, no signup.',
		h1: 'Download Instagram Reels in HD',
		placeholder: 'https://www.instagram.com/reel/ABC123/',
		color: '#E4405F',
		keywords: ['instagram reels downloader', 'download reels', 'save instagram reels', 'ig reels saver'],
		supportedTypes: ['video'],
		content: `Instagram Reels are short, entertaining videos — and now you can save them offline. Our Reels downloader grabs the full HD version of any public Instagram Reel.\n\nCopy the Reel link from Instagram, paste it above, and download. It's that simple. The video saves directly to your device without any quality loss.\n\nWorks great for saving workout routines, recipes, tutorials, or any Reel you want to watch later without scrolling through your feed.`,
		faq: [
			{ q: 'How do I copy an Instagram Reel link?', a: 'Open the Reel, tap the three dots or the Share button, then tap "Copy Link."' },
			{ q: 'Are Reels downloaded in HD?', a: 'Yes, we fetch the highest quality available, typically 1080p.' },
			{ q: 'Can I download Reels without the Instagram app?', a: 'Yes, you can copy the Reel link from instagram.com in your browser and paste it here.' },
		],
		related: ['tiktok-downloader', 'instagram-downloader', 'youtube-shorts-downloader'],
	},
	{
		slug: 'instagram-story-downloader',
		name: 'Instagram Story Downloader',
		shortName: 'IG Stories',
		platform: 'instagram',
		description: 'Download Instagram Stories before they disappear. Save any public Instagram Story video or photo for free. Works online, no app needed.',
		h1: 'Download Instagram Stories',
		placeholder: 'https://www.instagram.com/stories/username/123456/',
		color: '#E4405F',
		keywords: ['instagram story downloader', 'download ig stories', 'save instagram stories', 'story saver'],
		supportedTypes: ['video', 'image'],
		content: `Instagram Stories vanish after 24 hours. If you want to keep one, our Story downloader lets you save public Stories before they're gone.\n\nPaste the Story link and download the photo or video instantly. This works for public accounts only — we can't access private or close friends Stories.\n\nGreat for saving memories, keeping receipts, or archiving content from your favorite creators.`,
		faq: [
			{ q: 'How do I get an Instagram Story link?', a: 'Open the Story in a web browser on instagram.com — the URL in your address bar is the Story link. You can also use third-party tools to copy Story links from the app.' },
			{ q: 'Can I download Stories from private accounts?', a: 'No, only Stories from public accounts can be downloaded.' },
			{ q: 'Do Stories download in full quality?', a: 'Yes, we grab the highest quality version Instagram provides.' },
		],
		related: ['instagram-downloader', 'instagram-reels-downloader', 'instagram-profile-picture-downloader'],
	},
	{
		slug: 'instagram-profile-picture-downloader',
		name: 'Instagram Profile Picture Downloader',
		shortName: 'IG Profile Pic',
		platform: 'instagram',
		description: 'Download any Instagram profile picture in full size HD. View and save Instagram profile photos in their original resolution. Free and instant.',
		h1: 'Download Instagram Profile Pictures in Full Size',
		placeholder: 'https://www.instagram.com/username/',
		color: '#E4405F',
		keywords: ['instagram profile picture downloader', 'ig profile pic full size', 'instagram dp download', 'view ig profile picture'],
		supportedTypes: ['image'],
		content: `Instagram shows profile pictures as tiny circles, but the original photo is much larger. Our tool fetches the full-size version of any public Instagram profile picture.\n\nJust paste the Instagram profile URL and download the profile photo in its original resolution. Perfect for when you want to see someone's profile picture clearly or save it.\n\nWorks with any public Instagram account. The image downloads at the highest available quality.`,
		faq: [
			{ q: 'Can I see Instagram profile pictures in full size?', a: 'Yes, this tool downloads the original full-resolution profile picture that Instagram stores, not the tiny cropped circle.' },
			{ q: 'Does this work for any Instagram account?', a: 'It works for any public account. Private accounts may have restricted profile picture access.' },
			{ q: 'What size are the downloaded profile pictures?', a: 'Instagram stores profile pictures at various resolutions. We fetch the largest available version, typically 320x320 or higher.' },
		],
		related: ['instagram-downloader', 'instagram-story-downloader', 'instagram-reels-downloader'],
	},
	{
		slug: 'youtube-downloader',
		name: 'YouTube Video Downloader',
		shortName: 'YouTube',
		platform: 'youtube',
		description: 'Download YouTube videos in HD quality for free. Save any public YouTube video to your device. Fast, free, no signup required.',
		h1: 'Download YouTube Videos in HD',
		placeholder: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
		color: '#FF0000',
		keywords: ['youtube downloader', 'download youtube video', 'save youtube video', 'youtube video saver'],
		supportedTypes: ['video', 'audio'],
		content: `YouTube is the world's largest video platform, and sometimes you need to save a video for offline viewing. Our YouTube downloader lets you save any public YouTube video to your device for free.\n\nPaste the YouTube video URL, choose your preferred quality, and download. We support videos up to the highest available quality. Great for saving tutorials, music videos, lectures, or any content you want to watch without internet.\n\nThis tool is for personal use with publicly available content. Always respect the video creator's rights.`,
		faq: [
			{ q: 'How do I download a YouTube video?', a: 'Copy the video URL from your browser or the YouTube app Share button, paste it in the box above, and click Download.' },
			{ q: 'What quality options are available?', a: 'We offer the highest quality available for each video, typically up to 1080p or 720p depending on the source video.' },
			{ q: 'Can I download YouTube music as audio?', a: 'Our tool focuses on video downloads. For music, consider YouTube Music or other licensed services.' },
			{ q: 'Is downloading YouTube videos legal?', a: 'Downloading publicly available content for personal offline viewing is a common practice. However, re-uploading or distributing copyrighted content is not allowed.' },
		],
		related: ['youtube-shorts-downloader', 'tiktok-downloader', 'facebook-video-downloader'],
	},
	{
		slug: 'youtube-shorts-downloader',
		name: 'YouTube Shorts Downloader',
		shortName: 'YT Shorts',
		platform: 'youtube',
		description: 'Download YouTube Shorts videos for free. Save any YouTube Short to your phone or computer in seconds. No app or signup needed.',
		h1: 'Download YouTube Shorts',
		placeholder: 'https://www.youtube.com/shorts/ABC123',
		color: '#FF0000',
		keywords: ['youtube shorts downloader', 'download youtube shorts', 'save youtube shorts', 'shorts downloader'],
		supportedTypes: ['video'],
		content: `YouTube Shorts are bite-sized vertical videos — think TikTok but on YouTube. Our Shorts downloader makes it easy to save any public Short to your device.\n\nCopy the Shorts URL, paste it here, and download. The video saves in its original quality. Works on all devices — no app installation needed.\n\nPerfect for saving funny clips, tutorials, or motivation videos to watch offline.`,
		faq: [
			{ q: 'How do I get a YouTube Shorts link?', a: 'Open the Short on YouTube, tap Share, then Copy Link. Or copy the URL from your browser — it will contain /shorts/ in the path.' },
			{ q: 'Are Shorts downloaded in HD?', a: 'Yes, we download the highest quality version available.' },
			{ q: 'Can I download Shorts on my phone?', a: 'Yes, this works on any device with a web browser.' },
		],
		related: ['youtube-downloader', 'tiktok-downloader', 'instagram-reels-downloader'],
	},
	{
		slug: 'twitter-video-downloader',
		name: 'Twitter/X Video Downloader',
		shortName: 'Twitter/X',
		platform: 'twitter',
		description: 'Download Twitter (X) videos and GIFs for free. Save any public tweet video to your device instantly. No login or app required.',
		h1: 'Download Twitter/X Videos & GIFs',
		placeholder: 'https://x.com/user/status/1234567890',
		color: '#000000',
		keywords: ['twitter video downloader', 'download twitter video', 'x video downloader', 'save tweet video'],
		supportedTypes: ['video', 'image'],
		content: `Twitter (now X) doesn't have a built-in download button for videos. Our tool fixes that. Paste any tweet link containing a video or GIF, and download it directly to your device.\n\nWe support videos and animated GIFs from public tweets. The download preserves the original quality. Works with both twitter.com and x.com links.\n\nSave breaking news clips, funny videos, sports highlights, or any Twitter video content you want to keep.`,
		faq: [
			{ q: 'How do I copy a tweet link?', a: 'Tap the Share icon on any tweet, then tap "Copy Link." Or copy the URL from your browser on x.com.' },
			{ q: 'Does this work with x.com links?', a: 'Yes, we support both twitter.com and x.com URLs.' },
			{ q: 'Can I download Twitter GIFs?', a: 'Yes, animated GIFs on Twitter are actually stored as videos. Our tool downloads them as video files.' },
			{ q: 'Does this work with Twitter Spaces?', a: 'No, this tool is designed for video and GIF content in tweets, not audio Spaces.' },
		],
		related: ['facebook-video-downloader', 'threads-downloader', 'tiktok-downloader'],
	},
	{
		slug: 'facebook-video-downloader',
		name: 'Facebook Video Downloader',
		shortName: 'Facebook',
		platform: 'facebook',
		description: 'Download Facebook videos in HD for free. Save any public Facebook video to your device. Fast online tool, no app installation needed.',
		h1: 'Download Facebook Videos in HD',
		placeholder: 'https://www.facebook.com/watch/?v=1234567890',
		color: '#1877F2',
		keywords: ['facebook video downloader', 'download facebook video', 'save fb video', 'fb video saver'],
		supportedTypes: ['video'],
		content: `Facebook is full of great video content, but saving videos isn't straightforward. Our Facebook video downloader makes it easy — just paste the video link and download.\n\nWe support videos from public Facebook posts, pages, groups, and Facebook Watch. The tool fetches the highest available quality version.\n\nPerfect for saving recipe videos, news clips, event highlights, or any Facebook video you want to watch offline.`,
		faq: [
			{ q: 'How do I get a Facebook video link?', a: 'Right-click the video and select "Copy link address," or click the three dots on a post and choose "Copy link."' },
			{ q: 'Can I download videos from Facebook groups?', a: 'Yes, as long as the group and post are public.' },
			{ q: 'What about Facebook Reels?', a: 'Yes, Facebook Reels can be downloaded using the same tool. Just paste the Reel link.' },
			{ q: 'Does this work with private videos?', a: 'No, only publicly accessible Facebook videos can be downloaded.' },
		],
		related: ['youtube-downloader', 'twitter-video-downloader', 'instagram-downloader'],
	},
	{
		slug: 'pinterest-downloader',
		name: 'Pinterest Image & Video Downloader',
		shortName: 'Pinterest',
		platform: 'pinterest',
		description: 'Download Pinterest images and videos in full resolution. Save pins, boards, and video pins for free. No signup or watermark.',
		h1: 'Download Pinterest Images & Videos',
		placeholder: 'https://www.pinterest.com/pin/1234567890/',
		color: '#E60023',
		keywords: ['pinterest downloader', 'download pinterest images', 'save pinterest video', 'pin downloader'],
		supportedTypes: ['image', 'video'],
		content: `Pinterest is an incredible source of inspiration — from recipes and home decor to fashion and art. Our Pinterest downloader lets you save any pin image or video in full resolution.\n\nPaste the pin URL, click download, and get the highest quality version of the image or video. No watermarks added, no quality loss.\n\nGreat for mood boards, reference collections, recipe saves, or keeping inspiration for your next project.`,
		faq: [
			{ q: 'How do I copy a Pinterest pin link?', a: 'Click on any pin to open it, then copy the URL from your browser address bar.' },
			{ q: 'Can I download Pinterest video pins?', a: 'Yes, both image pins and video pins are supported.' },
			{ q: 'Are images downloaded in full resolution?', a: 'Yes, we fetch the original full-resolution image from Pinterest.' },
		],
		related: ['instagram-downloader', 'threads-downloader', 'facebook-video-downloader'],
	},
	{
		slug: 'snapchat-downloader',
		name: 'Snapchat Video Downloader',
		shortName: 'Snapchat',
		platform: 'snapchat',
		description: 'Download Snapchat Spotlight and public story videos for free. Save Snapchat videos to your device instantly. No login needed.',
		h1: 'Download Snapchat Videos',
		placeholder: 'https://www.snapchat.com/spotlight/ABC123',
		color: '#FFFC00',
		keywords: ['snapchat downloader', 'download snapchat video', 'save snapchat spotlight', 'snapchat video saver'],
		supportedTypes: ['video'],
		content: `Snapchat Spotlight features viral short videos, and now you can save them. Our Snapchat downloader lets you save any public Spotlight video or public Story to your device.\n\nPaste the Snapchat link, hit download, and the video saves directly to your device. Simple, fast, and free.\n\nNote: This only works with public Spotlight content and public Stories. Private snaps cannot be downloaded.`,
		faq: [
			{ q: 'What Snapchat content can I download?', a: 'Public Spotlight videos and public Stories. Private snaps and direct messages cannot be downloaded.' },
			{ q: 'How do I get a Snapchat Spotlight link?', a: 'Open the Spotlight video, tap Share, then Copy Link.' },
			{ q: 'Does this work with regular Snaps?', a: 'No, this tool only works with publicly shared content like Spotlight videos and public Stories.' },
		],
		related: ['tiktok-downloader', 'instagram-reels-downloader', 'youtube-shorts-downloader'],
	},
	{
		slug: 'threads-downloader',
		name: 'Threads Video & Image Downloader',
		shortName: 'Threads',
		platform: 'threads',
		description: 'Download Threads videos and images for free. Save any public Threads post media to your device. Fast online tool, no app required.',
		h1: 'Download Threads Videos & Images',
		placeholder: 'https://www.threads.net/@user/post/ABC123',
		color: '#000000',
		keywords: ['threads downloader', 'download threads video', 'save threads post', 'threads media saver'],
		supportedTypes: ['video', 'image'],
		content: `Threads by Meta is growing fast, and there's a lot of great content being shared. Our Threads downloader lets you save videos and images from any public Threads post.\n\nPaste the Threads post link, click download, and save the media to your device. Works with both video and image posts.\n\nPerfect for saving viral content, memes, or any Threads post you want to keep.`,
		faq: [
			{ q: 'How do I get a Threads post link?', a: 'Tap the three dots on any Threads post, then tap "Copy Link." Or copy the URL from threads.net in your browser.' },
			{ q: 'Can I download Threads carousel posts?', a: 'Yes, multi-image posts are supported.' },
			{ q: 'Does this work with private accounts?', a: 'No, only public Threads posts can be downloaded.' },
		],
		related: ['instagram-downloader', 'twitter-video-downloader', 'facebook-video-downloader'],
	},
];

export function getToolBySlug(slug: string): Tool | undefined {
	return tools.find((t) => t.slug === slug);
}

export function getRelatedTools(tool: Tool): Tool[] {
	return tool.related
		.map((slug) => tools.find((t) => t.slug === slug))
		.filter((t): t is Tool => t !== undefined);
}
