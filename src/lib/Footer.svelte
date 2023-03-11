<footer>
	<span>© 2023 Lewin.</span>&nbsp;Made with&nbsp;<a id="svelte" href="https://svelte.dev/"
		>Svelte&nbsp;</a
	>and&nbsp;<a id="netlify" href="https://www.netlify.com/">Netlify</a>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		padding: 2rem;
	}

	footer span {
		font-weight: bold;
	}

	a {
		font-weight: bold;
	}

	#netlify {
		color: var(--blue);
	}

	#svelte {
		color: var(--red);
	}

	a:hover {
		text-decoration: underline;
		text-underline-offset: 4px;
		text-decoration-thickness: 2px;
	}
</style>
