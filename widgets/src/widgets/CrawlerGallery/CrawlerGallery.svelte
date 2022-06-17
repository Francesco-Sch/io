<script lang="ts">
    import axios from 'axios'
    import { onMount } from 'svelte';
    import { ImageLoader } from "carbon-components-svelte";
    import { CrawlerGalleryFolder } from '../../stores'

    const folder:string = $CrawlerGalleryFolder
    let images:Array<any> = []
    export let gridValue:Number = 6

    onMount(async () => {
        const imagePathsRequest = await axios.get(`${window.location.origin}/api/contents/${folder}`)
        const imagePaths = await imagePathsRequest.data.content

        imagePaths.forEach(async (e:any) => {
            const imageRequest = await axios.get(`${window.location.origin}/api/contents/${e.path}`)
            let image = await imageRequest.data.content

            images.push(image)
            images = images
        })
    })
</script>

<style>
    .crawler-gallery .images-grid {
        max-height: 48rem;
        overflow-y: auto;
    }
    .crawler-gallery .images-grid {
        display: flex;
        flex-wrap: wrap;
    }
    .crawler-gallery .images-grid :global(.single-image) {
        height: 12rem;
        margin-right: var(--spacing-03);

        object-fit: contain;
    }
</style>

<div class="io-widget crawler-gallery">
    <div class="header">
        <h3 class="io_widget-headline">Collected images</h3>
    </div>
    <div class="images-grid">
        {#each images as image}
            <ImageLoader 
                src={`data:image/jpg;base64,${image}`} 
                alt="part of dataset" 
                class="single-image" 
                style="width: calc(calc(100% / {gridValue}) - 1%)"
            /> 
        {:else}
            <p>Image couldn't be rendered.</p>
        {/each}
    </div>
</div>