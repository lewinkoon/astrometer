<script>
	import Satellite from '$lib/icons/Satellite.svelte';
	import Github from '$lib/icons/Github.svelte';
</script>

<header>
	<a href="/" class="title"><Satellite />Astro<span>meter</span></a>
	<span class="line" />
	<a href="https://github.com/lewinkoon"><Github /></a>
</header>

<style>
	header {
		display: flex;
		align-items: baseline;
		padding: 1rem;
		max-width: 1080px;
		width: 100%;
	}

	a.title {
		display: flex;
		align-items: center;
		font-size: 1.6rem;
		/* background-color: var(--surface0); */
		border-radius: 10px;
	}

	a.title span {
		font-weight: bold;
		color: var(--blue);
		transition: color 0.25s ease-in-out;
	}

	a.title:hover span {
		color: var(--red);
	}

	span.line {
		flex-grow: 1;
		border-bottom: 2px solid var(--surface0);
		border-radius: 1px;
		margin: auto 1rem auto 1rem;
	}

	:global(svg) {
		width: 2rem;
		height: auto;
	}

	:global(#satellite) {
		margin-right: 0.5rem;
	}
</style>
