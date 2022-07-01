<script lang="ts">

</script>

<section id="documentation" class="grid">
    <p class="intro-text">
        Head over to the Documentation for Tutorials and Support regarding technical questions. 
        It helps you with installing your own JupyterLab-Instance and gives you an overview over all available widgets and extensions.
    </p>

    <div class="text-wrapper">
        <p>Coming Soon Coming Soon</p> 
        <p>Coming Soon Coming Soon</p>
    </div>
    
</section>

<style lang="scss">
    #documentation {
        padding: $spacing-06;
        
        background-color: $text;

        .intro-text {
            grid-column: 1 / 6;
            margin-bottom: $spacing-12;
            color: white;
        }

        .text-wrapper {
            grid-column: 1 / 13;
            white-space: nowrap;
            overflow: hidden;

            padding: $spacing-07 $spacing-12;

            border: 7px solid white;
            border-radius: 20rem;

            p {
                display: inline-block;
                font-size: 11vw;
                font-weight: 400;

                color: white;   

                animation: scrollText 20s infinite linear;
            }
        }
    } 

    @keyframes scrollText {
        from { transform: translateX(0%); }
        to { transform: translateX(-100%); }
    }
</style>