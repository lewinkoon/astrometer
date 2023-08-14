<script lang="ts">
	import type { PageData } from './$types';

	import Intro from '$lib/Intro.svelte';
	import Indicator from '$lib/Indicator.svelte';

	export let data: PageData;

	const now = data.data?.shift();
	const d = new Date(now?.time);

	const months: { [id: string]: string } = {
		0: 'January',
		1: 'February',
		2: 'March',
		3: 'April',
		4: 'May',
		5: 'June',
		6: 'July',
		7: 'August',
		8: 'September',
		9: 'October',
		10: 'November',
		11: 'December'
	};

	const year = d.getFullYear();
	const month = months[d.getMonth()];
	const day = d.getDate();

	let date = `${day} ${month} ${year}`;
	let time = new Date(now?.time).toLocaleTimeString();
	let temp = now?.temperature;
	let pressure = now?.pressure;

	console.log(date);
</script>

<section class="intro">
	<Intro />
</section>

<section class="indicators">
	<div class="title">
		<h2>Last measurement</h2>
		<span class="line" />
		<span class="date">{date}</span>
	</div>
	<div class="content">
		<Indicator type={'time'} value={time} />
		<Indicator type={'temperature'} value={temp} />
		<Indicator type={'pressure'} value={pressure} />
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		max-width: 1080px;
		width: 100%;
		margin-bottom: 4rem;
	}

	@media (max-width: 1080px) {
		div.content {
			grid-template-columns: repeat(1, auto);
		}
	}

	div.title {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}

	div.title h2 {
		font-size: 2rem;
	}

	div.title span.line {
		flex-grow: 1;
		border-bottom: 4px solid var(--blue);
		border-radius: 2px;
		margin: auto 1rem auto 1rem;
	}

	div.title span.date {
		font-size: 1.2rem;
		padding: 0.4rem 0.8rem;
		border-radius: 10px;
		border: thin solid var(--surface1);
		background-color: var(--surface0);
	}

	div.content {
		border-radius: 10px;
		display: grid;
		grid-template-columns: repeat(3, auto);
		gap: 2rem;
	}
</style>
