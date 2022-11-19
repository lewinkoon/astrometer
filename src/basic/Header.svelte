<header>
  <a href="/" class="title">📡 Weather Station</a>
  <span class="line" />
  <button class="reload">🌙</button>
</header>

<style>
  header {
    display: flex;
    align-items: center;
    padding: 1rem;
  }

  a.title {
    font-size: 1.2rem;
    border: 2px solid var(--surface0);
    border-radius: 10px;
    padding: 0.5rem 1rem;
    margin: 0;
  }

  a:hover {
    font-weight: bold;
    border: 2px solid var(--blue);
    /* text-decoration: none; */
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
</style>
