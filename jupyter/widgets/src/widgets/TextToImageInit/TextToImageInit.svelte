<script lang="ts">
    import axios from 'axios'
    import { onMount } from "svelte";
    import { Button, ImageLoader, InlineLoading } from "carbon-components-svelte";
    import CheckmarkFilled from 'carbon-icons-svelte/lib/CheckmarkFilled.svelte'
    import { 
        TextToImageInitClick,
        TextToImageInitFolder
    } from '../../stores';

    let click = $TextToImageInitClick;
    let folder = $TextToImageInitFolder;
    let finished = false;
    let images:Array<any> = [];
    let stop:number = 0;

    async function fetchImages() {
        const imagePathsRequest = await axios.get(`${window.location.origin}/api/contents/output/${folder}`)
        const imagePaths = await imagePathsRequest.data.content

        if (images.length == imagePaths.length) {
            stop = stop++;
        } else {
            stop = 0;
            
            images = [];
            imagePaths.forEach(async (e:any) => {
                const imageRequest = await axios.get(`${window.location.origin}/api/contents/${e.path}`)
                let image = await imageRequest.data.content

                images.push(image)
                images = images
            })
        }

        if(stop == 7) {
            finished = true
            return
        }
    }

    onMount(async () => {
        if(click == true) {
            setInterval(fetchImages, 10000);
        }
    })
</script>

<style>
    .tti-init :global(.init-button) {
        width: 100%;
        margin-top: 0;
    }

    /* ----------------------------
    RUNNING STATE
    ---------------------------- */
    .tti-init :global(.running) {
        width: 100%;
        margin-top: 0;
        background-color: var(--orange-20);
    }
    .tti-init :global(.running .bx--inline-loading) {
        width: auto;
    }
    .tti-init :global(.running .bx--inline-loading__text) {
        margin-left: 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        color: var(--text);
    }
    .tti-init :global(.running .bx--loading--small) {
        width: 1.2rem;
        height: 1.2rem;
    }
    .tti-init :global(.running .bx--loading__stroke) {
        stroke: var(--text);
    }
    .tti-init :global(.running .bx--loading__background) {
        stroke: transparent;
    }

    /* ----------------------------
    FINISHED STATE
    ---------------------------- */
    .tti-init :global(.finished) {
        width: 100%;
        margin-top: 0;

        font-weight: 500;
    }
    .tti-init :global(.finished:hover) {
        background-color: var(--orange-100);
    }
    .tti-init :global(.finished p) {
        margin-left: 1rem; 

        font-weight: 500;
    }
</style>

<div class="io-widget tti-init">
    {#if click == true && finished == false}
        <div class="io_primary-btn running">
            <InlineLoading description="Process is running..." />
        </div>
    {:else if finished == true}
        <div class="io_primary-btn finished">
            <CheckmarkFilled size={20} />
            <p>Scraper finished successfully</p>
        </div>
    {:else}
        <Button class="io_primary-btn init-button" on:click="{() => {
            TextToImageInitClick.set(true);
        }}">Start the generation process</Button>
    {/if}

    {#each images as image}
        <ImageLoader 
            src={`data:image/jpg;base64,${image}`}
            alt="part of dataset" 
            class="single-image"
        />
    {:else}
        <p>Generate images should appear soon...</p>
    {/each}
</div>