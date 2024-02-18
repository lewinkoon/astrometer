<script>
	import Satellite from "$lib/icons/Satellite.svelte";
	import Graph from "$lib/icons/Graph.svelte";
	import Files from "$lib/icons/Files.svelte";
	import Telegram from "$lib/icons/Telegram.svelte";
</script>

<a href="/" class="title">
	<h1>Astro<span>meter</span>&nbsp;</h1>
	<Satellite />
</a>

<p>Weather data <strong>logger</strong> based on a ESP32 microcontroller</p>

<div class="links">
	<a href="/dashboard" class="init"><Graph />&nbsp;Board</a>
	<a href="/docs" class="init"><Files />&nbsp;Docs</a>
	<a href="https://t.me/astrometerbot" class="bot"><Telegram />&nbsp;Bot</a>
</div>

<style>
	a.title {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		& h1 {
			font-size: 4rem;

			&:hover {
				& span {
					color: var(--yellow);
				}
			}
		}

		& span {
			color: var(--blue);
			transition: color 0.2s ease-in-out;
		}

		& #satellite {
			width: 4.5rem;
		}
	}

	p {
		max-width: 80%;
		text-align: center;
		font-size: 1.6rem;
		margin: 0 auto 2rem;
		align-self: center;
	}

	div.links {
		display: flex;
		justify-content: center;
		gap: 1rem;

		& a {
			padding: 0.5rem 1rem;
			background-color: var(--surface0);
			border-radius: 12px;
			border: thin solid var(--surface0);
			font-size: 1.2rem;
			display: flex;
			align-items: center;

			&:hover {
				background-color: var(--surface1);
				border: thin solid var(--surface1);
			}
		}
	}
</style>
