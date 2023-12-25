<script lang="ts">
	import type { PageData } from "./$types";
	import { Canvas } from "@threlte/core";

	import Intro from "$lib/Intro.svelte";
	import Geometry from "../lib/Model.svelte";
	import Indicator from "$lib/Indicator.svelte";

	export let data: PageData;

	const now = data.data![0];
	const d = new Date(now?.time);

	const months: { [id: string]: string } = {
		0: "Jan",
		1: "Feb",
		2: "Mar",
		3: "Apr",
		4: "May",
		5: "Jun",
		6: "Jul",
		7: "Aug",
		8: "Sep",
		9: "Oct",
		10: "Nov",
		11: "Dec",
	};

	const year = d.getFullYear();
	const month = months[d.getMonth()];
	const day = d.getDate();

	let date = `${day} ${month} ${year}`;
	let time = new Date(now?.time).toLocaleTimeString().slice(0, 5);
	let temp = now?.temperature;
	let humidity = now?.humidity;
	let pressure = now?.pressure;
	let luminance = now?.luminance;
	let orientation = now?.orientation;
	let acceleration = now?.acceleration;

	console.log(data.data);
</script>

<section class="intro">
	<Intro />
	<div id="model">
		<Canvas>
			<Geometry />
		</Canvas>
	</div>
</section>

<section class="indicators">
	<div class="title">
		<h2>{date}</h2>
		<span class="line" />
		<!-- <span class="time">{time}</span> -->
	</div>
	<div class="content">
		<!-- <Indicator type={"time"} value={time} /> -->
		<Indicator type={"temperature"} value={temp} />
		<Indicator type={"humidity"} value={humidity} />
		<Indicator type={"pressure"} value={pressure} />
		<Indicator type={"luminance"} value={luminance} />
		<Indicator type={"orientation"} value={orientation} />
		<Indicator type={"acceleration"} value={acceleration} />
	</div>
</section>

<style>
	section.intro {
		margin-bottom: 0;
		& div#model {
			height: 480px;
			/* border: thin solid var(--surface0); */
			/* background-color: var(--mantle); */
			border-radius: 10px;
			margin-top: 1rem;
		}
	}

	div.title {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}

	div.title h2 {
		font-size: 2rem;
		/* font-weight: bold; */
		color: var(--green);
		margin-right: 1rem;
	}

	div.title span.line {
		flex-grow: 1;
		border-bottom: 2px solid var(--lavender);
		border-radius: thin;
	}

	/* div.title span.time {
		font-size: 2rem;
		border-radius: 10px;
		margin-left: 1rem;
	} */

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
			grid-template-columns: repeat(1, auto);
		}
	}
</style>
