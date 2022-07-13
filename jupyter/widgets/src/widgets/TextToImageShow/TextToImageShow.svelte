<script lang="ts">
    import axios from 'axios'
    import { onMount } from "svelte";
    import { Button, ImageLoader } from "carbon-components-svelte";
    import { 
        TextToImageShowFolder
    } from '../../stores';

    let folder = $TextToImageShowFolder;
    let images:Array<any> = [];

    const BASE_URL = process.env.NODE_ENV === 'production'
        ? [window.location.origin, window.location.pathname.match(/[^/]+\/(\w+)/)[0]].join('/')
        : window.location.origin

    async function fetchImages() {
        images = [];

        const imagePathsRequest = await axios.get(`${BASE_URL}/api/contents/output/${folder}`)
        const imagePaths = await imagePathsRequest.data.content

        imagePaths.forEach(async (e:any) => {
            const imageRequest = await axios.get(`${BASE_URL}/api/contents/${e.path}`)
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
        await fetchImages();
    })
    
</script>

<style>
   .tti-output :global(.download-button) {
        width: 100%;
        margin-top: var(--spacing-06);
    }
</style>

<div class="io-widget tti-output">
    <h3 class="io_widget-headline">Final image</h3>
    {#if images.length >= 1}
        <ImageLoader 
            src={`data:image/jpg;base64,${images[0].content}`}
            alt="part of dataset" 
            class="single-image"
        />

        <a href={`data:image/jpg;base64,${images[0].content}`} download="output.jpg" class="io_primary-btn download-button">Download image</a>
    {/if}
</div>