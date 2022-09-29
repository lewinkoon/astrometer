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
    width: 100%;
    margin: 0rem auto;
    border-spacing: 0;
    border-radius: 10px;
    background-color: #fff;
    color: var(--medium);
    overflow: hidden;
  }

  tr:last-child td {
    border-bottom: none;
  }

  td,
  th {
    padding: 0.75rem 1.5rem;
    border-bottom: thin solid var(--light);
  }

  td:last-child,
  th:last-child {
    border-right: none;
  }

  th {
    text-align: left;
    text-transform: uppercase;
    font-weight: normal;
    font-weight: bold;
    color: var(--dark);
    background-color: var(--lighter);
  }

  th:hover {
    color: var(--accent);
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    /* background-color: var(--accent); */
  }
</style>
