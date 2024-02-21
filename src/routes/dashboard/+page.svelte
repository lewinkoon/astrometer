<script lang="ts">
	import type { PageData } from "../dashboard/$types";

	import Chart from "$lib/Chart.svelte";
	import Graph from "$lib/icons/Graph.svelte";

	export let data: PageData;
</script>

<section class="info">
	<h1 class="title">
		<Graph />
		Dashboard
	</h1>
	<p>
		Here you'll find the <strong>evolution</strong> over time of every parameter
	</p>
</section>

<section class="chart">
	<div class="header">
		<h2>Temperature</h2>
		<span class="line" />
	</div>
	{#key data}
		<Chart
			type="Temperature [ºC]"
			parameter={data.temperature}
			time={data.timestamp}
			color="#fb5607"
		/>
	{/key}
</section>

<section class="chart">
	<div class="header">
		<h2>Humidity</h2>
		<span class="line" />
	</div>
	{#key data}
		<Chart
			type="Humidity [%]"
			parameter={data.humidity}
			time={data.timestamp}
			color="#8338ec"
		/>
	{/key}
</section>

<section class="chart">
	<div class="header">
		<h2>Pressure</h2>
		<span class="line" />
	</div>
	{#key data}
		<Chart
			type="Pressure [Pa]"
			parameter={data.pressure}
			time={data.timestamp}
			color="#ff006e"
		/>
	{/key}
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		max-width: 1080px;
		width: 100%;
		margin-bottom: 2rem;
	}

	section.info {
		align-items: center;

		h1 {
			font-size: 3.2rem;
			display: flex;

			:global(#graph) {
				width: 4rem;
			}
		}

		p {
			font-size: 1.6rem;
			max-width: 80%;
			text-align: center;
		}
	}

	section.chart div.header {
		display: flex;
		align-items: center;
		margin-bottom: 1.2rem;

		h2 {
			font-size: 2rem;
		}

		span.line {
			flex-grow: 1;
			border-bottom: 2px solid var(--blue);
			border-radius: 2px;
			margin: auto 1rem auto 1rem;
		}
	}
</style>
