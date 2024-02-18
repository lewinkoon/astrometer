<footer>
	<span>© 2023 Lewin.</span>
	&nbsp;Made with&nbsp;
	<a id="svelte" href="https://svelte.dev/">Svelte</a>&nbsp;and&nbsp;
	<a id="netlify" href="https://www.netlify.com/">Netlify</a>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		max-width: 1080px;
		width: 100%;
		margin: 2rem 0 2rem;

		& span {
			font-weight: bold;
		}
	}

	a {
		font-weight: bold;

		&:hover {
			text-decoration: underline;
			text-underline-offset: 4px;
			text-decoration-thickness: 2px;
		}
	}

	#svelte {
		color: var(--blue);
	}

	#netlify {
		color: var(--yellow);
	}
</style>
