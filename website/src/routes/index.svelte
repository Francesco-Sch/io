<script lang="ts">
import Header from "../components/Header.svelte"
import Introduction from "../components/Introduction.svelte";
import Framework from "../components/Framework.svelte";
import FrameworkContent from "../components/Framework/FrameworkContent.svelte";
import Notebooks from "../components/Notebooks.svelte";

import { get } from 'svelte/store'
import { framework } from '../store/'
</script>

<main>
    <Header />
    <Introduction />
    <Framework />
    <Notebooks />

    {#each get(framework) as element, index}
        <FrameworkContent index={index}/>
    {/each}
</main>

<style lang="scss">
</style>


