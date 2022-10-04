<script>
  import Indicator from "./lib/Indicator.svelte";
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
  <div class="indicators">
    <Indicator title={"Temperature"} value={21} unit={"ºC"} icon={"🌡️"} />
    <Indicator title={"Humidity"} value={54} unit={"%"} icon={"💧"} />
    <Indicator title={"Pressure"} value={1001} unit={"hPa"} icon={"💨"} />
    <Indicator title={"Light"} value={84} unit={"%"} icon={"☀️"} />
  </div>
  <div class="data">
    {#await getData() then}
      <Table {data} />
      <Chart {data} />
    {/await}
  </div>
</main>

<style>
  div.indicators {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  div.data {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
</style>
