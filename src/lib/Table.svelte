<script>
  export let prop;
</script>

{#await prop then data}
  <table>
    <thead>
      <tr>
        {#each data.header as head}
          <th>{head}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each data.things.slice(0, 10) as row, index}
        <tr>
          {#each data.header as col, index}
            <td>{row[col]}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
{/await}

<style>
  table {
    width: 100%;
    margin: 1rem auto;
    border-spacing: 0;
    border: 2px solid var(--darker);
    border-radius: 5px;
    overflow: hidden;
  }

  tr:hover {
    background-color: var(--medium);
  }

  tr:last-child td {
    border-bottom: none;
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

</style>
