<script lang="ts">
	let {
		href = undefined as string | undefined,
		disabled = false,
		class: additionalClasses = '',
		onclick: MouseHandler = (event?: MouseEvent) => {},
		...restProps
	} = $props();

	const Tag = href ? 'a' : 'button';
	const type = Tag === 'button' ? 'button' : undefined; // Default to 'button' type for <button>

	let klasses = ['special-button'];
	if (additionalClasses) {
		klasses.push(additionalClasses);
	}
	const effectiveClass = klasses.join(' ');
</script>

<svelte:element
	this={Tag}
	{href}
	{type}
	class={effectiveClass}
	{disabled}
	on:click={MouseHandler}
	{...restProps}
>
	<span class="inner-text">
		<slot>New Chat</slot>
	</span>
</svelte:element>

<style>
	.special-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem; /* gap-2 */
		white-space: nowrap;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
		border-radius: 0.5rem; /* rounded-lg */
		padding: 0.5rem 1rem; /* p-2 (assuming p-2 means 0.5rem, px-4 py-2 from example means 1rem horizontal, 0.5rem vertical) */
		font-weight: 600; /* font-semibold */
		color: hsl(var(--primary-foreground));
		box-shadow: var(--shadow-sm); /* shadow */
		height: 2.25rem; /* h-9 */
		width: 100%; /* w-full */
		user-select: none; /* select-none */
		font-size: 0.875rem; /* text-sm */
		text-decoration: none; /* For <a> tags */

		/* Custom background color from example */
		background-color: rgb(162, 59, 103);

		/* Assuming border-reflect and button-reflect are custom classes that might add specific border styles.
		   If they have visual effects, those would need to be defined globally or replicated here.
		   For now, they are just class names that could be targeted by global CSS. */
	}

	.special-button:focus-visible {
		outline: 1px solid hsl(var(--ring)); /* focus-visible:ring-1 focus-visible:ring-ring */
		outline-offset: 2px;
	}

	.special-button:hover:not(:disabled) {
		background-color: #d56698; /* hover:bg-[#d56698] */
	}

	.special-button:active:not(:disabled) {
		background-color: rgb(162, 59, 103); /* active:bg-[rgb(162,59,103)] */
	}

	.special-button:disabled {
		cursor: not-allowed;
		opacity: 0.5;
	}
	.special-button:disabled:hover {
		background-color: rgb(162, 59, 103); /* disabled:hover:bg-[rgb(162,59,103)] */
	}

	.inner-text {
		width: 100%;
		user-select: none;
		text-align: center;
	}

	/* Basic dark mode styling based on example (requires a .dark class on a parent) */
	:global(.dark) .special-button {
		background-color: hsl(var(--primary) / 0.2); /* dark:bg-primary/20 */
	}
	:global(.dark) .special-button:hover:not(:disabled) {
		background-color: hsl(var(--primary) / 0.35); /* Approximation for dark:hover:bg-pink-800/70 - assuming pink-800 is related to primary */
	}
	:global(.dark) .special-button:active:not(:disabled) {
		background-color: hsl(var(--primary) / 0.1); /* Approximation for dark:active:bg-pink-800/40 */
	}
	:global(.dark) .special-button:disabled:hover {
		background-color: hsl(var(--primary) / 0.2); /* disabled:dark:hover:bg-primary/20 */
	}

	/* For [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 */
	.special-button :global(svg) {
		pointer-events: none;
		width: 1rem; /* size-4 */
		height: 1rem; /* size-4 */
		flex-shrink: 0;
	}
</style>
