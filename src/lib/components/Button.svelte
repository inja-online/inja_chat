<script lang="ts">
    import Tooltip from './Tooltip.svelte'; // Import the Tooltip component

    let {
        viewType = "primary", // 'primary', 'secondary', 'outline', 'ghost'
        active = false,
        selected = false, // New prop for selected state
        rounded = true, // New prop for rounded styling
        tooltip = undefined as string | undefined, // Tooltip text
        tooltipPosition = 'top' as 'top' | 'bottom' | 'left' | 'right', // Tooltip position
        onclick: MouseHandler = (event?: MouseEvent) => {},
        href = undefined,
        icon = undefined,
        disabled = false,
        class: additionalClasses = "",
        type: htmlType, // For <button type="submit|button|reset">
        ...restProps
    } = $props();

    const Tag = href ? "a" : "button";

    // Determine the HTML button type (e.g., "button", "submit")
    // This is only applicable if the Tag is a button.
    const buttonHtmlType = Tag === "button" ? htmlType || "button" : undefined;

    let klasses = ["button"];
    klasses.push(`button-${viewType}`); // e.g., button-primary, button-secondary, button-outline, button-ghost
    if (active) {
        klasses.push("active");
    }
    if (!rounded && viewType !== 'ghost') { // Ghost has its own fixed radius logic usually
        klasses.push("button-half-rounded");
    } else if (viewType === 'ghost') {
        // Ghost buttons will have a specific border-radius defined in their style,
        // effectively like button-half-rounded by default.
        // No special class needed here if CSS for .button-ghost handles it.
    }
    if (additionalClasses) {
        klasses.push(additionalClasses);
    }
    const effectiveClass = klasses.join(" ");

    let showTooltipState = $state(false);
</script>

<div
    class="button-wrapper"
    onmouseenter={() => {
        if (tooltip) showTooltipState = true;
    }}
    onmouseleave={() => {
        if (tooltip) showTooltipState = false;
    }}
    onfocusin={() => {
        if (tooltip) showTooltipState = true;
    }}
    onfocusout={() => {
        if (tooltip) showTooltipState = false;
    }}
>
    <svelte:element
        this={Tag}
        role="button"
        type={buttonHtmlType}
        {href}
        class={effectiveClass}
        data-selected={selected}
        {disabled}
        {onclick}
        aria-describedby={tooltip ? `tooltip-for-${restProps.id || Math.random().toString(36).substring(2)}` : undefined}
        {...restProps}
    >
        {#if typeof icon === "string"}
            <span class="icon">{icon}</span>
        {:else if icon}
            <svelte:component this={icon} class="icon" />
        {/if}
        <slot>Explore</slot>
    </svelte:element>
    {#if tooltip}
        <Tooltip
            text={tooltip}
            visible={showTooltipState}
            position={tooltipPosition}
            id={tooltip ? `tooltip-for-${restProps.id || Math.random().toString(36).substring(2)}` : undefined}
        />
    {/if}
</div>

<style>
    .button-wrapper {
        position: relative;
        display: inline-flex; /* Ensures the wrapper fits the button size */
    }

    .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        text-decoration: none;
        font-size: 0.875rem;
        transition: 
            background-color 0.2s,
            border-color 0.2s,
            color 0.2s,
            opacity 0.2s,
            box-shadow 0.2s,
            outline 0.2s;
        cursor: pointer;
        padding: 0.5rem 1.25rem;
        border-radius: var(--button-normal-radius);
        font-weight: 600;
        outline: none;
        gap: 0.5rem;
        border: 1px solid transparent;
        backdrop-filter: blur(24px);
        height: 2.25rem;
        box-shadow: var(--shadow-sm);
    }

    .button:focus-visible {
        outline: 1px solid hsl(var(--ring));
        outline-offset: 2px;
    }

    .button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    .button .icon {
        display: inline-flex;
        align-items: center;
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
        pointer-events: none;
    }

    .button-half-rounded {
        border-radius: 0.5rem; /* equivalent to rounded-lg */
    }

    /* Primary Button Styles */
    .button-primary {
        background-color: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
        box-shadow: var(--shadow-md);
    }
    .button-primary:hover:not(:disabled) {
        background-color: hsl(334.2 74.9% 46.9%);
    }
    .button-primary:disabled:hover {
        background-color: hsl(var(--primary));
    }
    .button-primary.active {
        background-color: hsl(var(--primary) / 0.8);
    }

    /* Secondary Button Styles (formerly Outline) */
    .button-secondary {
        background-color: hsl(var(--secondary) / 0.3);
        border-color: transparent;
        color: hsl(var(--secondary-foreground) / 0.9);
        outline: 1px solid hsl(var(--secondary) / 0.7);
        backdrop-filter: blur(24px);
    }
    .button-secondary:hover:not(:disabled) {
        background-color: hsl(var(--secondary));
        color: hsl(var(--secondary-foreground));
    }
    .button-secondary.active {
        background-color: hsl(var(--secondary));
        color: hsl(var(--secondary-foreground));
    }
    
    .button-secondary[data-selected="false"] {
        background-color: hsl(var(--secondary) / 0.3);
        color: hsl(var(--secondary-foreground) / 0.9);
        outline: 1px solid hsl(var(--secondary) / 0.7);
    }
    .button-secondary[data-selected="false"]:hover:not(:disabled) {
        background-color: hsl(var(--secondary));
    }

    /* Outline Button Styles (formerly Ghost) */
    .button-outline {
        background-color: transparent;
        border: 1px solid hsl(var(--secondary-foreground) / 0.1);
        color: hsl(var(--muted-foreground));
        backdrop-filter: none;
        box-shadow: none;
    }
    .button-outline:hover:not(:disabled) {
        background-color: hsl(var(--muted-40)); /* Using CSS var */
        color: hsl(var(--foreground));
    }
    .button-outline:disabled {
        background-color: transparent; /* Ensure background is transparent */
        color: hsl(var(--foreground-50)); /* Using CSS var, opacity also applies from .button:disabled */
    }
    .button-outline:disabled:hover {
        background-color: transparent;
        color: hsl(var(--foreground-50)); /* Using CSS var */
    }
    .button-outline.active {
        background-color: hsl(var(--muted-40)); /* Using CSS var */
        color: hsl(var(--foreground));
    }

    /* New Ghost Button Styles */
    .button-ghost {
        background-color: transparent;
        color: hsl(var(--muted-foreground));
        border: 1px solid transparent; /* Keeps layout stable, effectively borderless */
        font-size: 0.75rem; /* text-xs */
        height: 2rem; /* h-8 */
        padding: 0.5rem; /* Suitable for icon-only (makes it 2rem x 2rem) or text with small padding */
        border-radius: 0.5rem; /* rounded-lg, overrides default pill shape */
        box-shadow: none;
        backdrop-filter: none;
    }
    .button-ghost:hover:not(:disabled) {
        background-color: hsl(var(--muted-40)); /* Using CSS var */
        color: hsl(var(--foreground));
    }
    .button-ghost:disabled {
        background-color: transparent; /* Ensure background is transparent */
        color: hsl(var(--foreground-50)); /* Using CSS var, opacity also applies from .button:disabled */
    }
    .button-ghost:disabled:hover {
        background-color: transparent;
        color: hsl(var(--foreground-50)); /* Using CSS var */
    }
    .button-ghost.active {
        background-color: hsl(var(--muted-40)); /* Using CSS var */
        color: hsl(var(--foreground));
    }
</style>