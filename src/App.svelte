<script>
  import Table from "./lib/Table.svelte";

  import { supabase } from "./supabase";

  async function promise() {
    const { data: telemetry, error } = await supabase
      .from("telemetry")
      .select("*")
      .limit(20);

    return telemetry;
  }

</script>

<Table prop={promise()}/>
