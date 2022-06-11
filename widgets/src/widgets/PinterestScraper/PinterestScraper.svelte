<script lang="ts">
    import { Button } from "carbon-components-svelte";
    import { 
        PinterestScraperClick,
    } from '../../stores';
</script>

<style></style>

<div>
    <Button on:click="{() => {
        PinterestScraperClick.set(true);
    }}">Start scraping</Button>
</div>