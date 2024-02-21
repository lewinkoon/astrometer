<script lang="ts">
	import type { PageData } from "./$types";

	import Intro from "$lib/Intro.svelte";
	import Indicator from "$lib/Indicator.svelte";

	export let data: PageData;
</script>

<section class="intro">
	<Intro />
</section>

<section class="indicators">
	<div class="title">
		<h2>Last updated</h2>
		<span class="line" />
		<time>{data.date}</time>
	</div>
	<div class="content">
		<!-- <Indicator type={"time"} value={time} /> -->
		<Indicator type={"temperature"} value={data.temperature} />
		<Indicator type={"humidity"} value={data.humidity} />
		<Indicator type={"pressure"} value={data.pressure} />
	</div>
</section>

<style>
	div.title {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
		gap: 1rem;
	}

	div.title h2 {
		font-size: 2rem;
		color: var(--subtext);
	}

	div.title span.line {
		flex-grow: 1;
		border-bottom: 2px solid var(--blue);
		border-radius: thin;
	}

	div.title time {
		font-size: 1.4rem;
		font-family: mono;
		color: var(--yellow);
	}

	div.content {
		border-radius: 10px;
		display: grid;
		grid-template-columns: repeat(3, auto);
		gap: 2rem;
	}

	@media (max-width: 1020px) {
		div.content {
			grid-template-columns: repeat(2, auto);
		}
	}

	@media (max-width: 600px) {
		div.content {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
