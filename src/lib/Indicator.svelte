<script>
  export let type, value, selected;

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

<button class="indicator" class:active="{selected === type}" on:click="{() => {selected = type}}">
  <div class="title">{options[type].title}</div>
  <div class="content">
    <svelte:component this="{options[type].component}"/>
    <span class="value">{value}</span>
    <span class="unit">{options[type].unit}</span>
  </div>
</button>

<style>
  button.indicator {
    padding: 0.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.4rem;
    border-radius: 20px;
    border: 2px solid var(--surface0);
    background-color: var(--surface0);
    color: var(--text);
  }

  button.indicator:hover {
    border: 2px solid var(--surface1);
    background-color: var(--surface1);
  }

  button.indicator.active{
    border: 2px solid var(--blue);
    /* background-color: var(--surface1); */
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
