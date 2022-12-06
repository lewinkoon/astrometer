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

  // console.log(data);
  Chart.defaults.font.family = 'regular';
  Chart.defaults.borderColor = '#5b6078';
  Chart.defaults.color = '#cad3f5';

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
            borderColor: "#8aadf4",
            pointRadius: 5,
            pointBackgroundColor: "#24273a",
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
    max-height: 200px;
  }
</style>
