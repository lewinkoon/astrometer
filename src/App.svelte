<script>
  import Navbar from "./basic/Navbar.svelte";
  import Header from "./basic/Header.svelte";
  import Footer from "./basic/Footer.svelte";

  import Indicator from "./lib/Indicator.svelte";
  import Chart from "./lib/Chart.svelte";

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

<Navbar />

<div class="page">
  <Header />

  <main>
    <section class="title">
      <h2>📈 Dashboard</h2>
      <p>Realtime data from the weather station</p>
    </section>
    <section class="indicators">
      <div class="component">
        <Indicator title={"Temperature"} value={21} unit={"ºC"} icon={"🌡️"} />
        <Indicator title={"Humidity"} value={54} unit={"%"} icon={"💧"} />
        <Indicator title={"Pressure"} value={1001} unit={"hPa"} icon={"💨"} />
        <Indicator title={"Light"} value={82} unit={"%"} icon={"☀️"} />
      </div>
    </section>
    <section class="chart">
      <div class="title">
        <h2>Chart</h2>
        <span class="line" />
      </div>
      <div class="component">
        {#await getData() then}
          <Chart {data} />
          <!-- <Table {data} /> -->
        {/await}
      </div>
    </section>
  </main>

  <Footer />
</div>

<style>
  div.page {
    display: flex;
    flex-direction: column;
  }

  main {
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    max-width: 1080px;
    width: 100%;
    margin: 4rem auto;
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
    border-bottom: 4px solid var(--accent);
    border-radius: 2px;
    margin: auto 0rem auto 1rem;
  }

  section.indicators {
    margin-bottom: 4rem;
  }

  section.indicators div.component {
    display: flex;
    justify-content: space-around;
    gap: 40px;
  }

  section.chart div.component {
    background-color: var(--lighter);
    border: thin solid var(--light);
    border-radius: 10px;
    padding: 2rem;
  }
</style>
