<script>
  import { onMount } from "svelte";
  import {
    Chart,
    ArcElement,
    LineElement,
    PointElement,
    LineController,
    CategoryScale,
    LinearScale,
    TimeScale,
    TimeSeriesScale,
  } from "chart.js";

  Chart.register(
    ArcElement,
    LineElement,
    PointElement,
    LineController,
    CategoryScale,
    LinearScale,
    TimeScale,
    TimeSeriesScale
  );

  export let data;

  let ctx;

  onMount(() => {
    new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((e) => e.date),
        datasets: [
          {
            label: "Dataset",
            data: data.map((e) => e.temp),
            tension: 0.3,
            borderColor: "#3a86ff",
            pointRadius: 5,
            pointBackgroundColor: "#f8f9fa",
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  });
</script>

<canvas id="chart" bind:this={ctx} />

<style>
  canvas {
    max-height: 240px;
  }
</style>
