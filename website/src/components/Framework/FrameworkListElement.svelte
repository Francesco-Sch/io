<script lang="ts">
export let index = 0;
export let title = 'Default title';

</script>

<div class="framework-element grid" on:click>
    <div class="number">
        <p>
            {index}
        </p>
    </div>
    
    <h3>{title}</h3>
</div>

<style lang="scss">
.framework-element {
    padding: $spacing-07 0;
    border-bottom: solid 2px $gray-50;

    transition: all 0.5s $transition-ease;

    &:hover {
        cursor: pointer;
        border-color: $text;

        p {
            border-color: $text;
        }

        p, h3 {
            color: $text;
        }

    }

    &:last-of-type {
        border-bottom: 0px solid transparent;
    }
    
    h3 {
        grid-column: 2 / 13;
        font-size: 7vw;
        text-transform: uppercase;
    }

    .number {
        grid-column: 1 / 2;
        justify-self: stretch;
        align-self: center;

        p {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 2.5rem;
            height: 2.5rem;
            font-family: $mono;
            text-indent: 0;
            text-align: center;
            border: solid 1px $gray-50;
            border-radius: 50%;
        }
    }

    p, h3 {
        color: $gray-50;
        transition: all 0.5s $transition-ease;
    }
}
</style>