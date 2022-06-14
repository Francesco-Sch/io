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

<style>
.links {
    margin-bottom: var(--spacing-09);
}
.settings .inputs {
    display: flex;
    gap: var(--spacing-07);
}
.settings .inputs .folder, .settings .inputs .amount-of-images {
    width: 100%;
}
.settings .inputs .folder p, .settings .inputs .amount-of-images p {
    margin-bottom: var(--spacing-04);
}
.crawler-links .amount-of-images :global(.bx--number__controls) {
    top: 39%;
    height: 2.5rem;
}
.crawler-links .amount-of-images :global(.bx--number__controls .bx--number__control-btn::before),
.crawler-links .amount-of-images :global(.bx--number__controls .bx--number__control-btn::after) {
    background-color: transparent;
}
.crawler-links .amount-of-images :global(.bx--number__controls .bx--number__rule-divider) {
    background-color: var(--gray-50);
}
</style>

<div class="io-widget crawler-links">
    <div class="links">
        <h3 class="io_widget-headline">Add links</h3>

        <div>
            {#each links || [] as link}
                <div>
                    <p>{link}</p>
                </div>
            {:else}
                <p>No links added yet.</p>
            {/each}
        </div>
    
        <TextInput light hideLabel class="io_text-input" placeholder='Enter a pinterest link' bind:value={currentLinkInput} />
        <Button class="io_primary-btn" on:click={updatePinterestLinks}>
            Add link
        </Button>
    </div>

    <div class="settings">
        <h3 class="io_widget-headline">Set settings</h3>

        <div class="inputs">
            <div class="folder">
                <p>
                    Name of the folder<br>
                    for the collected images
                </p>
                <TextInput light hideLabel class="io_text-input" placeholder='Name of folder' bind:value={outputFolder} on:blur={() => {
                    CrawlerOutputFolder.set(outputFolder)
                }}/>
            </div>
            
            <div class="amount-of-images">
                <p>
                    Amount of images<br> 
                    you want to scrape
                </p>
                <NumberInput light hideLabel class="io_text-input" placeholder='3000' bind:value={imagesAmount} on:blur={() => {
                    CrawlerImagesAmount.set(imagesAmount)
                }}/>
            </div>
        </div>
    </div>
</div>