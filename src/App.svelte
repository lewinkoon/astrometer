<script>
  import Header from "./basic/Header.svelte";
  import Footer from "./basic/Footer.svelte";

  import Intro from "./lib/Intro.svelte";
  import Indicator from "./lib/Indicator.svelte";
  import Timeline from "./lib/Timeline.svelte";
  import Datatable from "./lib/Datatable.svelte";

  import Chart from "./svg/Chart.svelte";
  import Code from "./svg/Code.svelte";

  import { supabase } from "./supabase";

  let data = [];

  // fetch data from database
  async function getData(dir) {
    const { data: telemetry, error } = await supabase
      .from("telemetry")
      .select("date,temp,humid,press")
      .limit(8)
      .order("date", { ascending: false });

    data = telemetry;

    return true;
  }

  const options = [
    { id: 0, label: "Temperature" },
    { id: 1, label: "Humidity" },
    { id: 2, label: "Pressure" }
  ];

  let selected = 0;
</script>

<Header />

<main>
  <Intro />

  {#await getData() then}
    <section class="indicators">
      <Indicator type={0} value={Math.trunc(data[0].temp)} />
      <Indicator type={1} value={Math.trunc(data[0].humid)} />
      <Indicator type={2} value={Math.trunc(data[0].press)} />
    </section>

    
      <section class="chart">
        <div class="title">
          <h2><Chart />Graphs</h2>
          <span class="line" />
        </div>
        {#each options as item, index (item.id)}
        <div class="wrapper">
          {#key selected}
            <Timeline type={item.id} {data} />
          {/key}
        </div>
        {/each}
      </section>
    

    <section class="table">
      <div class="title">
        <h2><Code />Data</h2>
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
    margin-bottom: 2rem;
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

  div.title h2 :global(#code) {
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
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-bottom: 4rem;
  }

  section.chart div.wrapper {
    min-height: 200px;
    margin: 0 auto 2rem;
    background-color: var(--surface0);
    border-radius: 20px;
    padding: 2rem;
  }
</style>
