<script lang="ts">
    import { TextInput, TextArea, Button } from "carbon-components-svelte";
    import Add from "carbon-icons-svelte/lib/Add.svelte";
    import SubtractAlt from "carbon-icons-svelte/lib/SubtractAlt.svelte";
    import CheckmarkOutline from "carbon-icons-svelte/lib/CheckmarkOutline.svelte";
    import { 
        TextToImagePrompt,
        TextToImageAttributes
    } from '../../stores';

    let textPrompt = $TextToImagePrompt

    let attributes:Array<any> = []
    let currentAttributeInput = {
        attribute: '',
        weight: ''
    }
    let showAttributeInput:boolean = false

    let emptyAttributeText:boolean = false
    let emptyAttributeWeight:boolean = false
    let invalidTypeAttributeWeight:boolean = false

    function setPromptandAttributes () {
        TextToImagePrompt.set(textPrompt)

        TextToImageAttributes.set([])
        TextToImageAttributes.set(attributes)
    }

    function updateAttributes () {
        // Check if values are correct
        if(currentAttributeInput.attribute == null || currentAttributeInput.attribute == '') {
            emptyAttributeText = true;
            return
        } else {
            emptyAttributeText = false;
        }

        if(currentAttributeInput.weight == null || currentAttributeInput.weight == '') {
            emptyAttributeWeight = true;
            return
        } else {
            emptyAttributeWeight = false;
        }

        if(isNaN(parseInt(currentAttributeInput.weight))) {
            invalidTypeAttributeWeight = true;
            return
        } else {
            invalidTypeAttributeWeight = false;
        }

        // Round weight up or down
        if(parseInt(currentAttributeInput.weight) > 100) {
            currentAttributeInput.weight = '100'
        } else if(parseInt(currentAttributeInput.weight) < 0) {
            currentAttributeInput.weight = '0'
        }

        attributes.push(currentAttributeInput)
        attributes = attributes

        currentAttributeInput = {
            attribute: '',
            weight: ''
        }
        showAttributeInput = false;
    }
    function removeAttribute (i) {
        if(attributes.length !== 1) {
            attributes = attributes.filter((value, index, arr) => {
                if(index === i) {
                    return value
                }
            })
            attributes = attributes
        } else {
            attributes = []
        }
    }
</script>

<style>
    /* ----------------------------
    TEXT PROMPT
    ---------------------------- */
    .prompt {
        margin-bottom: var(--spacing-10)
    }
    .prompt :global(.prompt-input) {
        background-color: transparent;
    }
    .prompt :global(.prompt-input):active, .prompt :global(.prompt-input):focus {
        outline: none;
        border-bottom: 2px solid var(--orange-100);
    }

    /* ----------------------------
    ATTRIBUTES
    ---------------------------- */
    .attribute, .add-attribute {
        font-size: 1rem;
    }
    .attribute {
        display: flex;
        align-items: center;
        margin-bottom: var(--spacing-05);
    }
    .attribute .attribute_text, 
    .attribute .attribute_weight, 
    .add-attribute .attribute_input :global(.bx--text-input-wrapper),
    .add-attribute .attribute_input :global(.add-attribute-button)
     {
        padding: var(--spacing-06);
        background-color: var(--gray-20);
    }
    .attribute .attribute_text, 
    .attribute .attribute_weight,
    .add-attribute .attribute_input :global(.bx--text-input-wrapper) {
        margin-right: var(--spacing-05);
    }
    .attribute .attribute_text,
    .add-attribute .attribute_input :global(.bx--text-input-wrapper):first-of-type {
        flex-grow: 1;
    }
    .attribute .attribute_weight,
    .add-attribute .attribute_input :global(.bx--text-input-wrapper):last-of-type {
        flex-grow: 0;
        width: 20%;
    }
    .attribute :global(.io_remove-button) {
        padding: 1.3rem;
        background-color: var(--gray-20);
    }
    .add-attribute {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: var(--spacing-05);
    }
    .add-attribute .attribute_input {
        display: flex;
        width: 100%;
    }
    .add-attribute .attribute_input :global(.add-attribute-button) {
        color: var(--text);
        background-color: var(--orange-100);

        transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    .add-attribute .attribute_input :global(.add-attribute-button .bx--btn__icon) {
        width: 1.25rem;
	    height: 1.25rem;
    }
    .add-attribute .attribute_input :global(.io_text-input) {
        margin: 0;
        padding: 0;
        border: 0;
        height: auto;
    }

    /* ----------------------------
    BUTTON
    ---------------------------- */
    .tti-prompt :global(.io_primary-btn) {
        margin-top: var(--spacing-07);
    }
</style>

<div class="io-widget tti-prompt">
    <div class="prompt">
        <h3 class="io_widget-headline">Text Prompt</h3>

        <TextArea
            hideLabel
            placeholder="Enter a text prompt"
            class="prompt-input"

            bind:value={textPrompt}
        />
    </div>

    <div class="attributes">
        <h3 class="io_widget-headline">Add attributes</h3>

        {#each attributes || [] as attribute, index}
            <div class="attribute">
                <div class="attribute_text">
                    {attribute.attribute}
                </div>
                <div class="attribute_weight">
                    {attribute.weight}
                </div>
                <Button iconDescription="Remove attribute" icon={SubtractAlt} class="io_remove-button" on:click={() => {removeAttribute(index)}} />
            </div>
        {:else}
            <p>No attributes added yet.</p>
        {/each}   

        <div class="add-attribute">
            {#if !showAttributeInput}
                <Button iconDescription="Add attribute" icon={Add} class="io_add-button" on:click={() => showAttributeInput = true}/>
            {:else}
                <div class="attribute_input">
                    {#if emptyAttributeText}
                        <TextInput 
                            light 
                            hideLabel 
                            invalid
                            invalidText="You have to set an attribute."
                            class="io_text-input adjective-input" 
                            placeholder='Add an adjective or attribute' 
                            bind:value={currentAttributeInput.attribute} 
                        />
                    {:else}
                        <TextInput 
                            light 
                            hideLabel 
                            class="io_text-input adjective-input" 
                            placeholder='Add an adjective or attribute' 
                            bind:value={currentAttributeInput.attribute} 
                        />
                    {/if} 

                    {#if emptyAttributeWeight}
                        <TextInput 
                            light 
                            hideLabel 
                            invalid
                            invalidText="You have set a weight if you want to define an attribute."
                            class="io_text-input weight-input" 
                            placeholder='Set weight' 
                            bind:value={currentAttributeInput.weight} 
                        />
                    {:else if invalidTypeAttributeWeight}
                        <TextInput 
                            light 
                            hideLabel 
                            invalid
                            invalidText="You have to set a number between 0 and 100"
                            class="io_text-input weight-input" 
                            placeholder='Set weight' 
                            bind:value={currentAttributeInput.weight} 
                        />
                    {:else}
                        <TextInput 
                            light 
                            hideLabel 
                            class="io_text-input weight-input" 
                            placeholder='Set weight' 
                            bind:value={currentAttributeInput.weight} 
                        />
                    {/if} 

                    <Button 
                        iconDescription="Set attribute" 
                        icon={CheckmarkOutline} 
                        class="add-attribute-button" 
                        on:click={updateAttributes} 
                    />
                </div>
            {/if}
        </div> 
    </div>

    <Button class="io_primary-btn" on:click={setPromptandAttributes}>Set text prompt</Button>
</div>