<script lang="ts">
import FrameworkElement from './FrameworkElement.svelte'
import { get } from 'svelte/store'
import { framework } from '../store/'
</script>

<section id="the-framework">
    <h2>
        how to use <br>
        this framework:
    </h2>

    {#each get(framework) as element}
        <FrameworkElement 
            index={element.index} 
            title={element.title}

            on:click="{() => {
                element.show.set(true)
            }}"
        />
    {/each}

</section>

<style lang="scss">
    #the-framework {
        padding: $spacing-06;

        h2 {
            grid-column: 1 / 13;
            grid-row: 1 / 2;

            margin-bottom: $spacing-12;

            br {
                line-height: 1.3em;
            }
        }
    }
</style>