<script lang="ts"></script>

<footer class="grid">
    <div class="logo">
        <img src="/logo-footer.svg" alt="Logo of IO framework">
    </div>
    <div class="developer">
        <a>Developer Docs</a>
        <a>Contribution</a>
    </div>
    <div class="imprint">
        <a>Imprint</a>
        <a>Privacy</a>
    </div>

    <div class="socials">

        <!-- GitHub-->
        <a href="https://github.com/Francesco-Sch/io" target="_blank" class="icon">
            <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <defs>
                    <style>
                        .icon-fill{fill-rule:evenodd;}
                        .cls-2{fill:none;}
                    </style>
                </defs>
                <title>logo--github</title>
                <path class="icon-fill" d="M16,2a14,14,0,0,0-4.43,27.28c.7.13,1-.3,1-.67s0-1.21,0-2.38c-3.89.84-4.71-1.88-4.71-1.88A3.71,3.71,0,0,0,6.24,22.3c-1.27-.86.1-.85.1-.85A2.94,2.94,0,0,1,8.48,22.9a3,3,0,0,0,4.08,1.16,2.93,2.93,0,0,1,.88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4,5.4,0,0,1,1.44-3.76,5,5,0,0,1,.14-3.7s1.17-.38,3.85,1.43a13.3,13.3,0,0,1,7,0c2.67-1.81,3.84-1.43,3.84-1.43a5,5,0,0,1,.14,3.7,5.4,5.4,0,0,1,1.44,3.76c0,5.38-3.27,6.56-6.39,6.91a3.33,3.33,0,0,1,.95,2.59c0,1.87,0,3.38,0,3.84s.25.81,1,.67A14,14,0,0,0,16,2Z"/>
                <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-2" width="32" height="32"/>
            </svg>
        </a>

        <!-- Discord -->
        <a href="https://discord.gg/qA6qQqMnJp" target="_blank" class="icon">
            <svg id="icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <defs>
                    <style>
                        .cls-1 {
                            fill: none;
                        }
                    </style>
                </defs>
                <path class="icon-fill" d="M13.647,14.907a1.4482,1.4482,0,1,0,1.326,1.443A1.385,1.385,0,0,0,13.647,14.907Zm4.745,0a1.4482,1.4482,0,1,0,1.326,1.443A1.385,1.385,0,0,0,18.392,14.907Z"/>
                <path class="icon-fill" d="M24.71,4H7.29A2.6714,2.6714,0,0,0,4.625,6.678V24.254A2.6714,2.6714,0,0,0,7.29,26.932H22.032l-.689-2.405,1.664,1.547L24.58,27.53,27.375,30V6.678A2.6714,2.6714,0,0,0,24.71,4ZM19.692,20.978s-.468-.559-.858-1.053a4.1021,4.1021,0,0,0,2.353-1.547,7.4391,7.4391,0,0,1-1.495.767,8.5564,8.5564,0,0,1-1.885.559,9.1068,9.1068,0,0,1-3.367-.013,10.9127,10.9127,0,0,1-1.911-.559,7.6184,7.6184,0,0,1-.949-.442c-.039-.026-.078-.039-.117-.065a.18.18,0,0,1-.052-.039c-.234-.13-.364-.221-.364-.221a4.0432,4.0432,0,0,0,2.275,1.534c-.39.494-.871,1.079-.871,1.079a4.7134,4.7134,0,0,1-3.965-1.976,17.409,17.409,0,0,1,1.872-7.579,6.4285,6.4285,0,0,1,3.653-1.365l.13.156a8.77,8.77,0,0,0-3.419,1.703s.286-.156.767-.377a9.7625,9.7625,0,0,1,2.951-.819,1.2808,1.2808,0,0,1,.221-.026,11,11,0,0,1,2.626-.026A10.5971,10.5971,0,0,1,21.2,11.917a8.6518,8.6518,0,0,0-3.237-1.651l.182-.208a6.4285,6.4285,0,0,1,3.653,1.365,17.409,17.409,0,0,1,1.872,7.579A4.752,4.752,0,0,1,19.692,20.978Z"/>
                <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32" height="32"/>
            </svg>
        </a>  
    </div>
</footer>

<style lang="scss">
    footer {
        padding: $spacing-05;

        .logo {
            grid-column: 1 / 3;
            display: flex;
            align-items: center;
            
            img {
                max-height: 4rem;
            }
        }

        .developer, .imprint {
            display: flex;
            flex-direction: column;
            justify-content: center;

            a {
                color: $gray-50;
                font-size: $font-size-sm;
                text-decoration: underline;

                transition: all 0.7s $transition-ease;

                &:hover {
                    cursor: pointer;
                    color: $text;
                } 
            }
        }
        
        .developer {
            grid-column: 8 / 10;
        }
        .imprint {
            grid-column: 10 / 12;
        }

        .socials {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            grid-column: 12 / 13;

            .icon {
                width: auto;
                height: 2rem;

                &:hover {
                    .icon-fill {
                        fill: $text;
                    }
                }

                &:last-of-type {
                    margin-left: $spacing-06;
                }

                .icon-fill {
                    fill: $gray-50;

                    transition: fill 0.5s $transition-ease;
                }

            }
        }
    }
</style>