<script lang="ts">
	export let type: string;
	export let value: any;

	import { onMount } from 'svelte';
	import {
		Chart,
		ArcElement,
		Colors,
		LineElement,
		PointElement,
		LineController,
		CategoryScale,
		LinearScale,
		Tooltip,
		TimeScale,
		TimeSeriesScale,
		Filler
	} from 'chart.js';
	import 'chartjs-adapter-date-fns';
	Chart.register(
		ArcElement,
		LineElement,
		Colors,
		PointElement,
		LineController,
		CategoryScale,
		LinearScale,
		TimeScale,
		TimeSeriesScale,
		Tooltip,
		Filler
	);

	interface Sensor {
		[index: string]: {
			label: string;
			value: any;
			color: string;
			background: string;
		};
	}

	const options: Sensor = {
		temperature: {
			label: 'Temperature',
			value: value.map((e: any) => e.temperature),
			color: '#ed8796',
			background: '#ed879633'
		},
		pressure: {
			label: 'Pressure',
			value: value.map((e: any) => e.pressure),
			color: '#a6da95',
			background: '#a6da9533'
		}
	};

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
						label: options[type].label,
						data: options[type].value,
						tension: 0.3,
						borderColor: options[type].color,
						backgroundColor: options[type].background,
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
							text: options[type].label
						},
						ticks: {
							precision: 1
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
						},
						grid: {
							display: false
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
	div.wrapper canvas {
		min-width: 400px;
	}
</style>
