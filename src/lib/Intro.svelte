<script>
    import Satellite from "../svg/Satellite.svelte";
    import Github from "../svg/Github.svelte";
    import Mastodon from "../svg/Mastodon.svelte";
    import Rss from "../svg/Rss.svelte";
</script>

<section class="intro">
    <h2>
        <Satellite />
        Welcome to&nbsp;<a href="https://github.com/lewinkoon/weather-station">Astrometer</a>
    </h2>
    <p>
        Here you'll find realtime data from my weather station which measures
        temperature, relative humidity, pressure and illuminance every minute.
    </p>

    <div class="social">
        <a href="https://github.com/lewinkoon" class="link"><Github />Github</a>
        <a href="https://masto.ai/home" class="link"><Mastodon />Mastodon</a>
        <a href="https://github.com/lewinkoon/weather-station/commits.atom" class="link"><Rss />Rss</a>
    </div>
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
        flex-wrap: wrap;
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

    div.social {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    div.social a {
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        margin-bottom: 2rem;
        border-radius: 10px;
        background-color: var(--surface0);
    }

    div.social a:hover{
        background-color: var(--surface1);
    }

    div.social a :global(svg) {
        width: 2rem;
        margin-right: 0.5rem;
    }
</style>
