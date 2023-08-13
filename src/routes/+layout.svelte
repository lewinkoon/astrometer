<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<title>Astrometer</title>
</svelte:head>

<main>
	<Header />
	<slot />
	<Footer />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		height: 100vh;
		margin: 0;
	}

	:root {
		font-family: regular;
		font-size: 12pt;
		color: var(--text);
		scrollbar-gutter: stable;
		scroll-behavior: smooth;
		background-color: var(--base);

		--darker: #212529;
		--dark: #495057;
		--medium: #adb5bd;
		--light: #dee2e6;
		--lighter: #f8f9fa;
		--accent: #3a86ff;

		--rosewater: #f4dbd6;
		--flamingo: #f0c6c6;
		--pink: #f5bde6;
		--mauve: #c6a0f6;
		--red: #ed8796;
		--maroon: #ee99a0;
		--peach: #f5a97f;
		--yellow: #eed49f;
		--green: #a6da95;
		--teal: #8bd5ca;
		--sky: #91d7e3;
		--sapphire: #7dc4e4;
		--blue: #8aadf4;
		--lavender: #b7bdf8;
		--text: #cad3f5;
		--subtext1: #b8c0e0;
		--subtext0: #a5adcb;
		--overlay2: #939ab7;
		--overlay1: #8087a2;
		--overlay0: #6e738d;
		--surface2: #5b6078;
		--surface1: #494d64;
		--surface0: #363a4f;
		--base: #24273a;
		--mantle: #1e2030;
		--crust: #181926;
	}

	@font-face {
		font-family: regular;
		src: url(/fonts/Nunito.ttf) format('truetype');
	}

	* {
		box-sizing: border-box;
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
