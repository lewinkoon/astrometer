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
    <section class="title">📈 Dashboard</section>
    <section class="indicators">
      <Indicator title={"Temperature"} value={21} unit={"ºC"} icon={"🌡️"} />
      <Indicator title={"Humidity"} value={54} unit={"%"} icon={"💧"} />
      <Indicator title={"Pressure"} value={1001} unit={"hPa"} icon={"💨"} />
      <Indicator title={"Light"} value={82} unit={"%"} icon={"☀️"} />
    </section>
    <section class="chart">
      {#await getData() then}
        <Chart {data} />
        <!-- <Table {data} /> -->
      {/await}
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
    margin: 4rem auto 2rem;
  }

  main section.title {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 2rem;
  }

  main section.indicators {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 2rem;
  }

  main section.chart {
    background-color: var(--lighter);
    border: thin solid var(--light);
    border-radius: 10px;
    padding: 2rem;
    margin-bottom: 2rem;
  }
</style>
