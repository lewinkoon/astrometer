<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<title>Astrometer</title>
</svelte:head>

<Header />
<main>
	<slot />
</main>

<Footer />

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
