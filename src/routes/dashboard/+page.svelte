<script lang="ts">
	import type { PageData } from "../dashboard/$types";
	import Chart from "$lib/Chart.svelte";
	import Graph from "$lib/icons/Graph.svelte";

	export let data: PageData;
	const bmp280 = data.data;
</script>

<section class="info">
	<h1 class="title">
		<Graph />
		Dashboard
	</h1>
	<p>Here you'll find the <em>evolution</em> over time of every parameter</p>
</section>

{#each ["Temperature", "Pressure"] as param}
	<section class="chart">
		<div class="header">
			<h2>{param}</h2>
			<span class="line" />
		</div>
		{#key bmp280}
			<Chart type={param.toLowerCase()} value={bmp280} />
		{/key}
	</section>
{/each}

<style>
	section {
		display: flex;
		flex-direction: column;
		max-width: 1080px;
		width: 100%;
		margin-bottom: 2rem;

		&.info {
			align-items: center;

			& h1 {
				font-size: 3.2rem;
				display: flex;
				align-items: center;

				& #graph {
					width: 4rem;
				}
			}

			& p {
				font-size: 1.6rem;
			}
		}

		&.chart {
			padding: 1.6rem;
			background-color: var(--surface0);
			border: thin solid var(--surface1);
			border-radius: 10px;

			& div.header {
				display: flex;
				align-items: center;
				margin-bottom: 1.2rem;

				& h2 {
					font-size: 1.4rem;
				}

				& span.line {
					flex-grow: 1;
					border-bottom: 2px solid var(--blue);
					border-radius: 2px;
					margin: auto 1rem auto 1rem;
				}
			}
		}
	}
</style>
