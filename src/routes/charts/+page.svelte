<script lang="ts">
	import type { PageData } from './$types';
	import Chart from '$lib/Chart.svelte';
	import Intro from '$lib/Intro.svelte';

	export let data: PageData;
	$: ({ bmp280 } = data);
</script>

<section class="chart">
	<!-- <div>Hello</div> -->
	<Chart type="Temperature" value={bmp280} />
</section>

<section class="chart">
	<!-- <div>Hello</div> -->
	<Chart type="Temperature" value={bmp280} />
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		max-width: 1080px;
		width: 100%;
		margin-bottom: 2rem;
	}
</style>
