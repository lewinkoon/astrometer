<header>
  <a href="/" class="title">📡 Weather Station</a>
  <span class="line" />
  <button class="reload">♻️</button>
</header>

<style>
  header {
    display: flex;
    align-items: center;
    padding: 1rem;
  }

  a {
    font-size: 1.5rem;
    
    margin: 0;
  }

  a:hover {
    font-weight: bold;
    text-decoration: none;
  }

  span.line {
    flex-grow: 1;
    border-bottom: 2px solid var(--light);
    border-radius: 1px;
    margin: auto 1rem auto 1rem;
  }

  button {
    font-size: 1.5rem;
  }
</style>
