<script>
  import Table from "./lib/Table.svelte";

  import { supabase } from "./supabase";

   export async function promise() {
    const { data: telemetry, error } = await supabase
      .from("telemetry")
      .select("*")
      .order('date', { ascending: false })
      .order('time', { ascending: false })
      .limit(20);

    return telemetry;
  }

</script>

<Table prop={promise()}/>
