<script lang="ts">
	import Docs from "$lib/icons/Files.svelte";
</script>

<section class="info">
	<h1 class="title">
		<Docs />
		Documentation
	</h1>
	<p>Some <strong>info</strong> about how this complex system works</p>
</section>

<section class="docs">
	<h2 id="setup">
		<a href="#setup">Setup</a>
		<span class="line"></span>
	</h2>
	<p>Clone the repository.</p>

	<code>
		<span>git clone https://github.com/lewinkoon/astrometer</span>
	</code>

	<p>Set environment variables</p>

	<code>
		<span>cd astrometer</span>
		<span>touch .env</span>
		<span
			>echo "PUBLIC_SUPABASE_ANON_KEY=[ANONYMOUS KEY]" >> .env <span>
				<span>touch .env</span>
			</span></span
		>
		<span>echo "PUBLIC_SUPABASE_URL=[DATABASE URL]" >> .env</span>
	</code>

	<p>Run local server for development.</p>

	<code>
		<span>pnpm run dev</span>
	</code>

	<p>Or build the app.</p>

	<code>
		<span>pnpm run build</span>
	</code>

	<h2 id="contributing">
		<a href="#contributing">Contributing</a>
		<span class="line"></span>
	</h2>

	<p>
		Pull requests are welcome. For major changes, please open an issue first
		to discuss what you would like to change.
	</p>

	<h2 id="license">
		<a href="#license">License</a>
		<span class="line"></span>
	</h2>

	<a href="https://choosealicense.com/licenses/mit/">MIT</a>
</section>

<style lang="scss">
	section.info {
		align-items: center;

		h1 {
			font-size: 3.2rem;
			display: flex;
			align-items: center;

			:global(#files) {
				width: 4rem;
			}
		}

		p {
			font-size: 1.6rem;
		}
	}

	section.docs {
		max-width: 800px;

		h2 {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 1rem 0 1rem;

			a {
				font-size: 2rem;
				margin-right: 1rem;
				color: var(--subtext);
			}

			span {
				flex-grow: 1;
				border-bottom: 2px solid var(--blue);
			}
		}

		p {
			font-size: 1.2rem;
			margin: 0 0 1.6rem;
		}

		a {
			color: var(--orange);

			&:hover {
				text-decoration: underline;
			}
		}

		code {
			font-family: monospace;
			border-left: 3px solid var(--blue);
			padding: 0 1rem;
			margin: 0 0 1.6rem;

			span {
				display: flex;
			}
		}
	}
</style>
