<script lang="ts">
import Notebook from "./Notebooks/Notebook.svelte";
import { get } from 'svelte/store'
import { notebooks } from '../store/'
import { scrollRef } from 'svelte-scrolling'
</script>

<section id="notebooks" use:scrollRef={'notebooks'}>
    <h2>
        launch a notebook <br>
        and start experimenting
    </h2>

    <div class="notebooks">
        {#each get(notebooks) as notebook}
            <Notebook title="{notebook.title}" link="{notebook.link}" available="{notebook.available}" />
        {/each}
    </div>
</section>

<style lang="scss">
    #notebooks {
        padding: $spacing-06;
        background-color: $gray-10;

        h2 {
            margin-bottom: $spacing-11;
            br {
                line-height: 1.3rem
            }
        }

        .notebooks {
            display: flex;
        }
    }
</style>