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

		--darker: #212529;
		--dark: #495057;
		--medium: #adb5bd;
		--light: #dee2e6;
		--lighter: #f8f9fa;
		--accent: #3a86ff;

		--rosewater: #f2d5cf;
		--flamingo: #eebebe;
		--pink: #f4b8e4;
		--mauve: #ca9ee6;
		--red: #e78284;
		--maroon: #ea999c;
		--peach: #ef9f76;
		--yellow: #e5c890;
		--green: #a6d189;
		--teal: #81c8be;
		--sky: #99d1db;
		--sapphire: #85c1dc;
		--blue: #8caaee;
		--lavender: #babbf1;
		--text: #c6d0f5;
		--subtext1: #b5bfe2;
		--subtext0: #a5adce;
		--overlay2: #949cbb;
		--overlay1: #838ba7;
		--overlay0: #737994;
		--surface2: #626880;
		--surface1: #51576d;
		--surface0: #414559;
		--base: #303446;
		--mantle: #292c3c;
		--crust: #232634;
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
		margin-bottom: 4rem;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-weight: normal;
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

	:global(em) {
		color: var(--green);
		font-style: italic;
	}

	@media (max-width: 720px) {
		:root {
			font-size: 10pt;
		}
	}

	@media (max-width: 480px) {
		:root {
			font-size: 9pt;
		}
	}
</style>
