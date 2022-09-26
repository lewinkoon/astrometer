<script>
  import { supabase } from "../supabase";

  async function getData() {
    const { data: telemetry, error } = await supabase
      .from("telemetry")
      .select("*");

    const header = Object.keys(telemetry[0]);
    console.log(header, telemetry);

    return [header, telemetry];
  }

  let promise = getData();
</script>

{#await promise then data}
  <table>
    <tr>
      {#each data[0] as head}
        <th>{head}</th>
      {/each}
    </tr>
      {#each data[1] as row, index}
      <tr>
        {#each data[0] as col, index}
          <td>{row[col]}</td>
        {/each}
      </tr>
      {/each}
  </table>
{/await}
