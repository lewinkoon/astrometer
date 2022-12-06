<script>
  import Header from "./basic/Header.svelte";
  import Footer from "./basic/Footer.svelte";

  import Indicator from "./lib/Indicator.svelte";
  import Timeline from "./lib/Timeline.svelte";
  import Datatable from "./lib/Datatable.svelte";

  import Satellite from "./svg/Satellite.svelte";
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
      .order("date", { ascending: true });

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
  <section class="title">
    <h2>
      <Satellite />
      Astrometer
    </h2>
    <p>
      Welcome to the astrometer dashboard. Here you'll find realtime data from
      my weather station.
    </p>
  </section>
  {#await getData() then}
    <section class="indicators">
      <div class="component">
        <Indicator type={0} value={Math.trunc(data[data.length - 1].temp)} />
        <Indicator type={1} value={Math.trunc(data[data.length - 1].humid)} />
        <Indicator type={2} value={Math.trunc(data[data.length - 1].press)} />
        <Indicator type={3} value={Math.trunc(data[data.length - 1].light)} />
      </div>
    </section>
    <section class="chart">
      <div class="title">
        <h2><Chart />Timeline</h2>
        <span class="line" />
        <select bind:value={selected}>
          {#each options as option}
            <option value={option.id}>
              {option.label}
            </option>
          {/each}</select
        >
      </div>
      <div class="component">
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
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    margin: 0 0 1rem;
  }

  section.title h2 :global(#satellite) {
    width: 4.5rem;
    height: auto;
    margin-right: 0.5rem;
  }

  section.title p {
    max-width: 60%;
    text-align: center;
    font-size: 1.5rem;
    margin: 0 auto 2rem;
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
    margin: auto 1rem auto 1rem;
  }

  section.indicators div.component {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }

  section.chart div.component {
    background-color: var(--surface0);
    border-radius: 20px;
    padding: 2rem;
  }

  select {
    font-family: regular;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    border: none;
    background-color: var(--surface0);
    color: var(--text);
    outline: none;
  }
</style>
