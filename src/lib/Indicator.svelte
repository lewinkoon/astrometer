<script lang="ts">
	export let type: string;
	export let value: number;

	import Fire from "$lib/icons/Fire.svelte";
	import Droplet from "$lib/icons/Droplet.svelte";
	import Cloud from "$lib/icons/Cloud.svelte";

	interface Parameters {
		[index: string]: {
			title: string;
			unit: string;
			component: any;
		};
	}

	const bmp280: Parameters = {
		temperature: {
			title: "Temperature",
			unit: "ºC",
			component: Fire,
		},
		humidity: {
			title: "Humidity",
			unit: "%",
			component: Droplet,
		},
		pressure: {
			title: "Pressure",
			unit: "hPa",
			component: Cloud,
		},
	};
</script>

<div class="indicator">
	<div class="title">
		<h3>{bmp280[type].title}</h3>
		<svelte:component this={bmp280[type].component} />
	</div>
	<div class="value">
		{value}&nbsp;<span class="unit">{bmp280[type].unit}</span>
	</div>
</div>

<style>
	div.indicator {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1.2rem 1.6rem;
		border-radius: 12px;
		border: thin solid var(--surface0);
		background-color: var(--surface0);
		color: var(--text);
	}

	div.title {
		display: flex;
		justify-content: center;
		gap: 0.4rem;
		font-size: 1.2rem;
		font-weight: bold;
		color: var(--subtext);
		margin-bottom: 0.8rem;
	}

	div.value {
		font-size: 2.4rem;
		font-weight: bold;
	}

	span.unit {
		color: var(--blue);
	}

	:global(#measurement) {
		width: 2rem;
		height: auto;
	}
</style>
