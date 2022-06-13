<script lang="ts">
    import { Button } from "carbon-components-svelte";
    import { 
        CrawlerInitClick,
    } from '../../stores';
</script>

<style></style>

<div>
    <Button on:click="{() => {
        CrawlerInitClick.set(true);
    }}">Start scraping</Button>
</div>