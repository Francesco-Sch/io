<script lang="ts">
import Header from "../components/Header.svelte"
import Introduction from "../components/Introduction.svelte";
import Framework from "../components/Framework.svelte";
import FrameworkContent from "../components/Framework/FrameworkContent.svelte";
import Notebooks from "../components/Notebooks.svelte";
import Documentation from "../components/Documentation.svelte";
import Footer from "../components/Footer.svelte";

import { get } from 'svelte/store'
import { framework } from '../store/'
</script>

<svelte:head>
	<title>IO ‒ An AI framework for designer</title>
    <link rel="icon" type="image/x-icon" href="logo-small.svg">
</svelte:head>

<main>
    <Header />
    <Introduction />
    <Framework />
    <Notebooks />
    <Documentation />
    <Footer />

    {#each get(framework) as element, index}
        <FrameworkContent index={index}/>
    {/each}
</main>

<style lang="scss">
</style>


