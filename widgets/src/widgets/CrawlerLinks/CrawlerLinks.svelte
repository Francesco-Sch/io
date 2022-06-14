<script lang="ts">
    import { TextInput, NumberInput, Button } from "carbon-components-svelte";
    import Add from "carbon-icons-svelte/lib/Add.svelte";
    import { 
        CrawlerLinks,
        CrawlerOutputFolder,
        CrawlerImagesAmount
    } from '../../stores';

    let links:Array<string> = []
    let currentLinkInput:string = ''
    let showLinkInput:boolean = false

    let outputFolder:string = $CrawlerOutputFolder
    let imagesAmount:number = $CrawlerImagesAmount

    function updatePinterestLinks () {
        links.push(currentLinkInput)
        links = links

        CrawlerLinks.set([])
        CrawlerLinks.set(links)

        currentLinkInput = ''
        showLinkInput = false;
    }
</script>

<style>
    /* ----------------------------
    LINKS
    ---------------------------- */
    .links {
        margin-bottom: var(--spacing-09);
    }
    .links .link {
        padding: var(--spacing-05);
        margin-bottom: var(--spacing-03);
        font-family: var(--mono);
        background-color: var(--gray-30);
    }
    .links .add-link {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: var(--spacing-07);
    }
    .links .add-link :global(.bx--btn.add-button) {
        background-color: transparent;

        transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .links .add-link :global(.bx--btn.add-button):hover {
        background-color: var(--gray-30);
    }
    .links .add-link :global(.bx--btn.add-button .bx--btn__icon) {
        width: 1.75rem;
        height: 1.75rem;

        color: var(--gray-40);
    }
    .links .add-link .input {
        width: 100%;
        padding: var(--spacing-07);
        background-color: var(--gray-20);
    }

    /* ----------------------------
    SETTINGS
    ---------------------------- */
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
                    <p class="link">{link}</p>
                </div>
            {:else}
                <p>No links added yet.</p>
            {/each}
        </div>

        <div class="add-link">
            {#if !showLinkInput}
                <Button iconDescription="Add link" icon={Add} class="add-button" on:click={() => showLinkInput = true}/>
            {:else}
                <div class="input">
                    <TextInput light hideLabel class="io_text-input" placeholder='Enter a pinterest link' bind:value={currentLinkInput} />
                    <Button class="io_primary-btn" on:click={updatePinterestLinks}>
                        Add link
                    </Button>
                </div>
            {/if}
        </div>
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