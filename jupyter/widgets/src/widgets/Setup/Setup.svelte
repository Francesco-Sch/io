<script lang="ts">
    import { ProgressBar, ToastNotification } from "carbon-components-svelte";
    import { 
        SetupProcessing,
    } from '../../stores';

    let processing = $SetupProcessing;
</script>

<style>
    .setup :global(.bx--progress-bar--indeterminate .bx--progress-bar__track::after) {
        background-image: linear-gradient(90deg, var(--orange-100) 12.5%, transparent 12.5%)
    }
    /* ----------------------------
    SUCCESS NOTIFICATION
    ---------------------------- */
    .setup :global(.bx--toast-notification) {
        width: 100%;
        box-shadow: none;
    }
    .setup :global(.bx--toast-notification__subtitle) {
        font-size: 1rem;
    }
    .setup :global(.bx--toast-notification__caption) {
        display: none;
    }

    .setup :global(.bx--toast-notification--low-contrast.bx--toast-notification--success) {
        border-left: 3px solid var(--success);
        background: var(--success-background);
    }
    .setup :global(.bx--toast-notification--low-contrast.bx--toast-notification--success .bx--toast-notification__icon) {
        fill: var(--success);
    }
    .setup :global(.bx--toast-notification--success .bx--toast-notification__subtitle) {
        color: var(--success);
    }
</style>

<div class="io-widget setup">
    {#if processing == true}
        <ProgressBar helperText="Setting up the notebook..." />
    {:else}
        <ToastNotification
            hideCloseButton
            lowContrast
            kind="success"
            subtitle="All requirements were installed successfully!"
        /> 
    {/if}
</div>