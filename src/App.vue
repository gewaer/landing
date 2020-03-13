<template>
    <router-view />
</template>

<script>
export default {
    name: "App"
}
</script>

<style lang="scss">
:root {
    --primary-color: #26c5f3;
}

html {
    body {
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        background-color: var(--primary-color);

        .btn {
            padding: .575rem 1.7rem;
            box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);
            border-radius: 7px;
            font-size: 1.2rem;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            letter-spacing: .5px;

            &.btn-primary {
                background-color: white;
                border-color: white;
                color: var(--primary-color);

                &:active {
                    background-color: white !important;
                    border-color: white !important;
                    color: var(--primary-color) !important;
                    filter: brightness(90%);
                }

                &:focus {
                    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2) !important;
                }
            }

            &.btn-secondary {
                background-color: var(--primary-color);
                border-color: var(--primary-color);
                color: white;

                &:active {
                    background-color: var(--primary-color) !important;
                    border-color: var(--primary-color) !important;
                    color: white !important;
                    filter: brightness(90%);
                }

                &:focus {
                    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2) !important;
                }
            }
        }
    }
}
</style>
