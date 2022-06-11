<script lang="ts">
    import { TextInput, NumberInput, Button } from "carbon-components-svelte";
    import { 
        PinterestLinks,
        PinterestOutputFolder,
        PinterestImagesAmount
    } from '../../stores';

    let localPinterestLinks = {}
    let currentLinkInput:string = ''

    let outputFolder:string = $PinterestOutputFolder
    let imagesAmount:number = $PinterestImagesAmount

    function updatePinterestLinks () {
        console.log("PinterestLinks updated.")

        let lastKey = parseInt(Object.keys(localPinterestLinks)[Object.keys(localPinterestLinks).length - 1])
        let nextKey:any = (lastKey + 1).toString()

        if(isNaN(lastKey)) {
            nextKey = '0'
        }

        localPinterestLinks[nextKey] =  currentLinkInput
        localPinterestLinks = localPinterestLinks

        PinterestLinks.set({})
        PinterestLinks.set(localPinterestLinks)
    }
</script>

<style></style>

<div>
    <h3>Add links</h3>

    <div>
        {#each Object.entries(localPinterestLinks) as [index, link]}
            <div>
                <p>{link}</p>
            </div>
        {:else}
            <p>No links added yet.</p>
        {/each}
    </div>

    <TextInput light hideLabel placeholder='Enter a pinterest link' bind:value={currentLinkInput} />
    <Button on:click={updatePinterestLinks}>
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