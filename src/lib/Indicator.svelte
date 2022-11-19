<script>
  export let title, value, unit, icon;
</script>

<span>
  <div class="indicator">
    <div class="title"> {title}</div>
    <div>
      {icon} {value}&nbsp;
      <span class="unit">{unit}</span>
    </div>
  </div>
</span>

<style>
  div.indicator {
    padding: 1.2rem 1.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.4rem;
    border-radius: 20px;
    background-color: var(--mantle);
  }

  div.title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--subtext0);
  }

  div.value {
    
  }

  span.unit {
    color: var(--blue);
  }
</style>
