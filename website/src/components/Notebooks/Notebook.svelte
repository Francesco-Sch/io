<script lang="ts">
export let title:string;
export let link:string;
export let available:boolean;
</script>

{#if available == true}
<a href="{link}" target="_blank" class="notebook">
    <h3>{title}</h3>  
    <img src="/launch-notebook.svg" alt="Launch notebook">
</a>
{:else}
<div class="notebook disabled">
    <h3>{title}</h3>
    <p class="soon">Coming soon</p>
    <img src="/launch-notebook.svg" alt="Launch notebook">  
</div>
{/if}

<style lang="scss">
.notebook {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    width: 33%;
    min-height: 32rem;
    padding: $spacing-06;

    text-decoration: none;

    background-color: white;
    border-right: 3px solid $gray-10;

    transition: all 0.3s $transition-ease;

    &:hover {

        background-color: $orange-100;
    }

    h3 {
        font-size: $font-size-md;

        margin-bottom: $spacing-06;
    }

    img {
        width: 2rem;
        height: 2rem;

        margin-top: auto;
    }
}

.disabled {
    &:hover {
        background-color: white;
    }

    h3 {
        color: $gray-50;
    }

    .soon {
        margin-right: auto;
        padding: $spacing-02 $spacing-04;

        font-size: $font-size-sm;
        text-transform: uppercase;
        text-indent: 0;

        color: $gray-50;

        border: 2px solid $gray-50;
        border-radius: 2.5rem;
    }

    img {
        opacity: 50%;
    }
}
</style>