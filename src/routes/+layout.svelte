<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>InjaChat - Advanced Client-First AI Chat Platform</title>
	<meta name="description" content="Build powerful AI conversations with advanced LLM optimization and client-first architecture" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
	<main class="container mx-auto px-4 py-8">
		{@render children()}
	</main>
</div>

<style>
	:global(html) {
		font-family: var(--default-font-family);
	}
	
	:global(body) {
		margin: 0;
		padding: 0;
		line-height: 1.6;
	}
	
	@media (prefers-color-scheme: dark) {
		:global(body) {
			background-color: var(--color-neutral-950);
			color: var(--color-neutral-100);
		}
	}
</style>
