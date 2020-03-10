<template>
    <div class="hero">
        <div class="container">
            <div class="row">
                <div class="col-auto">
                    <h1>Get ready to build<br>your <span>kanvas</span></h1>
                    <button class="btn btn-primary">
                        Try it for FREE!
                    </button>
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
    }
}
</style>
