<script>
  export let data;
  export let search = false;

  // declare some variables
  let things = JSON.parse(JSON.stringify(data));
  let input = "";
  let ascending = true;

  // sort specific row
  function sortTable(col) {
    let sortMod = ascending ? 1 : -1;

    let xxx = (a, b) =>
      a[col] < b[col] ? -1 * sortMod : a[col] > b[col] ? 1 * sortMod : 0;

    data = data.sort(xxx);
    ascending = !ascending;
  }

  // search through table
  function searchTable(word) {
    data = things.filter( item => item.temp.toString().includes(word) || item.date.includes(word));
  }

  $: searchTable(input)

</script>

{#if search }
<input type=search bind:value={input} placeholder="Search" />
{/if}

<table>
  <thead>
    <tr>
      {#each Object.keys(things[0]) as head}
        <th on:click={() => sortTable(head)}>{head}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each data as row, index}
      <tr>
        {#each Object.keys(data[0]) as col, index}
          <td>{row[col]}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 10px;
    overflow: hidden;
    background-color: var(--surface0);
  }

  td,
  th {
    text-align: left;
    padding: 0.75rem 0 0.75rem 1.5rem;
    border-bottom: thin solid var(--surface1);
  }

  th {
    text-transform: capitalize;
    font-weight: bold;
    /* color: var(--dark); */
    background-color: var(--surface1);
    
  }

  tr:hover {
    /* color: var(--accent); */
    font-weight: bold;
    cursor: pointer;
    background-color: var(--surface2);
  }

  td:hover {
    color: var(--blue);
  }

  tr:last-child td {
    border: none;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
  }
</style>
