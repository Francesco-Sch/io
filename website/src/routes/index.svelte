<script lang="ts">
import Header from "../components/Header.svelte"
import Introduction from "../components/Introduction.svelte";
import Framework from "../components/Framework.svelte";
import FrameworkContent from "../components/FrameworkContent.svelte";

import { get } from 'svelte/store'
import { framework } from '../store/'
import { element } from "svelte/internal";
</script>

<main>
    <Header />
    <Introduction />
    <Framework />

    {#each get(framework) as element}
        {#if element.show}
            <FrameworkContent />
        {/if}
    {/each}
</main>

<style lang="scss">
</style>


