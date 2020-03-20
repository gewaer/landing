<template>
    <div class="app-card" :style="{ 'background-color': app.color ? app.color : '' }" @click="openLink(app.link)">
        <div class="card-title">
            <h1>{{ app.name }}</h1>
            <span>{{ app.category }}</span>
        </div>
        <div class="card-body">
            <p>{{ app.description }}</p>
            <span>SELECT</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppCard",
    props: {
        app: {
            type: Object,
            required: true
        }
    },
    methods: {
        openLink(link) {
            open(link, "_self")
        }
    }
}
</script>

<style lang="scss">
.app-card {
    background-color: var(--primary-color);
    height: 235px;
    box-shadow: 0 7px 14px rgba(132, 132, 132, .15);
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;

    .card-title {
        height: 60%;
        padding: 25px;
        margin-bottom: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            font-family: 'Open Sans', sans-serif;
            font-size: 40px;
            font-weight: 500;
            text-transform: uppercase;
            color: white;
            margin-bottom: 0;
        }

        span {
            padding: 5px 25px;
            background-color: white;
            color: #A5A5A5;
            border-radius: 3px;
            font-size: 10px;
            font-family: 'Roboto', sans-serif;
        }
    }

    .card-body {
        padding: 0;
        height: 40%;
        padding: 25px;
        padding: 25px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            margin-bottom: 0;
        }

        span {
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            padding-left: 25px;
            color: var(--primary-color);
        }
    }
}
</style>
