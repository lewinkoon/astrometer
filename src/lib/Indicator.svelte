<script>
  export let title, value, unit, icon;
</script>

<span>
  <div class="indicator">
    <span class="icon">{icon}</span>
    <div class="measure">
      <h2 class="variable">{title}</h2>
      <p class="value">{value} {unit}</p>
    </div>
  </div>
</span>

<style>
  div.indicator {
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    background-color: var(--medium);
    padding: 2rem;
  }

  span.icon {
    font-size: 4rem;
    margin-right: 2rem;
  }

  div.measure {
    text-align: right;
  }

  h2.variable {
    font-size: 2rem;
    margin: 0;
  }

  p.value {
    margin: 0;
    font-size: 2.5rem;
  }

</style>