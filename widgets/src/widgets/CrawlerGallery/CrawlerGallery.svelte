<script lang="ts">
    import axios from 'axios'
    import { onMount } from 'svelte';
    import { ImageLoader } from "carbon-components-svelte";
    import { CrawlerGalleryFolder } from '../../stores'

    const folder:string = $CrawlerGalleryFolder
    let images:Array<any> = []

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

<style></style>

<div>
    {#each images as image}
       <ImageLoader src={`data:image/jpg;base64,${image}`} alt="part of dataset"/> 
    {:else}
        <p>Images couldn't be rendered.</p>
    {/each}
</div>