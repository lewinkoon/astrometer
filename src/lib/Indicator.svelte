<script>
  export let type, value;

  import Thermo from "../svg/Thermo.svelte";
  import Drop from "../svg/Droplet.svelte";
  import Dash from "../svg/Dash.svelte";
  import Light from "../svg/Light.svelte";

  const options = [
    { title: "Temperature", unit: "ºC", component: Thermo },
    { title: "Humidity", unit: "%", component: Drop },
    { title: "Pressure", unit: "hPa", component: Dash },
    { title: "Light", unit: "%", component: Light },
];

</script>

<span>
  <div class="indicator">
    <div class="title">{options[type].title}</div>
    <div class="content">
      <svelte:component this="{options[type].component}"/>
      <span class="value">{value}</span>
      <span class="unit">{options[type].unit}</span>
    </div>
  </div>
</span>

<style>
  div.indicator {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.4rem;
    border-radius: 20px;
    background-color: var(--surface0);
  }

  div.title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--subtext0);
  }

  div.content {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
  }

  span.value {
    margin-right: 0.5rem;
  }

  span.unit {
    color: var(--blue);
  }

  :global(#thermo, #droplet, #dash, #light) {
    width: 3rem;
    height: auto;
    margin-right: 0.5rem;
  }
</style>
