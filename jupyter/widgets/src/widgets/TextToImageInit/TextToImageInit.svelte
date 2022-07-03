<script lang="ts">
    import axios from 'axios'
    import { onMount } from "svelte";
    import { Button, ImageLoader, InlineLoading } from "carbon-components-svelte";
    import CheckmarkFilled from 'carbon-icons-svelte/lib/CheckmarkFilled.svelte'
    import { 
        TextToImageInitClick,
        TextToImageInitFolder,
        TextToImageInitFinished
    } from '../../stores';

    let click = $TextToImageInitClick;
    let folder = $TextToImageInitFolder;
    let finished = $TextToImageInitFinished;
    let images:Array<any> = [];

    console.log(finished)

    async function fetchImages() {
        images = [];

        const imagePathsRequest = await axios.get(`${window.location.origin}/api/contents/output/${folder}`)
        const imagePaths = await imagePathsRequest.data.content

        imagePaths.forEach(async (e:any) => {
            const imageRequest = await axios.get(`${window.location.origin}/api/contents/${e.path}`)
            let image = {
                created: '',
                content: ''
            }
            image.content = await imageRequest.data.content
            image.created = await imageRequest.data.created

            images.push(image)

            images.forEach((e) => {
                console.log("Before sort:" + e.created);
            })

            // Sort after dates
            images.sort((a, b) => new Date(b.created) - new Date(a.created));

            images.forEach((e) => {
                console.log("After sort:" + e.created);
            })

            images = images
        })
    }

    onMount(async () => {
        if(click == true && finished == false) {
            setInterval(fetchImages, 10000);
        } else if (finished == true) {
            fetchImages();
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
        font-weight: 500;
    }
    .tti-init :global(.finished:hover) {
        background-color: var(--orange-100);
    }
    .tti-init :global(.finished p) {
        margin-left: 1rem; 

        font-weight: 500;
    }

    /* ----------------------------
    IMAGE GRID
    ---------------------------- */
    .tti-init .images-wrapper {
        margin-top: var(--spacing-06);
        padding-top: var(--spacing-06);

        border-top: 2px solid var(--gray-50);
    }
    .tti-init .images-grid {
        display: flex;
        flex-wrap: wrap;
        max-height: 48rem;
        overflow-y: auto;
    }
    .tti-init .images-grid :global(.single-image) {
        width: 24.15% !important;
        height: auto;
        margin-right: var(--spacing-03);
        margin-bottom: var(--spacing-03);

        object-fit: contain;
    }
</style>

<div class="io-widget tti-init">
    <div class="button-wrapper">
        {#if click == true && finished == false}
            <div class="io_primary-btn init-button running">
                <InlineLoading description="Process is running..." />
            </div>
        {:else if finished == true}
        <div class="io_primary-btn init-button finished">
            <CheckmarkFilled size={20} />
            <p>Scraper finished successfully</p>
        </div>
        {:else}
            <Button class="io_primary-btn init-button" on:click="{() => {
                TextToImageInitClick.set(true);
            }}">Start the generation process</Button>
        {/if}
    </div>

    {#if click == true}
        <div class="images-wrapper">
            <h3 class="io_widget-headline">Generated results</h3>

            
            <div class="images-grid">
                {#each images as image}
                    <ImageLoader 
                        src={`data:image/jpg;base64,${image.content}`}
                        alt="part of dataset" 
                        class="single-image"
                    />
                {:else}
                    <p>Generate images should appear soon...</p>
                {/each}
            </div>
        </div>
    {/if}
</div>