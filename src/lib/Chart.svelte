<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  export let data;

  let ctx;

  onMount(() => {
    new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((e) => e.id),
        datasets: [
          {
            label: "Dataset",
            data: data.map((e) => e.temp),
          },
        ],
        options: {
          maintainAspectRatio: true,
          plugins: {
            legend: { display: false}
          }
        }
      }
    });
  });
</script>

<div>
  <canvas id="chart" bind:this={ctx} />
</div>

<style>
  div {
    padding: 2rem;
    background-color: var(--lighter);
    border-radius: 10px;
    flex-grow: 2;
    margin-bottom: 2rem;
  }

  canvas {
    max-height: 240px;
  }

</style>
