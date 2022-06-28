<script lang="ts">
import { get } from 'svelte/store'
import { navigation } from '../store/index.js'

</script>

<header>
    <img src="./logo.svg" alt="Logo of the IO framework" class="logo">
    <nav>
        <ul>
            {#each get(navigation) as link}
            <li>
                <a href="{link.link}">{link.name}</a>
            </li>
            {/each}
        </ul>
    </nav>
</header>

<style lang="scss">
    header {
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
</style>