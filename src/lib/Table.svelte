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
    <thead>
      <tr>
        {#each data[0] as head}
          <th>{head}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each data[1].slice(0, 10) as row, index}
        <tr>
          {#each data[0] as col, index}
            <td>{row[col]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
{/await}

<style>
  table {
    margin: 0 auto;
    border-spacing: 0;
    border: 2px solid var(--darker);
    border-radius: 5px;
    overflow: hidden;
  }

  td,
  th {
    text-align: left;
    min-width: 120px;
    padding: 0.5rem;
    border-right: 1px solid var(--dark);
    border-bottom: 1px solid var(--dark);
  }

  th {
    border-top: none;
    background-color: var(--medium);
    text-transform: uppercase;
  }

  td:last-child,
  th:last-child {
    border-right: none;
  }

  tr:hover {
    background-color: var(--medium);
  }

  tr:last-child td {
    border-bottom: none;
  }
</style>
