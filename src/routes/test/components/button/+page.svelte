<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import SpecialButton from "$lib/components/SpecialButton.svelte";
    import { Globe } from "@lucide/svelte";

    let clickCount = 0;
    const handleButtonClick = (event?: MouseEvent) => {
        clickCount++;
        console.log("Button clicked!", { count: clickCount, event });
        // alert(`Button clicked! Count: ${clickCount}`);
    };
</script>

<div class="page-container">
    <h1 class="page-title">Button Tests (CSS Styled)</h1>

    <div class="test-section">
        <h2 class="section-title">Default (Primary) Button</h2>
        <Button onclick={handleButtonClick}>Primary Action</Button>
    </div>

    <div class="test-section">
        <h2 class="section-title">Secondary Button</h2>
        <Button viewType="secondary" onclick={handleButtonClick}
            >Secondary Action</Button
        >
    </div>

    <div class="test-section">
        <h2 class="section-title">Outline Button</h2>
        <Button viewType="outline" onclick={handleButtonClick}
            >Outline Action</Button
        >
    </div>

    <div class="test-section">
        <h2 class="section-title">Ghost Button</h2>
        <Button viewType="ghost" onclick={handleButtonClick}
            >Ghost Action</Button
        >
        <Button
            viewType="ghost"
            icon="👻"
            aria-label="Ghost Icon Button"
            onclick={handleButtonClick}
        ></Button>
        <Button viewType="ghost" icon="⚙️" onclick={handleButtonClick}
            >Settings</Button
        >
    </div>

    <div class="test-section">
        <h2 class="section-title">Button Sizes</h2>
        <div class="button-group">
            <Button size="xs" onclick={handleButtonClick}>XS Button</Button>
            <Button size="sm" onclick={handleButtonClick}>SM Button</Button>
            <Button size="md" onclick={handleButtonClick}
                >MD Button (Default)</Button
            >
            <Button size="lg" onclick={handleButtonClick}>LG Button</Button>
            <Button size="xl" onclick={handleButtonClick}>XL Button</Button>
        </div>
        <div class="button-group" style="margin-top: 0.5rem;">
            <Button viewType="secondary" size="xs" onclick={handleButtonClick}
                >XS Secondary</Button
            >
            <Button viewType="secondary" size="sm" onclick={handleButtonClick}
                >SM Secondary</Button
            >
            <Button viewType="secondary" size="md" onclick={handleButtonClick}
                >MD Secondary</Button
            >
            <Button viewType="secondary" size="lg" onclick={handleButtonClick}
                >LG Secondary</Button
            >
            <Button viewType="secondary" size="xl" onclick={handleButtonClick}
                >XL Secondary</Button
            >
        </div>
        <div class="button-group" style="margin-top: 0.5rem;">
            <Button viewType="outline" size="xs" onclick={handleButtonClick}
                >XS Outline</Button
            >
            <Button viewType="outline" size="sm" onclick={handleButtonClick}
                >SM Outline</Button
            >
            <Button viewType="outline" size="md" onclick={handleButtonClick}
                >MD Outline</Button
            >
            <Button viewType="outline" size="lg" onclick={handleButtonClick}
                >LG Outline</Button
            >
            <Button viewType="outline" size="xl" onclick={handleButtonClick}
                >XL Outline</Button
            >
        </div>
        <div class="button-group" style="margin-top: 0.5rem;">
            <Button viewType="ghost" size="xs" onclick={handleButtonClick}
                >XS Ghost</Button
            >
            <Button viewType="ghost" size="sm" onclick={handleButtonClick}
                >SM Ghost</Button
            >
            <Button viewType="ghost" size="md" onclick={handleButtonClick}
                >MD Ghost</Button
            >
            <Button viewType="ghost" size="lg" onclick={handleButtonClick}
                >LG Ghost</Button
            >
            <Button viewType="ghost" size="xl" onclick={handleButtonClick}
                >XL Ghost</Button
            >
        </div>
        <h3 class="section-title" style="margin-top: 1rem;">
            Icon Buttons with Sizes
        </h3>
        <div class="button-group">
            <Button icon="🚀" size="xs" onclick={handleButtonClick}></Button>
            <Button icon="🚀" size="sm" onclick={handleButtonClick}></Button>
            <Button icon="🚀" size="md" onclick={handleButtonClick}></Button>
            <Button icon="🚀" size="lg" onclick={handleButtonClick}></Button>
            <Button icon="🚀" size="xl" onclick={handleButtonClick}></Button>
        </div>
        <div class="button-group" style="margin-top: 0.5rem;">
            <Button
                icon="🌟"
                viewType="secondary"
                size="xs"
                onclick={handleButtonClick}
            ></Button>
            <Button
                icon="🌟"
                viewType="secondary"
                size="sm"
                onclick={handleButtonClick}
            ></Button>
            <Button
                icon="🌟"
                viewType="secondary"
                size="md"
                onclick={handleButtonClick}
            ></Button>
            <Button
                icon="🌟"
                viewType="secondary"
                size="lg"
                onclick={handleButtonClick}
            ></Button>
            <Button
                icon="🌟"
                viewType="secondary"
                size="xl"
                onclick={handleButtonClick}
            ></Button>
        </div>
    </div>

    <div class="test-section">
        <h2 class="section-title">Active Button (Primary)</h2>
        <Button viewType="primary" active={true} onclick={handleButtonClick}
            >Active Primary</Button
        >
    </div>

    <div class="test-section">
        <h2 class="section-title">Active Button (Secondary)</h2>
        <Button viewType="secondary" active={true} onclick={handleButtonClick}
            >Active Secondary</Button
        >
    </div>

    <div class="test-section">
        <h2 class="section-title">Button with custom class</h2>
        <Button class="my-custom-button-class" onclick={handleButtonClick}
            >Custom Styled</Button
        >
        <p class="note">
            Note: 'my-custom-button-class' needs to be defined in your global
            CSS or this page's style block.
        </p>
    </div>

    <div class="test-section">
        <h2 class="section-title">Disabled Button (Primary)</h2>
        <Button disabled={true} onclick={handleButtonClick}>Cannot Click</Button
        >
    </div>

    <div class="test-section">
        <h2 class="section-title">Disabled Button (Secondary)</h2>
        <Button viewType="secondary" disabled={true} onclick={handleButtonClick}
            >Disabled Secondary</Button
        >
    </div>

    <div class="test-section">
        <h2 class="section-title">Disabled Button (Outline - New)</h2>
        <Button viewType="outline" disabled={true} onclick={handleButtonClick}
            >Disabled Outline</Button
        >
    </div>

    <div class="test-section">
        <h2 class="section-title">Disabled Button (Ghost - New)</h2>
        <Button viewType="ghost" disabled={true} onclick={handleButtonClick}
            >Disabled Ghost</Button
        >
        <Button
            viewType="ghost"
            icon="🚫"
            disabled={true}
            aria-label="Disabled Ghost Icon"
            onclick={handleButtonClick}
        ></Button>
    </div>

    <div class="test-section">
        <h2 class="section-title">Button with Icon</h2>
        <Button icon="🌍" onclick={handleButtonClick}>Launch</Button>
    </div>

    <div class="test-section">
        <h2 class="section-title">Button with Icon and Custom Slot Content</h2>
        <Button icon="⭐" onclick={handleButtonClick}>
            <span>Rate Us Please!</span>
        </Button>
    </div>

    <div class="test-section">
        <h2 class="section-title">Icon-only Button (Primary)</h2>
        <Button
            icon="⚙️"
            viewType="primary"
            aria-label="Settings"
            onclick={handleButtonClick}
        ></Button>
    </div>
    <div class="test-section">
        <h2 class="section-title">Icon-only Button (Secondary)</h2>
        <Button
            icon="🗑️"
            viewType="secondary"
            aria-label="Delete"
            onclick={handleButtonClick}
        ></Button>
    </div>
    <div class="test-section">
        <h2 class="section-title">Icon-only Button (Outline - New)</h2>
        <Button
            icon="✏️"
            viewType="outline"
            aria-label="Edit"
            onclick={handleButtonClick}
        ></Button>
    </div>
    <div class="test-section">
        <h2 class="section-title">Icon-only Button (Ghost - New)</h2>
        <Button
            icon="📋"
            viewType="ghost"
            aria-label="Copy"
            onclick={handleButtonClick}
        ></Button>
    </div>

    <div class="test-section">
        <h2 class="section-title">Button as Link (href)</h2>
        <Button href="https://svelte.dev" target="_blank">Visit Svelte</Button>
    </div>

    <div class="test-section">
        <h2 class="section-title">Button as Link (Secondary, new tab)</h2>
        <Button
            href="https://kit.svelte.dev"
            viewType="secondary"
            target="_blank"
            rel="noopener noreferrer">SvelteKit Docs</Button
        >
    </div>

    <div class="test-section">
        <h2 class="section-title">Submit Button (Primary)</h2>
        <Button
            type="submit"
            viewType="primary"
            onclick={(e) => {
                e.preventDefault();
                alert("Form submitted (simulated)");
            }}>Submit Form</Button
        >
    </div>

    <div class="test-section">
        <h2 class="section-title">Reset Button (Outline - New)</h2>
        <Button
            type="reset"
            viewType="outline"
            onclick={() => alert("Form reset (simulated)")}>Reset Form</Button
        >
    </div>

    <div class="test-section">
        <h2 class="section-title">Reset Button (Ghost - New)</h2>
        <Button
            type="reset"
            viewType="ghost"
            onclick={() => alert("Form reset (simulated)")}>Reset Form</Button
        >
    </div>

    <section class="test-section">
        <h3 class="section-title">Rounded Variants</h3>
        <div class="button-group">
            <Button viewType="primary" rounded={true}
                >Full Round (default)</Button
            >
            <Button viewType="primary" rounded={false}>Half Round</Button>
            <Button viewType="secondary" rounded={true}
                >Full Round Secondary</Button
            >
            <Button viewType="secondary" rounded={false}
                >Half Round Secondary</Button
            >
            <Button viewType="outline" rounded={true}>Full Round Outline</Button
            >
            <Button viewType="outline" rounded={false}
                >Half Round Outline</Button
            >
            <Button viewType="ghost" rounded={true}
                >Ghost (Pill - if supported by rounded prop)</Button
            >
            <Button viewType="ghost" rounded={false}
                >Ghost (Half Round - default for ghost)</Button
            >
        </div>
    </section>

    <div class="test-section">
        <h2 class="section-title">Buttons with Tooltips</h2>
        <div class="button-group">
            <Button tooltip="This is a primary action!"
                >Primary with Tooltip</Button
            >
            <Button
                viewType="secondary"
                tooltip="Tooltip on the bottom!"
                tooltipPosition="bottom"
            >
                Secondary with Tooltip (Bottom)
            </Button>
            <Button
                viewType="outline"
                icon="💡"
                tooltip="Left tooltip on outline"
                tooltipPosition="left"
            ></Button>
            <Button
                viewType="ghost"
                icon="➡️"
                tooltip="Right tooltip on ghost button"
                tooltipPosition="right"
                rounded={false}
            ></Button>
            <Button
                viewType="primary"
                disabled
                tooltip="This button is disabled">Disabled with Tooltip</Button
            >
        </div>
    </div>

    <div class="test-section">
        <h2 class="section-title">Special Button</h2>
        <SpecialButton href="/">New Chat (as link)</SpecialButton>
        <div style="margin-top: 0.5rem;"></div>
        <SpecialButton onclick={() => alert("Special button clicked!")}>
            New Chat (as button)
        </SpecialButton>
        <div style="margin-top: 0.5rem;"></div>
        <SpecialButton disabled={true}>Disabled Special Chat</SpecialButton>
    </div>
</div>

<style>
    .page-container {
        padding: 1.5rem;
        font-family:
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            "Open Sans",
            "Helvetica Neue",
            sans-serif;
        max-width: 800px;
        margin: 0 auto;
    }
    .page-title {
        font-size: 1.75rem; /* Larger than text-xl */
        font-weight: bold;
        margin-bottom: 1.5rem;
        color: #333;
    }
    .test-section {
        margin-bottom: 1.5rem;
        padding: 1rem;
        border: 1px solid #e0e0e0;
        border-radius: 0.5rem;
        background-color: #f9f9f9;
    }
    .section-title {
        font-size: 1.25rem; /* text-lg */
        font-weight: 600; /* font-semibold */
        margin-bottom: 1rem;
        color: #555;
    }
    .note {
        font-size: 0.875rem; /* text-sm */
        color: #777; /* text-gray-500 */
        margin-top: 0.5rem;
    }

    /* Example for custom class styling, if needed for the test page */
    :global(.my-custom-button-class) {
        background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
        color: white;
        border: none;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
    :global(.my-custom-button-class:hover) {
        opacity: 0.9;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    /* Ensure buttons in a section have some space */
    .test-section > :global(button),
    .test-section > :global(a[role="button"]),
    .test-section > :global(.button-wrapper) {
        /* Ensure wrapper also gets margin */
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .button-group {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem; /* Adds space between buttons in a group */
    }
</style>
