<script>
  export let type, data;

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
    TimeSeriesScale
  } from "chart.js";

  import "chartjs-adapter-date-fns";

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
    { label: "Temperature", value: data.map((e) => e.temp), color: "#ed8796" },
    { label: "Humidity", value: data.map((e) => e.humid), color: "#c6a0f6" },
    { label: "Pressure", value: data.map((e) => e.press), color: "#a6da95" },
  ];

  Chart.defaults.font.family = "regular";
  Chart.defaults.borderColor = "#494d64";
  Chart.defaults.color = "#cad3f5";

  let ctx;

  onMount(() => {
    new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((e) => e.date),
        datasets: [
          {
            label: options[type].label,
            data: options[type].value,
            tension: 0.3,
            borderColor: options[type].color,
            pointRadius: 5,
            pointBackgroundColor: "#24273a",
          },
        ],
      },
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: options[type].label,
            },
          },
          x: {
            type: "time",
            time: {
              unit: "day",
              displayFormats: {
                day: "eee d/M"
              }
            }
          },
        },
        maintainAspectRatio: false,
      },
    });
  });
</script>

<canvas id="chart" bind:this={ctx} />
