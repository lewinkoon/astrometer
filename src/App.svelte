<script>
  import Indicator from "./lib/Indicator.svelte";
  import Chart from "./lib/Chart.svelte";
  import Table from "./lib/Table.svelte";

  import { supabase } from "./supabase";

  let data = [];

  // fetch data from database
  async function getData(dir) {
    const { data: telemetry, error } = await supabase
      .from("telemetry")
      .select("*")
      .limit(10)
      .order("id", { ascending: false });

    data = telemetry;

    return true;
  }
</script>

<nav>
  <div class="logo">
    <a href="/">Home</a>
  </div>
  <div class="sidebar">
    <a href="/">Dashboard</a>
    <a href="/">Datatable</a>
    <a href="/">Config</a>
  </div>
</nav>

<div class="page">
  <header>Section</header>
  <main>
    <section class="indicators">
      <Indicator title={"Temperature"} value={21} unit={"ºC"} icon={"🌡️"} />
      <Indicator title={"Humidity"} value={54} unit={"%"} icon={"💧"} />
      <Indicator title={"Pressure"} value={1001} unit={"hPa"} icon={"💨"} />
    </section>
    <!-- {#await getData() then}
      <Chart {data} />
      <Table {data} />
    {/await} -->
  </main>
  <footer>2022</footer>
</div>

<style>
  nav {
    display: flex;
    flex-direction: column;
    border-right: 2px solid var(--accent);
  }

  nav div.logo {
    padding: 1rem;
    border-bottom: 2px solid var(--accent);
  }

  nav div.sidebar {
    padding: 1rem;
  }

  div.page {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  header {
    border-bottom: 2px solid var(--accent);
    padding: 1rem;
  }

  main {
    padding: 0 1rem;
    flex-grow: 2;
  }

  main section.indicators {
    display: flex;
    gap: 20px;
  }

  footer {
    border-top: 2px solid var(--accent);
    padding: 1rem;
  }
</style>
