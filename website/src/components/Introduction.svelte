<script lang="ts">
import { get } from 'svelte/store'
import { navigation } from '../store/index.js'
import { scrollRef } from 'svelte-scrolling'
</script>

<section id="introduction" class="grid" use:scrollRef={'introduction'}>
    <h2>
        making artifical<br> 
        intelligence accessible <br>
        for designer
    </h2>

    <div class="text">
        <p>
            Artificial intelligence is already influencing our society to a large extent and this influence is likely to increase further in the future. The profession of designer will also be permanently influenced by AI and will continue to be shaped in the future. AI should be perceived as an opportunity and thus as an additional design tool for designers.
        </p>
        <p>
            However, working with artificial intelligence is currently very complex and involves many hurdles. A lack of knowledge in programming and the tools makes it difficult to use artificial intelligence as a design tool. "IO - An AI Framework for Designers" addresses this problem and offers a range of possibilities to make artificial intelligence accessible to designers.
        </p>
        <p>
            Extending the ecosystem around JupyterLab and Jupyter Notebooks, IO provides different tools to make AI more accessible. Part of the framework are this website, a JupyterLab theme and server extension, an easy web-view for Jupyter notebooks and refined widgets which can be used inside Jupyter notebooks. You can read more about the different parts in the following section.
        </p>
    </div>

    <img src="./intro_key-visual.svg" alt="Moon circle around the JupyterLab logo" class="keyvisual">
</section>

<style lang="scss">
    #introduction {
        position: relative;
        padding: $spacing-06;
        background-color: $orange-100;

        h2 {
            grid-column: 1 / 13;
            grid-row: 1 / 2;

            br {
                line-height: 1.3em;
            }
        }

        .text {
            grid-column: 8 / 13;
            grid-row: 2 / 3;
            margin-top: -7rem;
        }

        .keyvisual {
            position: absolute;
            left: -20%;
            top: 0;
            bottom: 0;
            
            height: 90%;

            margin: auto 0;
        }
    }
</style>