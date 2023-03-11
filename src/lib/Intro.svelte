<script>
	import Satellite from '$lib/icons/Satellite.svelte';
	import Rocket from '$lib/icons/Rocket.svelte';
	import Telegram from '$lib/icons/Telegram.svelte';
</script>

<section class="intro">
	<a href="/" class="title">
		<h1>Astro<span>meter</span>&nbsp;</h1>
		<Satellite />
	</a>
	<p>
		Realtime data from my weather station which measures
		<span style="color: var(--red)">temperature</span> and
		<span style="color: var(--green)">pressure</span> every minute.
	</p>

	<div class="links">
		<a href="/charts" class="init"><Rocket />&nbsp;Get started</a>
		<a href="https://t.me/astrometerbot"><Telegram />&nbsp;Telegram</a>
	</div>
</section>

<style>
	section.intro {
		max-width: 1080px;
		width: 100%;
		margin: 4rem 0 4rem;
	}

	section.intro a.title {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	section.intro a.title h1 {
		margin: 1rem 0;
		font-size: 4.5rem;
	}

	section.intro a.title span {
		color: var(--blue);
		transition: color 0.3s ease-in-out;
	}

	section.intro a.title h1:hover span {
		color: var(--red);
	}

	section.intro a.title :global(#satellite) {
		width: 4.5rem;
		height: auto;
	}

	section.intro p {
		max-width: 60%;
		text-align: center;
		font-size: 1.5rem;
		margin: 0 auto 2rem;
	}

	div.links {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	div.links a {
		padding: 0.5rem 1rem;
		background-color: var(--surface0);
		border-radius: 12px;
		border: thin solid var(--surface1);
		font-size: 1.2rem;
		display: flex;
		align-items: center;
	}

	div.links a.init {
		border: thin solid var(--blue);
		/* color: var(--blue); */
	}

	div.links a:hover {
		border: thin solid var(--red);
	}
</style>
