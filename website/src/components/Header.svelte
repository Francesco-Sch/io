<script lang="ts">
import { onMount } from 'svelte'
import { get } from 'svelte/store'
import { navigation } from '../store/index.js'
import { scrollTo } from 'svelte-scrolling'

let y:number;
let header:any = {};

onMount(() => {
    console.log(header.offsetHeight)
})
</script>

<svelte:window bind:scrollY={y}/>

{#if y >= header.offsetHeight}
    <div class="sticky-header">
        <nav>
            <ul>
                {#each get(navigation) as link}
                <li>
                    <a use:scrollTo={link.link}>{link.name}</a>
                </li>
                {/each}
            </ul>
        </nav>
    </div>
{/if}

<header bind:this={header}>
    <img src="./logo.svg" alt="Logo of the IO framework" class="logo">
    <nav>
        <ul>
            {#each get(navigation) as link}
            <li>
                <a use:scrollTo={link.link}>{link.name}</a>
            </li>
            {/each}
        </ul>
    </nav>
</header>



<style lang="scss">
    header, .sticky-header {
        border-bottom: 2px solid $text;

        .logo {
            width: 100%;
            padding: $spacing-06;
        }

        nav {
            padding: $spacing-04 $spacing-06;

            border-top: 2px solid $text;

            ul {
                display: flex;
                justify-content: space-between;
            }
        }
    }

    .sticky-header {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000000;

        width: 100%;

        background-color: white;
    }
</style>