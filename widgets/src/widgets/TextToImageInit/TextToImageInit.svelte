<script lang="ts">
    import { Button } from "carbon-components-svelte";
    import { 
        TextToImageInitClick,
    } from '../../stores';
</script>

<style>
    .tti-init :global(.init-button) {
        width: 100%;
        margin-top: 0;
    }
</style>

<div class="io-widget tti-init">
    <Button class="io_primary-btn init-button" on:click="{() => {
        TextToImageInitClick.set(true);
    }}">Start the generation process</Button>
</div>