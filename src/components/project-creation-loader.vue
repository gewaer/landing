<template>
    <div class="project-creation-loader">
        <div class="content">
            <img src="/img/kanvas-white-logo.svg" alt="Kanvas logo">
            <p>Preparing your project for Launch</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectCreationLoader"
}
</script>

<style lang="scss">
.project-creation-loader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #201E3B;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p {
            font-family: 'Lato', sans-serif;
            font-size: 2vw;
            margin-bottom: 0;
            color: #E1E8ED;
            letter-spacing: 0.5;
            margin-top: 40px;
        }
    }
}
</style>
