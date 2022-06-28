<script lang="ts">
    import { TextInput, NumberInput, Button } from "carbon-components-svelte";
    import { 
        TextToImageOptionFolder,
        TextToImageOptionWidth,
        TextToImageOptionHeight,
        TextToImageOptionIterations
    } from '../../stores';

    let folder:string = $TextToImageOptionFolder
    let width:number = $TextToImageOptionWidth
    let height:number = $TextToImageOptionHeight
    let iterations:number = $TextToImageOptionIterations

    function setOptions () {
        TextToImageOptionFolder.set(folder);
        TextToImageOptionWidth.set(width);
        TextToImageOptionHeight.set(height);
        TextToImageOptionIterations.set(iterations);
    }
</script>

<style>
    .output-folder, .size-of-image {
        margin-bottom: var(--spacing-09)
    }

    /* ----------------------------
    SIZE OF IMAGES
    ---------------------------- */
    .size-of-image .inputs {
        display: flex;
        gap: var(--spacing-07);
    }
    .size-of-image .inputs .width, .size-of-image .inputs .height {
        width: 100%;
    }
    .size-of-image .inputs .width p, .size-of-image .inputs .height p {
        margin-bottom: var(--spacing-04);
    }
</style>

<div class="io-widget tti-options">

    <div class="output-folder">
        <h3 class="io_widget-headline">Output folder</h3>

        <div class="inputs">
            <TextInput light hideLabel class="io_text-input" placeholder='Name of folder' bind:value={folder}/>
        </div>
    </div>

    <div class="size-of-image">
        <h3 class="io_widget-headline">Size of the image</h3>

        <div class="inputs">
            <div class="width">
                <p>
                    Width:
                </p>
                <NumberInput light hideLabel class="io_number-input" placeholder='512' bind:value={width}/>
            </div>
             
            <div class="height">
                <p>
                   Height:
                </p>
                <NumberInput light hideLabel class="io_number-input" placeholder='512' bind:value={height}/>
            </div>
        </div>
    </div>
    
    <div class="iterations">
        <h3 class="io_widget-headline">Iterations</h3>

        <div class="inputs">
            <NumberInput light hideLabel class="io_number-input" placeholder='300' bind:value={iterations}/>
        </div>
    </div>

    <Button class="io_primary-btn" on:click={setOptions}>Set options</Button>
</div>