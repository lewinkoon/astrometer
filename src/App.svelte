<script>
  import Info from "./lib/Info.svelte";
  import Chart from "./lib/Chart.svelte";
  import Table from "./lib/Table.svelte";

  import { supabase } from "./supabase";

  let data = [];

  // fetch data from database
  async function getData(dir) {
    const { data: telemetry, error } = await supabase
      .from("telemetry")
      .select("*")
      .limit(10)
      .order("id", { ascending: false });

    data = telemetry;

    return true;
  }
</script>

<main>
  {#await getData() then}
    <Chart {data} />
    <Table {data} />
  {/await}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
