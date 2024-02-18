<script lang="ts">
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
	<title>Astrometer</title>
</svelte:head>

<Header />
<slot />
<Footer />

<style>
	:root {
		font-family: regular;
		font-size: 12pt;
		color: var(--text);
		scrollbar-gutter: stable both-edges;
		scroll-behavior: smooth;
		background-color: var(--base);

		--yellow: #ffbe0b;
		--orange: #fb5607;
		--pink: #ff006e;
		--mauve: #8338ec;
		--blue: #3a86ff;
		--text: #f8f9fa;
		--subtext: #e9ecef;
		--overlay0: #adb5bd;
		--overlay1: #ced4da;
		--overlay2: #dee2e6;
		--surface0: #343a40;
		--surface1: #495057;
		--surface2: #6c757d;
		--base: #212529;
		--black: #121417;
	}

	@font-face {
		font-family: regular;
		src: url(/fonts/Nunito.ttf) format("truetype");
	}

	* {
		box-sizing: border-box;
	}

	:global(body) {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		margin: 0;
	}

	:global(section) {
		display: flex;
		flex-direction: column;
		max-width: 1080px;
		width: 100%;
		margin-bottom: 2rem;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 0;
	}

	:global(p, ol, ul, dl, table, blockquote) {
		font-size: 1.2rem;
		margin: 0 0 1.5rem;
		color: var(--text);
	}

	:global(a) {
		text-decoration: none;
		color: var(--text);
	}

	:global(strong) {
		color: var(--yellow);
	}

	@media (max-width: 720px) {
		:root {
			font-size: 10pt;
		}
	}

	@media (max-width: 600px) {
		:root {
			font-size: 9pt;
		}
	}

	@media (max-width: 480px) {
		:root {
			font-size: 8pt;
		}
	}
</style>
