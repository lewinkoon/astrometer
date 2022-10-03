<script>
  export let title, value, unit, icon;
</script>

<span>
  <div class="indicator">
    <span class="icon">{icon}</span>
    <div class="measure">
      <h2 class="variable">{title}</h2>
      <p class="value">{value}{unit}</p>
    </div>
  </div>
</span>

<style>
  div.indicator {
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    background-color: var(--lighter);
    padding: 1.5rem;
  }

  span.icon {
    font-size: 3rem;
    margin: auto 1.5rem auto 0;
  }

  div.measure {
    text-align: right;
  }

  h2.variable {
    font-size: 1.25rem;
    margin: 0;
    text-transform: uppercase;
    color: var(--medium);
  }

  p.value {
    margin: 0;
    font-size: 2rem;
  }

</style>