<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>InjaChat - Advanced Client-First AI Chat Platform</title>
	<meta name="description" content="Build powerful AI conversations with advanced LLM optimization and client-first architecture" />
</svelte:head>

{@render children()}
