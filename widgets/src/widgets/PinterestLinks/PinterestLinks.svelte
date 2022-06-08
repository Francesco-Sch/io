<script lang="ts">
    import { TextInput, NumberInput, Button } from "carbon-components-svelte";
    import { 
        PinterestLinks,
        PinterestOutputFolder,
        PinterestImagesAmount
    } from '../../stores';

    let localPinterestLinks:string[] = $PinterestLinks
    let currentLinkInput:string = ''

    let outputFolder:string = $PinterestOutputFolder
    let imagesAmount:number = $PinterestImagesAmount
</script>

<style></style>

<div>
    <h3>Add links</h3>

    <div>
        {#each localPinterestLinks || [] as link}
            <div>
                <p>{link}</p>
            </div>
        {:else}
            <p>No links added yet.</p>
        {/each}
    </div>

    <TextInput light hideLabel placeholder='Enter a pinterest link' bind:value={currentLinkInput} />
    <Button on:click="{() => {
        localPinterestLinks.push(currentLinkInput)
        localPinterestLinks = localPinterestLinks

        PinterestLinks.set(localPinterestLinks)
    }}">
        Add link
    </Button>

    <h3>Set settings</h3>

    <p>Name of the folder for the collected images</p>
    <TextInput light hideLabel placeholder='Name of folder' bind:value={outputFolder} onfocusout={() => {
        PinterestOutputFolder.set(outputFolder)
    }}/>

    <p>Amount of images you want to scrape</p>
    <NumberInput light hideLabel placeholder='3000' bind:value={imagesAmount} onfocusout={() => {
        PinterestImagesAmount.set(imagesAmount)
    }}/>
</div>