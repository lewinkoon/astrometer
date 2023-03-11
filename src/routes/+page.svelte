<script lang="ts">
	import type { PageData } from './$types';
	import { invalidate, invalidateAll } from '$app/navigation';

	import Intro from '$lib/Intro.svelte';
	import Indicator from '$lib/Indicator.svelte';

	export let data: PageData;
	$: ({ bmp280 } = data);
</script>



<section class="intro">
	<Intro />
</section>

<section class="indicators">
	<div class="title">
		<h2>Last measurements</h2>
		<span class="line" />
		<button on:click={() => invalidateAll()}>Update</button>
	</div>
	<div class="content">
		<Indicator type={'time'} value={new Date(bmp280[0].time).toLocaleTimeString()} />
		<Indicator type={'temperature'} value={bmp280[0].temperature} />
		<Indicator type={'pressure'} value={bmp280[0].pressure} />
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		max-width: 1080px;
		width: 100%;
		margin-bottom: 2rem;
		div.title {
			display: flex;
			align-items: center;
			margin-bottom: 1rem;

			h2 {
				font-size: 2rem;
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
				color: var(--light);
				border-radius: 12px;
				border: thin solid var(--surface1);
				background-color: var(--surface0);

				&:hover {
					border: thin solid var(--red);
				}
			}
		}

		div.content {
			border-radius: 10px;
			display: grid;
			grid-template-columns: repeat(3, auto);
			gap: 2rem;
		}
	}
</style>
