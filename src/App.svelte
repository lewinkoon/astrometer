<script>
  import Header from "./basic/Header.svelte";
  import Footer from "./basic/Footer.svelte";

  import Intro from "./lib/Intro.svelte";
  import Indicator from "./lib/Indicator.svelte";
  import Timeline from "./lib/Timeline.svelte";
  import Datatable from "./lib/Datatable.svelte";

  import Chart from "./svg/Chart.svelte";
  import Abacus from "./svg/Abacus.svelte";

  import { supabase } from "./supabase";

  let data = [];

  // fetch data from database
  async function getData(dir) {
    const { data: telemetry, error } = await supabase
      .from("telemetry")
      .select("date,temp,humid,press,light")
      .limit(10)
      .order("date", { ascending: false });

    data = telemetry;

    return true;
  }

  const options = [
    { id: 0, label: "Temperature" },
    { id: 1, label: "Humidity" },
    { id: 2, label: "Pressure" },
    { id: 3, label: "Light" },
  ];

  let selected = 0;
</script>

<Header />

<main>
  <Intro />

  {#await getData() then}
    <section class="indicators">
      <Indicator type={0} bind:selected value={Math.trunc(data[0].temp)} />
      <Indicator type={1} bind:selected value={Math.trunc(data[0].humid)} />
      <Indicator type={2} bind:selected value={Math.trunc(data[0].press)-1000} />
      <Indicator type={3} bind:selected value={Math.trunc(data[0].light)} />
    </section>

    <section class="chart">
      <div class="title">
        <h2><Chart />{options[selected].label}</h2>
        <span class="line" />
      </div>
      <div class="wrapper">
        {#key selected}
          <Timeline type={selected} {data} />
        {/key}
      </div>
    </section>

    <section class="table">
      <div class="title">
        <h2><Abacus />Data</h2>
        <span class="line" />
      </div>
      <div class="component">
        <Datatable {data} />
      </div>
    </section>
  {/await}
</main>

<Footer />

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section {
    margin-bottom: 4rem;
    max-width: 1080px;
    width: 100%;
  }

  div.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  div.title h2 {
    display: flex;
    align-items: center;
  }

  div.title h2 :global(#chart) {
    width: 3rem;
    height: auto;
    margin-right: 0.5rem;
  }

  div.title h2 :global(#abacus) {
    width: 3rem;
    height: auto;
    margin-right: 0.5rem;
  }

  span.line {
    flex-grow: 1;
    border-bottom: 4px solid var(--blue);
    border-radius: 2px;
    margin: auto 0rem auto 1rem;
  }

  section.indicators {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  @media screen and (max-width: 1200px) {
    section.indicators {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  section.chart div.wrapper {
    height: 200px;
    margin: 0 auto;
    background-color: var(--surface0);
    border-radius: 20px;
    padding: 2rem;
  }
</style>
