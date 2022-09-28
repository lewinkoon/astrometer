<script>
  import Table from "./lib/Table.svelte";
  import { supabase } from "./supabase";

  let sort = false;
  let data = [];

  // fetch data from database
  async function getData(dir) {
    sort = !sort;

    const { data: telemetry, error } = await supabase
      .from("telemetry")
      .select("*")
      .order("date", { ascending: sort })
      .limit(20);

    data = telemetry;

    return true;
  }

</script>

{#await getData()}
Waiting
{:then}
  <Table data={data} />
{/await}
