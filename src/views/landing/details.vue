<template>
    <div class="kanvas-details">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg what-is-kanvas">
                    <h1>What is Kanvas?</h1>
                    <p>Kanvas is a multiple layer component package to help you build and manage your project, going beyond a standard Boilerplate or template by aiming for the solution of common development problems we have discovered over the years.</p>
                    <p>We want to help developers to quickly deploy apps by writing as less code as possible, while still keeping a high degree of customization and adaptability.</p>
                    <p>The aim of this layer is to address compact and agnostic solutions to specific challenges that we find in our everyday coding. By writing agnostic packages and components we can assure a large degree of portability and compatibility throughout many different systems that utilize them, and in the end create a top product for you.</p>
                    <img src="/img/details-image.png" class="img-fluid">
                </div>
                <div class="col-12 col-lg try-it-free">
                    <h2>Let your kanvas<br>handle the dirty work</h2>
                    <button class="btn btn-secondary">
                        Try it for FREE!
                    </button>
                </div>
            </div>
        </div>
        <img class="kanvas-and-mctekk" src="/img/kanvas-and-mctekk.png">
    </div>
</template>

<script>
export default {
    name: "KanvasDetails"
}
</script>

<style lang="scss">
.kanvas-details {
    padding-top: 20px;
    position: relative;
    background-color: white;

    .what-is-kanvas {
        h1 {
            color: var(--primary-color);
            margin-bottom: 45px;
        }

        p {
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            color: #3B566E;
        }

        img {
            margin-left: -35%;
            margin-top: 50px;
        }

        @media(max-width: 991px) {
            h1 {
                text-align: center;
            }

            img {
                display: none;
            }
        }

        @media(max-width: 576px) {
            h1 {
                font-size: 2rem;
            }
        }
    }

    .try-it-free {
        padding-top: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            text-align: center;
            margin-bottom: 45px;
            color: #3B566E;
            line-height: 3rem;
        }
    }

    > img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 35px;
        z-index: 1;

        @media(max-width: 576px) {
            width: 50%;
        }
    }

    @media(max-width: 991px) {
        padding-bottom: 220px;
    }

    &:after {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-left: 49vw solid transparent;
        border-right: 49vw solid transparent;
        border-bottom: 300px solid var(--primary-color);
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;

        @media(max-width: 991px) {
            border-bottom: 150px solid var(--primary-color);
        }
    }
}
</style>
