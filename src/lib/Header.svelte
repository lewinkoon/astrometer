<script>
	import Satellite from '$lib/icons/Satellite.svelte';
	import Github from '$lib/icons/Github.svelte';
</script>

<header>
	<a href="/" class="title"><Satellite />astro<span>meter</span></a>
	<span class="line" />
	<a href="https://github.com/lewinkoon"><Github /></a>
</header>

<style lang="scss">
	header {
		display: flex;
		align-items: baseline;
		gap: 2rem;
		max-width: 1080px;
		width: 100%;
		margin-bottom: 4rem;
	}

	a.title {
		display: flex;
		align-items: center;
		font-size: 1.6rem;

		span {
			color: var(--blue);
			transition: color 0.25s ease-in-out;
		}

		&:hover span{
			color: var(--blue);
		}
	}

	span.line {
		flex-grow: 1;
		border-bottom: 2px solid var(--surface0);
		border-radius: 1px;
		margin: auto 0;
	}

	:global(svg) {
		width: 2rem;
		height: auto;
	}

	:global(#satellite) {
		margin-right: 0.5rem;
	}
</style>
