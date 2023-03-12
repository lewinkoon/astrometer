<script lang="ts">
	import '../reset.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<title>Astrometer</title>
</svelte:head>

<main>
	<Header />
	<slot />
	<Footer />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		height: 100vh;
		margin: 0;
	}
</style>
