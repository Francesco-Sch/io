<script lang="ts">
/* Store & Props */
import { framework } from '../store/'
export let index:number;
let show = $framework[index].show

/* Local variables */
let showContent:boolean = false;

/* Subscribe to store */
show.subscribe(value => {
    showContent = value
})
</script>

{#if showContent}
    <div class="framework-content">
        <p>Test</p>
    </div>
{/if}

<style lang="scss">
.framework-content {
    position: fixed;
    top: 95vh;
    left: 0;

    width: 100vw;
    height: 5rem;

    background-color: $gray-10;
}
</style>