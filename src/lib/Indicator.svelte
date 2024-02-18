<script lang="ts">
	export let type: string;
	export let value: string;

	import Time from "$lib/icons/Stopwatch.svelte";
	import Fire from "$lib/icons/Fire.svelte";
	import Droplet from "$lib/icons/Droplet.svelte";
	import Cloud from "$lib/icons/Cloud.svelte";
	import Light from "$lib/icons/Light.svelte";
	import Compass from "$lib/icons/Compass.svelte";
	import Rocket from "$lib/icons/Rocket.svelte";

	interface Parameters {
		[index: string]: {
			title: string;
			unit: string;
			component: any;
		};
	}

	const bmp280: Parameters = {
		time: {
			title: "Time",
			unit: "",
			component: Time,
		},
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
		luminance: {
			title: "Luminance",
			unit: "lm",
			component: Light,
		},
		orientation: {
			title: "Orientation",
			unit: "deg",
			component: Compass,
		},
		acceleration: {
			title: "Acceleration",
			unit: "g",
			component: Rocket,
		},
	};
</script>

<div class="indicator">
	<svelte:component this={bmp280[type].component} />
	<div class="content">
		<div class="title">{bmp280[type].title}</div>
		<div class="value">
			{value}&nbsp;<span class="unit">{bmp280[type].unit}</span>
		</div>
	</div>
</div>

<style>
	div.indicator {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1rem;

		font-size: 2.4rem;
		border-radius: 12px;
		border: thin solid var(--surface1);
		background-color: var(--surface0);
		color: var(--text);
	}

	div.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	div.title {
		font-size: 1.2rem;
		font-weight: bold;
		color: var(--subtext);
	}

	span.unit {
		color: var(--yellow);
	}

	:global(#measurement) {
		width: 4.5rem;
		height: auto;
		margin-right: 1rem;
	}
</style>
