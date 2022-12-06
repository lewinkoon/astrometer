<script>
    import Satellite from "../svg/Satellite.svelte";
</script>

<section class="intro">
    <h2>
        <Satellite />
        Welcome to&nbsp;<a href="/">Astrometer</a>
    </h2>
    <p>
        Here you'll find realtime data from my weather station which measures
        temperature, relative humidity, pressure and illuminance every minute.
    </p>
</section>

<style>
    section.intro {
        max-width: 1080px;
        width: 100%;
        margin: 4rem 0 2rem;
    }

    section.intro h2 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        margin: 0 0 1rem;
    }

    section.intro h2 a {
        color: var(--blue);
        transition: all 0.3s;
    }

    section.intro h2 a:hover {
        color: var(--flamingo);
    }

    section.intro h2 :global(#satellite) {
        width: 4.5rem;
        height: auto;
        margin-right: 0.5rem;
    }

    section.intro p {
        max-width: 75%;
        text-align: center;
        font-size: 1.5rem;
        margin: 0 auto 2rem;
    }
</style>
