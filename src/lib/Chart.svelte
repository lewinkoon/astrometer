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
      }
    });
  });
</script>

<div>
  <canvas id="chart" bind:this={ctx} />
</div>

<style>
  div {
    padding: 1rem;
    background-color: var(--medium);
    border-radius: 10px;
  }

  canvas {
    max-height: 240px;
  }
</style>
