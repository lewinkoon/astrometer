<script>
  import Table from "./lib/Table.svelte";
  import { supabase } from "./supabase";

  let sort = false;
  let data = [];

  // fetch data from database
  async function getData(dir) {

    const { data: telemetry, error } = await supabase
      .from("telemetry")
      .select("*")
      .order("id", { ascending: false })
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
