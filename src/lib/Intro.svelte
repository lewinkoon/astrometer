<script>
	import Satellite from '$lib/icons/Satellite.svelte';
	import Rocket from '$lib/icons/Rocket.svelte';
	import Telegram from '$lib/icons/Telegram.svelte';
</script>

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
	<a href="/dashboard" class="init"><Rocket />&nbsp;Get started</a>
	<a href="https://t.me/astrometerbot" class="bot"><Telegram />&nbsp;Telegram</a>
</div>

<style lang="scss">
	a.title {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		h1 {
			font-size: 4.5rem;

			&:hover span {
				color: var(--red);
			}
		}

		span {
			color: var(--blue);
			transition: color 0.3s ease-in-out;
		}

		:global(#satellite) {
			width: 4.5rem;
		}
	}

	p {
		max-width: 60%;
		text-align: center;
		font-size: 1.6rem;
		margin: 0 0 2rem;
		align-self: center;
	}

	div.links {
		display: flex;
		justify-content: center;
		gap: 1rem;

		a {
			padding: 0.5rem 1rem;
			background-color: var(--surface0);
			border-radius: 12px;
			border: thin solid var(--surface1);
			font-size: 1.2rem;
			display: flex;
			align-items: center;

			&.init {
				border: thin solid var(--blue);
			}

			&:hover {
				border: thin solid var(--red);
				font-weight: bold;
			}
		}
	}
</style>
