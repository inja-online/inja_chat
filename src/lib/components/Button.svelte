<script lang="ts">
    import Tooltip from './Tooltip.svelte'; // Import the Tooltip component

    let {
        viewType = "primary", // 'primary', 'outline', 'ghost'
        active = false,
        selected = false,
        rounded = true,
        tooltip = undefined as string | undefined,
        tooltipPosition = 'top' as 'top' | 'bottom' | 'left' | 'right',
        onclick: MouseHandler = (event?: MouseEvent) => {},
        href = undefined,
        icon = undefined,
        disabled = false,
        class: additionalClasses = "",
        type: htmlType = undefined,
        size = "md",
        ...restProps
    } = $props();

    const Tag = href ? "a" : "button";

    // Determine the HTML button type (e.g., "button", "submit")
    // This is only applicable if the Tag is a button.
    const buttonHtmlType = Tag === "button" ? htmlType || "button" : undefined;

    let klasses = ["button"];
    klasses.push(`button-${viewType}`); // e.g., button-primary
    klasses.push(`button-size-${size}`); // inject size class
    if (active) {
        klasses.push("active");
    }
    if (!rounded && viewType !== 'ghost') {
        klasses.push("button-half-rounded");
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

    .button-outline {
        background-color: hsl(var(--secondary) / 0.3);
        border-color: transparent;
        color: hsl(var(--secondary-foreground) / 0.9);
        outline: 1px solid hsl(var(--secondary) / 0.7);
        backdrop-filter: blur(24px);
    }
    .button-outline:hover:not(:disabled) {
        background-color: hsl(var(--secondary));
        color: hsl(var(--secondary-foreground));
    }
    .button-outline.active {
        background-color: hsl(var(--secondary));
        color: hsl(var(--secondary-foreground));
    }
    
    .button-outline[data-selected="false"] {
        background-color: hsl(var(--secondary) / 0.3);
        color: hsl(var(--secondary-foreground) / 0.9);
        outline: 1px solid hsl(var(--secondary) / 0.7);
    }
    .button-outline[data-selected="false"]:hover:not(:disabled) {
        background-color: hsl(var(--secondary));
    }

    .button-ghost {
        background-color: transparent;
        border: 1px solid hsl(var(--secondary-foreground) / 0.1);
        color: hsl(var(--muted-foreground));
        backdrop-filter: none;
        box-shadow: none;
    }
    .button-ghost:hover:not(:disabled) {
        background-color: hsl(var(--muted) / 0.4);
        color: hsl(var(--foreground));
    }
    .button-ghost:disabled {
        background-color: transparent;
        color: hsl(var(--foreground) / 0.5);
    }
    .button-ghost:disabled:hover {
        background-color: transparent;
        color: hsl(var(--foreground) / 0.5);
    }
    .button-ghost.active {
        background-color: hsl(var(--muted) / 0.4);
        color: hsl(var(--foreground));
    }

    /* Size utilities */
    .button-size-xs {
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
        height: 1.5rem;
        gap: 0.25rem;
    }
    .button-size-sm {
        font-size: 0.8125rem;
        padding: 0.5rem 0.75rem;
        height: 1.75rem;
        gap: 0.375rem;
    }
    .button-size-md {
        /* default; you may omit if identical to base .button */
        font-size: 0.875rem;
        padding: 0.5rem 1.25rem;
        height: 2.25rem;
        gap: 0.5rem;
    }
    .button-size-lg {
        font-size: 1rem;
        padding: 0.75rem 1.5rem;
        height: 2.5rem;
        gap: 0.75rem;
    }
    .button-size-xl {
        font-size: 1.125rem;
        padding: 1rem 2rem;
        height: 3rem;
        gap: 1rem;
    }
</style>