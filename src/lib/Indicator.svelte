<script>
  export let title, value, unit, icon;

</script>

<span>
  <div class="indicator">
    <div class="title">{icon} {title}</div>
    <div class="value">{value} <span>{unit}</span></div>
  </div>
</span>

<style>
  div.indicator {
    border-radius: 10px;
    border: thin solid var(--light);
    background-color: var(--lighter);
  }

  div.title {
    font-size: 1.5rem;
    text-align: center;
    padding: 1rem 2rem;
    border-bottom: thin solid var(--light);
  }

  div.value {
    font-size: 3rem;
    text-align: center;
    padding: 1rem 1.5rem;
  }

  div.value span {
    font-size: 2rem;
    color: var(--accent)
  }
  
</style>
