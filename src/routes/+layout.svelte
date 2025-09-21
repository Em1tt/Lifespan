<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Basic Meta Tags -->
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="Richard's Personal Lifespan Visualization - A personal timeline showing my life progress from birth (September 23, 2005) based on Slovak life expectancy data with beautiful gradient visualization." />
	<meta name="keywords" content="Richard lifespan, personal life timeline, life visualization, birthday September 23 2005, Slovak life expectancy, personal mortality visualization, life progress" />
	<meta name="author" content="Richard" />
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="7 days" />

	<!-- Open Graph Meta Tags (Facebook, LinkedIn, etc.) -->
	<meta property="og:title" content="Richard's Personal Lifespan Visualization" />
	<meta property="og:description" content="My personal life timeline showing progress from birth (September 23, 2005) based on Slovak life expectancy data with beautiful gradient visualization." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://your-domain.com" />
	<meta property="og:image" content="https://your-domain.com/og-image.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content="Richard's Lifespan Visualization" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Richard's Personal Lifespan Visualization" />
	<meta name="twitter:description" content="My personal life timeline from September 23, 2005 with Slovak life expectancy data visualization." />
	<meta name="twitter:image" content="https://your-domain.com/twitter-image.jpg" />
	<meta name="twitter:creator" content="@your-twitter" />
	<meta name="twitter:site" content="@your-twitter" />

	<!-- Additional Meta Tags -->
	<meta name="theme-color" content="#1e293b" />
	<meta name="msapplication-TileColor" content="#1e293b" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="apple-mobile-web-app-title" content="Richard's Lifespan" />

	<!-- Canonical URL -->
	<link rel="canonical" href="https://your-domain.com" />

	<!-- Favicon and Icons -->
	<link rel="icon" href="/favicon.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />

	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link href="https://fonts.googleapis.com/css2?family=Coiny&display=swap" rel="stylesheet" />

	<!-- Title -->
	<title>Richard's lifespan</title>

	<!-- JSON-LD Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "Richard's Personal Lifespan Visualization",
			"description": "Personal life timeline visualization showing Richard's life progress from birth on September 23, 2005",
			"url": "https://your-domain.com",
			"author": {
				"@type": "Person",
				"name": "Richard",
				"birthDate": "2005-09-23"
			},
			"about": {
				"@type": "Thing",
				"name": "Personal Life Visualization"
			}
		}
	</script>
</svelte:head>

{@render children?.()}

<style>
	:global(.coiny){
		font-family: "Coiny", system-ui;
		font-weight: 400;
		font-style: normal;
	}
	:global(.gradient) {
		background: radial-gradient(
			circle at 0% 20%,
			rgba(81, 246, 59, 0.15) 0%,
			rgba(30, 41, 59, 0.8) 40%,
			rgba(15, 23, 42, 1) 80%
		);
		z-index: 10;
	}
</style>
