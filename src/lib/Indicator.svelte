<script>
  export let title, value, unit, icon;
</script>

<span>
  <div class="indicator">
    <div class="title">{icon} {title}</div>
    <div class="measure">
      <span class="value">{value} {unit}</span>
    </div>
  </div>
</span>

<style>
  div.indicator {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: var(--lighter);
    overflow: hidden;
  }

  div.title {
    font-size: 2rem;
    text-transform: uppercase;
    background-color: var(--medium);
    padding: 0.5rem 1rem;
  }

  div.measure {
    display: flex;
    justify-content: center;
    padding: 0.5rem 1rem;
  }

  span.value {
    font-size: 4rem;
  }

</style>