<script lang="ts">
    import { Button, InlineLoading } from "carbon-components-svelte";
    import CheckmarkFilled from 'carbon-icons-svelte/lib/CheckmarkFilled.svelte'
    import { 
        CrawlerInitClick,
        CrawlerInitRunning,
        CrawlerInitFinished
    } from '../../stores';

    let running = $CrawlerInitRunning
    let finished = $CrawlerInitFinished
</script>

<style>
    .crawler-init :global(.init-button) {
        width: 100%;
        margin-top: 0;
    }

    /* ----------------------------
    LOADING STATE
    ---------------------------- */
    .crawler-init :global(.loading) {
        width: 100%;
        margin-top: 0;
        background-color: var(--orange-20);
    }
    .crawler-init :global(.loading .bx--inline-loading) {
        width: auto;
    }
    .crawler-init :global(.loading .bx--inline-loading__text) {
        margin-left: 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        color: var(--text);
    }
    .crawler-init :global(.loading .bx--loading--small) {
        width: 1.2rem;
        height: 1.2rem;
    }
    .crawler-init :global(.loading .bx--loading__stroke) {
        stroke: var(--text);
    }
    .crawler-init :global(.loading .bx--loading__background) {
        stroke: transparent;
    }

    /* ----------------------------
    FINISHED STATE
    ---------------------------- */
    .crawler-init :global(.finished) {
        width: 100%;
        margin-top: 0;

        font-weight: 500;
    }
    .crawler-init :global(.finished:hover) {
        background-color: var(--orange-100);
    }
    .crawler-init :global(.finished p) {
        margin-left: 1rem; 

        font-weight: 500;
    }
</style>

<div class="io-widget crawler-init">
    {#if running == true}
        <div class="io_primary-btn loading">
            <InlineLoading description="Scraper is running..." />
        </div>
    {:else if finished == true && running == false}
        <div class="io_primary-btn finished">
            <CheckmarkFilled size={20} />
            <p>Scraper finished successfully</p>
        </div>
    {:else}
        <Button class="io_primary-btn init-button" on:click="{() => {
            CrawlerInitClick.set(true);
        }}">Start scraping</Button>
    {/if}
</div> 