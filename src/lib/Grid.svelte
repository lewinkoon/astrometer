<script>
  export let data;

  import Grid from "gridjs-svelte"
</script>

<Grid {data} search={true} sort={true} pagination={true}/>

<style global>
  @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
</style>
