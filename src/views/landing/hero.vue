<template>
    <div class="hero">
        <div class="container">
            <div class="row">
                <div class="col-auto">
                    <h1>Get ready to build<br>your <span>kanvas</span></h1>
                    <router-link :to="{ name: 'CreateProject' }" class="btn btn-primary">
                        Try it for FREE!
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Hero"
}
</script>

<style lang="scss">
.hero {
    width: 100%;
    height: 100vh;
    color: white;
    display: flex;
    align-items: center;
    background-image: url("/img/hero-bg.png");
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: 45%;
    position: relative;

    h1 {
        font-weight: 600;
        font-size: 3.5vw;
        margin-bottom: 45px;

        span {
            font-family: 'Lato', sans-serif;
            font-size: 3.8vw;
        }
    }

    &:before {
        content: "";
        position: absolute;
        top: 0;
        width: 100%;
        height: 95%;
        background-color: var(--primary-color);
        z-index: -1;
    }

    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: calc(5% + 4px);
        background-image: url("/img/hero-marker.png");
        background-size: 65px;
        background-position: 75% -4px;
        background-repeat: no-repeat;
        top: calc(95% - 4px);
        z-index: -1;
        background-color: white;

        @media(max-width: 576px) {
            background-image: none;
        }
    }

    @media(min-width: 1500px) {
        .container {
            max-width: 100%;

            .col-auto {
                margin-left: 12vw;

                .btn {
                    transform: translateX(50%) translateY(50%) scale(2);
                }
            }
        }
    }

    @media(max-width: 1680px) {
        background-size: 55%;
    }

    @media(max-width: 1440px) {
        background-size: 60%;
        height: 900px;

        h1 {
            font-size: 3.9vw;

            span {
                font-family: 'Lato', sans-serif;
                font-size: 4.2vw;
            }
        }
    }

    @media(max-width: 1100px) {
        height: 800px;

        h1 {
            font-size: 4.6vw;

            span {
                font-size: 4.9vw;
            }
        }
    }

    @media(max-width: 991px) {
        height: initial;
        align-items: flex-start;
        margin-top: 200px;
        padding-bottom: 480px;
        background-size: 45%;
        background-position: center bottom;

        .row {
            justify-content: center;

            .col-auto {
                display: flex;
                flex-direction: column;
                align-items: center;

                h1 {
                    text-align: center;
                    font-size: 8vw;

                    span {
                        font-size: 8.3vw;
                    }
                }

                button {
                    transform: scale(1.5);
                }
            }
        }
    }

    @media(max-width: 860px) {
        padding-bottom: 420px;
    }

    @media(max-width: 767px) {
        padding-bottom: 350px;
    }

    @media (max-width: 576px) {
        padding-bottom: 320px;
        margin-top: 130px;
        background-size: 75%;

        .row {
            .col-auto {
                h1 {
                    font-size: 10vw;

                    span {
                        font-size: 10.3vw;
                    }
                }
            }
        }
    }
}
</style>
