<script>
  import Chart from "./lib/Chart.svelte";
  import Table from "./lib/Table.svelte";

  import { supabase } from "./supabase";

  async function getData() {
    const { data: telemetry, error } = await supabase
      .from("telemetry")
      .select("*");

    const header = Object.keys(telemetry[0]);

    return { header: header, things: telemetry };
  }

  let promise = getData();

</script>

<Table prop={promise}/>
<Chart prop={promise}/>
