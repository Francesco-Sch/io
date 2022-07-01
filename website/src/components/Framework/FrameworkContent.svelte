<script lang="ts">
import { onMount } from 'svelte';
import { Remarkable } from 'remarkable';
let md = new Remarkable({
    html: true
})
import {clickOutside} from '../../utilities/clickOutside.js';

/* Store & Props */
import { framework } from '../../store'
export let index:number;
let number = $framework[index].index
let title = $framework[index].title
let content = $framework[index].content
let show = $framework[index].show

/* Local variables */
let showContent:boolean = false;
let renderedMarkdown:any;

/* Subscribe to store */
show.subscribe(value => {
    showContent = value
})

/* Handle click outside of content modal */
function handleClickOutside(event) {
    show.set(false)
}

onMount(() => {
    /* Parse Markdown */
    fetch(content)
    .then(response => {
        return response.text()
    })
    .then(text => {
        renderedMarkdown = md.render(text)
    })
})
</script>

{#if showContent}
    <div class="framework-content" use:clickOutside on:click_outside={handleClickOutside}>
        <div class="header grid">
            <div class="number-wrapper">
                <div class="number">
                    <p>{number}</p>
                </div>
            </div>
            <h3>{title}</h3>
            <div class="button-wrapper">
                <button on:click={() => {
                    show.set(false)
                }}>
                    <img src="/close-button.svg" alt="Close button">
                </button>
            </div>
        </div>

        <div class="content grid">
            {@html renderedMarkdown}
        </div>
    </div>
{/if}

<style lang="scss">
.framework-content {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;

    width: 100vw;
    height: 85vh;

    padding: $spacing-08 $spacing-06;
    overflow-y: auto;

    background-color: $gray-10;

    .header {
        margin-bottom: $spacing-10;

        .number-wrapper {
            grid-column: 1 / 2;
            justify-self: start;
            align-self: center;

            .number {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 2.5rem;
                height: 2.5rem;
                border: 1px solid $text;
                border-radius: 50%;
                
                p {
                    text-indent: 0;
                    font-family: $mono;
                }
                
            }
        }

        h3 {
            grid-column: 3 / 11;

            font-size: $font-size-xxxl;
            text-align: right;
            text-transform: uppercase;
        }

        .button-wrapper {
            grid-column: 11 / 12;
            justify-self: end;
            align-self: center;

            button {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                padding: $spacing-04;

                border: 1px solid transparent;
                border-radius: 0.2rem;

                transition: all 0.3s $transition-ease;

                &:hover {
                    cursor: pointer;
                    background-color: $gray-20;
                }

                &:active {
                    cursor: pointer;
                    background-color: $gray-40;
                }
            }
        }
    }

    .content {
        :global(p) {
            grid-column: 3 / 8;

            text-indent: 3rem;
	        line-height: 1.4em;
        }

        :global(.image) {
            grid-column: 3 / 11;
            margin: $spacing-10 0;

            :global(img) {
                width: 100%;
            }
        }


    }

}
</style>