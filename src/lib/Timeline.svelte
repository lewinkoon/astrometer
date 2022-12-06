<script>
  export let type = 0, data;

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

  const options = [
    { label: "Temperature", value: data.map((e) => e.temp) },
    { label: "Humidity", value: data.map((e) => e.humid) },
    { label: "Pressure", value: data.map((e) => e.press) },
    { label: "Light", value: data.map((e) => e.light) }
  ]

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
            data: options[type].value,
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
        maintainAspectRatio: false
      },
    });
  });
</script>

<canvas id="chart" bind:this={ctx} />
