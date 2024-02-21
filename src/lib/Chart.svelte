<script lang="ts">
	export let type: string;
	export let parameter: number[];
	export let time: string[];
	export let color: string;

	import { onMount } from "svelte";
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
		Filler,
	} from "chart.js";
	import "chartjs-adapter-date-fns";
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
		Filler,
	);

	Chart.defaults.font.family = "regular";
	Chart.defaults.borderColor = "#495057";
	Chart.defaults.color = "#f8f9fa";
	let ctx: any;

	onMount(() => {
		new Chart(ctx, {
			type: "line",
			data: {
				labels: time,
				datasets: [
					{
						label: type,
						data: parameter,
						tension: 0.3,
						borderColor: color,
						backgroundColor: color + "22",
						fill: true,
						pointRadius: 5,
						pointBackgroundColor: "#212529",
					},
				],
			},
			options: {
				locale: "en-EN",
				scales: {
					y: {
						title: {
							display: true,
							text: type,
						},
						ticks: {
							precision: 1,
						},
					},
					x: {
						title: {
							display: true,
							text: "Time of measurement",
						},
						type: "time",
						time: {
							unit: "hour",
							displayFormats: {
								day: "eee d/M",
								hour: "HH:ss",
								second: "hh:ss",
							},
						},
						grid: {
							display: true,
						},
					},
				},
				maintainAspectRatio: false,
			},
		});
	});
</script>

<div class="wrapper">
	<canvas id="chart" bind:this={ctx} />
</div>

<style>
	div.wrapper canvas {
		min-width: 600px;
	}
</style>
