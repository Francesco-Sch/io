<script lang="ts">
    import { TextInput, NumberInput, Button } from "carbon-components-svelte";
    import { 
        CrawlerLinks,
        CrawlerOutputFolder,
        CrawlerImagesAmount
    } from '../../stores';

    let links:Array<string> = []
    let currentLinkInput:string = ''

    let outputFolder:string = $CrawlerOutputFolder
    let imagesAmount:number = $CrawlerImagesAmount

    function updatePinterestLinks () {
        links.push(currentLinkInput)
        links = links

        CrawlerLinks.set([])
        CrawlerLinks.set(links)
    }
</script>

<style></style>

<div>
    <h3>Add links</h3>

    <div>
        {#each links || [] as link}
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
    <TextInput light hideLabel placeholder='Name of folder' bind:value={outputFolder} on:blur={() => {
        CrawlerOutputFolder.set(outputFolder)
    }}/>

    <p>Amount of images you want to scrape</p>
    <NumberInput light hideLabel placeholder='3000' bind:value={imagesAmount} on:blur={() => {
        CrawlerImagesAmount.set(imagesAmount)
    }}/>
</div>