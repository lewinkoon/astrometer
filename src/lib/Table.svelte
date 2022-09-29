<script>
  export let data;

  let things = JSON.parse(JSON.stringify(data));
  let input = "";
  let ascending = true;

  function sortTable(col) {
    let sortMod = ascending ? 1 : -1;

    let xxx = (a, b) =>
      a[col] < b[col] ? -1 * sortMod : a[col] > b[col] ? 1 * sortMod : 0;

    data = data.sort(xxx);
    ascending = !ascending;
  }

  function filterTable(word) {
    data = things.filter( item => item.temp.toString().includes(word) || item.date.includes(word));
  }

  $: filterTable(input)

</script>

<input type=search bind:value={input} placeholder="Search" />

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
    margin: 2rem auto;
    border-spacing: 0;
    border-radius: 15px;
    /* border: 2px solid var(--medium); */
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
    background-color: #fff;
    color: var(--medium);
    overflow: hidden;
  }

  tr:last-child td {
    border-bottom: none;
  }

  th {
    text-align: left;
    text-transform: uppercase;
    font-weight: normal;
    font-weight: bold;
    color: var(--dark);
    background-color: var(--lighter);
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

  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    /* background-color: var(--accent); */
  }
</style>
