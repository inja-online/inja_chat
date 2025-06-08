<script lang="ts">
    let {
        viewType = "primary", // 'primary', 'outline', 'ghost'
        active = false,
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
    klasses.push(`button-${viewType}`); // e.g., button-primary
    if (active) {
        klasses.push("active");
    }
    if (additionalClasses) {
        klasses.push(additionalClasses);
    }
    const effectiveClass = klasses.join(" ");
</script>

<svelte:element
    this={Tag}
    role="button"
    type={buttonHtmlType}
    {href}
    class={effectiveClass}
    {disabled}
    {onclick}
    {...restProps}
>
    {#if typeof icon === "string"}
        <span class="icon">{icon}</span>
    {:else if icon}
        <svelte:component this={icon} class="icon" />
    {/if}
    <slot>Explore</slot>
</svelte:element>

<style>
    .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        text-decoration: none; /* For <a> tags */
        font-size: 0.875rem; /* Equivalent to text-sm */
        transition:
            background-color 0.2s,
            border-color 0.2s,
            color 0.2s,
            opacity 0.2s;
        cursor: pointer;
        padding: 0.5rem 1.25rem; /* Equivalent to py-2 px-5 */
        border-radius: var(--button-normal-radius); /* Use radius variable */
        font-weight: 600; /* Equivalent to font-semibold */
        outline: none;
        gap: 0.5rem; /* For spacing between icon and text */
        border: 1px solid transparent; /* Base border for consistent sizing */
    }

    .button:focus-visible {
        outline: 2px solid hsl(var(--ring)); /* Use ring variable */
        outline-offset: 2px;
    }

    .button:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    .button .icon {
        display: inline-flex;
        align-items: center;
    }

    /* Primary Button */
    .button-primary {
        background-color: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
    }
    .button-primary:hover:not(:disabled) {
        background-color: hsl(var(--primary) / 0.9); /* Example: slightly darker */
    }
    .button-primary.active {
        background-color: hsl(var(--primary) / 0.8); /* Example: darker still */
    }
    .button-primary:disabled {
        /* Specific disabled styles for primary if needed, otherwise base .button:disabled applies */
    }

    /* Outline Button */
    .button-outline {
        background-color: transparent;
        border-color: hsl(var(--primary));
        color: hsl(var(--primary));
    }
    .button-outline:hover:not(:disabled) {
        background-color: hsla(var(--primary), 0.1); /* Light primary background on hover */
    }
    .button-outline.active {
        background-color: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
    }

    /* Ghost Button */
    .button-ghost {
        background-color: transparent;
        border-color: transparent;
        color: hsl(var(--primary));
    }
    .button-ghost:hover:not(:disabled) {
        background-color: hsla(var(--primary), 0.05); /* Very light primary background on hover */
    }
    .button-ghost.active {
        background-color: hsla(var(--primary), 0.1); /* Slightly darker for active ghost */
        color: hsl(var(--primary)); /* Darker text for active ghost - adjust if needed */
    }
</style>