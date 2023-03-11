<script lang="ts">
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
	<title>Astrometer</title>
</svelte:head>

<Header />
<slot />
<Footer />
