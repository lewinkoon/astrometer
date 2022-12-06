<script>
  import Satellite from "../svg/Satellite.svelte";
  import Moon from "../svg/Moon.svelte";
</script>

<header>
  <a href="/" class="title"><Satellite />Astrometer</a>
  <span class="line" />
  <button class="reload"><Moon /></button>
</header>

<style>
  header {
    display: flex;
    align-items: center;
    padding: 1rem;
    max-width: 1080px;
    width: 100%;
  }

  a.title {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    background-color: var(--surface0);
    border-radius: 10px;
    padding: 0.25rem 1rem 0.25rem 0.75rem;
  }

  a:hover {
    background-color: var(--surface1);
  }

  span.line {
    flex-grow: 1;
    border-bottom: 2px solid var(--surface0);
    border-radius: 1px;
    margin: auto 1rem auto 1rem;
  }

  button {
    font-size: 1.2rem;
  }

  :global(svg) {
    width: 2rem;
    height: auto;
  }

  :global(#satellite) {
    margin-right: 0.5rem;
  }
  
</style>
