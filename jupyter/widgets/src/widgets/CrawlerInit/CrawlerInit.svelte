<script lang="ts">
    import { Button } from "carbon-components-svelte";
    import { 
        CrawlerInitClick,
    } from '../../stores';
</script>

<style>
    .crawler-init :global(.init-button) {
        width: 100%;
        margin-top: 0;
    }
</style>

<div class="io-widget crawler-init">
    <Button class="io_primary-btn init-button" on:click="{() => {
        CrawlerInitClick.set(true);
    }}">Start scraping</Button>
</div>