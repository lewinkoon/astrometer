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

<button
  class="indicator"
  class:active={selected === type}
  on:click={() => {
    selected = type;
  }}
>
  <svelte:component this={options[type].component} />
  <div class="content">
    <div class="title">{options[type].title}</div>
    <div class="value">
      {value}&nbsp;<span class="unit">{options[type].unit}</span>
    </div>
  </div>
</button>

<style>
  button.indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;

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

  button.indicator.active {
    border: 2px solid var(--blue);
  }

  div.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 0.5rem;
  }

  div.title {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--subtext0);
  }

  span.unit {
    color: var(--blue);
  }

  :global(#thermo, #droplet, #dash, #light) {
    width: 4.5rem;
    height: auto;
    margin-right: 0.5rem;
  }
</style>
