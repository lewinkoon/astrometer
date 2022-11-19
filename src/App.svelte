<script>
  import Header from "./basic/Header.svelte";
  import Footer from "./basic/Footer.svelte";

  import Indicator from "./lib/Indicator.svelte";
  import Chart from "./lib/Chart.svelte";
  import Table from "./lib/Table.svelte";

  import { supabase } from "./supabase";

  let data = [];

  // fetch data from database
  async function getData(dir) {
    const { data: telemetry, error } = await supabase
      .from("telemetry")
      .select("date,temp,humid,press,light")
      .limit(10)
      .order("date", { ascending: true });

    data = telemetry;

    return true;
  }
</script>

<Header />

<main>
  <section class="title">
    <h2>📈 Dashboard</h2>
    <p>Realtime data from the weather station</p>
  </section>
  {#await getData() then}
    <section class="indicators">
      <div class="component">
        <Indicator
          title={"Temperature"}
          value={Math.trunc(data[data.length - 1].temp)}
          unit={"ºC"}
          icon={"🌡️"}
        />
        <Indicator
          title={"Humidity"}
          value={Math.trunc(data[data.length - 1].humid)}
          unit={"%"}
          icon={"💧"}
        />
        <Indicator
          title={"Pressure"}
          value={Math.trunc(data[data.length - 1].press)}
          unit={"hPa"}
          icon={"💨"}
        />
        <Indicator
          title={"Light"}
          value={data[data.length - 1].light}
          unit={"%"}
          icon={"☀️"}
        />
      </div>
    </section>
    <section class="chart">
      <div class="title">
        <h2>Chart</h2>
        <span class="line" />
      </div>
      <div class="component">
        <Chart {data} />
        <!-- <Table {data} /> -->
      </div>
    </section>
    <section class="table">
      <div class="title">
        <h2>Data</h2>
        <span class="line" />
      </div>
      <div class="component">
        <Table {data} />
        <!-- <Table {data} /> -->
      </div>
    </section>
  {/await}
</main>

<Footer />

<style>
  main {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    margin: 0rem auto;
  }

  section {
    margin-bottom: 4rem;
  }

  section.title {
    margin: 4rem 0 2rem;
  }

  section.title h2 {
    text-align: center;
    font-size: 3rem;
    margin: 0 0 1rem;
  }

  section.title p {
    text-align: center;
    font-size: 1.5rem;
    margin: 0 0 2rem;
  }

  div.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  span.line {
    flex-grow: 1;
    border-bottom: 4px solid var(--blue);
    border-radius: 2px;
    margin: auto 0rem auto 1rem;
  }

  section.indicators div.component {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }

  section.chart div.component {
    background-color: var(--mantle);
    border-radius: 20px;
    padding: 2rem;
  }
</style>
