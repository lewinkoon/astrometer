<script>
  export let data;

  console.log(data);

  let sortBy = "temp";
  let ascending = false;

  function sort(col) {
    
    ascending = !ascending;

    let sortMod = ascending ? 1 : -1;

    let xxx = (a, b) =>
      a[col] < b[col]
        ? -1 * sortMod
        : a[col] > b[col]
        ? 1 * sortMod
        : 0;

    data = data.sort(xxx);
  };

</script>

<button on:click={sort}>Reload</button>

<table>
  <thead>
    <tr>
      {#each Object.keys(data[0]) as head}
        <th>{head}</th>
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
    border: 2px solid var(--medium);
    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
    background-color: var(--lighter);
  }

  tr:last-child td {
    border-bottom: none;
  }

  th {
    text-align: left;
    text-transform: capitalize;
    font-weight: normal;
    /* font-style: italic; */
    font-size: 0.9rem;
    color: var(--medium);
  }

  td,
  th {
    padding: 0.5rem 1rem;
    border-bottom: thin solid var(--light);
  }

  td:last-child,
  th:last-child {
    border-right: none;
  }
</style>
