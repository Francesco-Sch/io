<script lang="ts">
    import { ToastNotification } from "carbon-components-svelte";
    import { 
        ValidationStatus,
        ValidationMessage
    } from '../../stores';

    let localValidationStatus = $ValidationStatus
    let localValidationMessage = $ValidationMessage

    console.log(localValidationStatus)
</script>

<style>
    .validation :global(.bx--toast-notification) {
        width: 100%;
        box-shadow: none;
    }
    .validation :global(.bx--toast-notification__subtitle) {
        font-size: 1rem;
    }
    .validation :global(.bx--toast-notification__caption) {
        display: none;
    }
    /* ----------------------------
    SUCCESS NOTIFICATION
    ---------------------------- */
    .validation :global(.bx--toast-notification--low-contrast.bx--toast-notification--success) {
        border-left: 3px solid var(--success);
        background: var(--success-background);
    }
    .validation :global(.bx--toast-notification--low-contrast.bx--toast-notification--success .bx--toast-notification__icon) {
        fill: var(--success);
    }
    .validation :global(.bx--toast-notification--success .bx--toast-notification__subtitle) {
        color: var(--success);
    }
    /* ----------------------------
    ERROR NOTIFICATION
    ---------------------------- */
    .validation :global(.bx--toast-notification--low-contrast.bx--toast-notification--error) {
        border-left: 3px solid var(--error);
        background: var(--error-background);
    }
    .validation :global(.bx--toast-notification--low-contrast.bx--toast-notification--error .bx--toast-notification__icon) {
        fill: var(--error);
    }
    .validation :global(.bx--toast-notification--error .bx--toast-notification__subtitle) {
        color: var(--error);
    }
</style>

<div class="io-widget validation">
    {#if localValidationStatus === 'error'}
        <ToastNotification
            hideCloseButton
            lowContrast
            kind="error"
            subtitle="{localValidationMessage}"
        />
    {:else}
        <ToastNotification
            hideCloseButton
            lowContrast
            kind="success"
            subtitle="{localValidationMessage}"
        /> 
    {/if}
</div>