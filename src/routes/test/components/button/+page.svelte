<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<div class="p-4 space-y-4">
	<h1 class="text-xl font-bold">Button Tests</h1>

	<div>
		<h2 class="text-lg font-semibold">Default Button</h2>
		<Button />
	</div>

	<div>
		<h2 class="text-lg font-semibold">Selected Button</h2>
		<Button selected={true}>Selected</Button>
	</div>

	<div>
		<h2 class="text-lg font-semibold">Button with custom class</h2>
		<Button class="bg-green-500 hover:bg-green-600/90">Custom Class</Button>
	</div>

	<div>
		<h2 class="text-lg font-semibold">Disabled Button</h2>
		<Button disabled={true}>Disabled</Button>
	</div>

	<div>
		<h2 class="text-lg font-semibold">Button with custom slot content</h2>
		<Button>
			<span>Click Me!</span>
		</Button>
	</div>
</div>
