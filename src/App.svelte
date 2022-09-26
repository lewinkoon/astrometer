<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  let ctx;

  onMount(async () => {
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Label",
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      },
    });
  });
</script>

<canvas id="myChart" width="400" height="100" bind:this={ctx} />
