<script>
  export let prop;

</script>

<button on:click={prop}>Reload</button>

{#await prop then data}
  <table>
    <thead>
      <tr>
        {#each (Object.keys(data[0])) as head}
          <th>{head}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each data as row, index}
        <tr>
          {#each (Object.keys(data[0])) as col, index}
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
    margin: 2rem auto;
    border-spacing: 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: var(--lighter);
    /* overflow: hidden; */
  }

  tr:last-child td{
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
