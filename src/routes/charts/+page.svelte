<script lang="ts">
	import type { PageData } from './$types';
	import { invalidateAll } from '$app/navigation';
	import Chart from '$lib/Chart.svelte';

	export let data: PageData;
	$: ({ bmp280 } = data);
</script>

<section class="chart">
	<div class="header">
		<h2>Temperature</h2>
		<span class="line" />
		<button on:click={() => invalidateAll()}>Update</button>
	</div>
	{#key bmp280}
		<Chart type="temperature" value={bmp280} />
	{/key}
</section>

<section class="chart">
	<div class="header">
		<h2>Pressure</h2>
		<span class="line" />
		<button on:click={() => invalidateAll()}>Update</button>
	</div>
	{#key bmp280}
		<Chart type="pressure" value={bmp280} />
	{/key}
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		max-width: 1080px;
		width: 100%;
		margin-bottom: 2rem;

		padding: 2rem;
		background-color: var(--surface0);
		border: thin solid var(--surface1);
		border-radius: 10px;

		div.header {
			display: flex;
			align-items: center;
			margin-bottom: 1.2rem;

			h2 {
				font-size: 1.4rem;
			}

			span.line {
				flex-grow: 1;
				border-bottom: 4px solid var(--blue);
				border-radius: 2px;
				margin: auto 1rem auto 1rem;
			}

			button {
				padding: 0.4rem 0.8rem;
				font-size: 1rem;
				color: var(--text);
				border-radius: 12px;
				border: thin solid var(--surface2);
				background-color: var(--surface1);

				&:hover {
					border: thin solid var(--red);
					font-weight: bold;
				}
			}
		}
	}
</style>
