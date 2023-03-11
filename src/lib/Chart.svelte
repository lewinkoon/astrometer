<script lang="ts">
	export let type: string;
	export let value: any;

	import { onMount } from 'svelte';
	import {
		Chart,
		ArcElement,
		LineElement,
		PointElement,
		LineController,
		CategoryScale,
		LinearScale,
		TimeScale,
		TimeSeriesScale,
		Filler
	} from 'chart.js';
	import 'chartjs-adapter-date-fns';
	Chart.register(
		ArcElement,
		LineElement,
		PointElement,
		LineController,
		CategoryScale,
		LinearScale,
		TimeScale,
		TimeSeriesScale,
		Filler
	);

	Chart.defaults.font.family = 'regular';
	Chart.defaults.borderColor = '#494d64';
	Chart.defaults.color = '#cad3f5';
	let ctx: any;

	onMount(() => {
		new Chart(ctx, {
			type: 'line',
			data: {
				labels: value.map((e: any) => e.time),
				datasets: [
					{
						label: type,
						data: value.map((e: any) => e.temperature),
						tension: 0.3,
						// borderColor: options[type].color,
						// backgroundColor: options[type].background,
						fill: true,
						pointRadius: 5,
						pointBackgroundColor: '#24273a'
					}
				]
			},
			options: {
				locale: 'en-EN',
				scales: {
					y: {
						title: {
							display: true,
							text: type
						},
						ticks: {
							precision: 2
						}
					},
					x: {
						title: {
							display: true,
							text: 'Time of measurement'
						},
						type: 'time',
						time: {
							unit: 'minute',
							displayFormats: {
								day: 'eee d/M',
								second: 'hh:ss'
							}
						}
					}
				},
				maintainAspectRatio: false
			}
		});
	});
</script>

<div class="wrapper">
	<canvas id="chart" bind:this={ctx} />
</div>

<style>
	div.wrapper {
		padding: 2rem;
		background-color: var(--surface0);
		border: thin solid var(--surface1);
		border-radius: 10px;
	}

	div.wrapper canvas {
		min-width: 420px;
	}
</style>
