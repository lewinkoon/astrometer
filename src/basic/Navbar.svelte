<nav>
  <div class="logo">
    <a href="/">Home</a>
  </div>
  <div class="sidebar">
    <button href="">Dashboard</button>
    <button href="">Datatable</button>
    <button href="">Config</button>
  </div>
</nav>

<style>
  nav {
    display: flex;
    flex-direction: column;
    border-right: thin solid var(--light);
  }

  div.logo {
    text-transform: uppercase;
    text-align: center;
    padding: 1rem;
    border-bottom: thin solid var(--light);
  }

  div.sidebar {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  div.sidebar button {
    font-size: 1.2rem;
    text-align: left;
    padding: 0.5rem 1rem;
  }

  div.sidebar button:hover {
    background-color: var(--light);
    font-weight: bold;
  }

</style>
