<script>
  import Table from "./lib/Table.svelte";

  import { supabase } from "./supabase";

  let data = [];

  // fetch data from database
  async function getData(dir) {
    const { data: telemetry, error } = await supabase
      .from("telemetry")
      .select("*")
      .order("id", { ascending: false })
      // .limit(15);

    data = telemetry;

    return true;
  }
</script>

<!-- {#await getData() then}
  <Grid {data} />
{/await} -->

{#await getData() then}
  <Table {data}/>
{/await}
