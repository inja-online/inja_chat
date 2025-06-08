<script lang="ts">
	let {
		id = undefined as string | undefined, // For aria-describedby
		text = '',
		visible = false,
		position = 'top' // 'top', 'bottom', 'left', 'right'
	} = $props();
</script>

{#if text}
	<div
		{id}
		class="tooltip tooltip-{position} {visible ? 'tooltip-visible' : ''}"
		role="tooltip"
		aria-live="polite"
	>
		{text}
	</div>
{/if}

<style>
	.tooltip {
		position: absolute;
		z-index: 50;
		padding: 0.375rem 0.75rem; /* px-3 py-1.5 */
		font-size: 0.75rem; /* text-xs */
		color: hsl(var(--muted-foreground));
		background-color: hsl(var(--card));
		border: 1px solid var(--chat-border-40);
		border-radius: var(--radius); /* rounded-md */
		box-shadow: var(--shadow-md);
		white-space: nowrap;
		pointer-events: none; /* Allow clicks to pass through */
		
		opacity: 0;
		transition:
			opacity 0.15s ease-out,
			transform 0.15s ease-out;
	}

	/* Top Position */
	.tooltip-top {
		bottom: 100%;
		left: 50%;
		margin-bottom: 0.5rem; 
		transform-origin: bottom center;
		/* Initial state: slightly offset and scaled down */
		transform: translateX(-50%) scale(0.95) translateY(0.25rem); 
	}
	.tooltip-top.tooltip-visible {
		opacity: 1;
		/* Final state: normal scale and position */
		transform: translateX(-50%) scale(1) translateY(0);
	}

	/* Bottom Position */
	.tooltip-bottom {
		top: 100%;
		left: 50%;
		margin-top: 0.5rem;
		transform-origin: top center;
		transform: translateX(-50%) scale(0.95) translateY(-0.25rem);
	}
	.tooltip-bottom.tooltip-visible {
		opacity: 1;
		transform: translateX(-50%) scale(1) translateY(0);
	}

	/* Left Position */
	.tooltip-left {
		top: 50%;
		right: 100%;
		margin-right: 0.5rem;
		transform-origin: center right;
		transform: translateY(-50%) scale(0.95) translateX(0.25rem);
	}
	.tooltip-left.tooltip-visible {
		opacity: 1;
		transform: translateY(-50%) scale(1) translateX(0);
	}

	/* Right Position */
	.tooltip-right {
		top: 50%;
		left: 100%;
		margin-left: 0.5rem;
		transform-origin: center left;
		transform: translateY(-50%) scale(0.95) translateX(-0.25rem);
	}
	.tooltip-right.tooltip-visible {
		opacity: 1;
		transform: translateY(-50%) scale(1) translateX(0);
	}
</style>
