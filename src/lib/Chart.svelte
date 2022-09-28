<script>
  import { onMount } from "svelte";
  import Chart from 'chart.js/auto';
  
  export let prop;

  let ctx;

  onMount(async () => {

    const data = await prop;
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: Object.keys(data.things),
        datasets: [
          {
            label: "Dataset",
            data: data.things.map( e => e.temp )
          },
        ],
      }
    });
  });
</script>

<canvas id="chart" bind:this={ctx} />

<style>
  canvas {
    margin-bottom: 1rem;
  }
</style>
