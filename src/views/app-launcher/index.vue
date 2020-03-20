<template>
    <div class="app-launcher">
        <div class="container">
            <div class="row">
                <div v-for="app in apps " :key="app.key" class="col-4 mb-4">
                    <app-card :app="app" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import appCard from "./app-card";

export default {
    name: "AppSelection",
    components: {
        appCard
    },
    data() {
        return {
            apps: [
                {
                    id: 1,
                    name: "Oorden",
                    category: "Finance",
                    description: "Software Inteligente en la Nube para Empresas y Contadores.",
                    color: "#3748A1",
                    link: "https://oorden.com/"
                },
                {
                    id: 2,
                    name: "Ginny",
                    category: "Finance",
                    description: "Ginny es tu asistente para el control efectivo de tus tarjetas de crédito.",
                    color: "#1DAF9A",
                    link: "https://ginnyapp.com/"
                },
                {
                    id: 3,
                    name: "Gewær",
                    category: "Finance",
                    description: "Ginny es tu asistente para el control efectivo de tus tarjetas de crédito.",
                    color: "#303E45",
                    link: "https://gewaer.io/"
                },
                {
                    id: 4,
                    name: "Ginny",
                    category: "Finance",
                    description: "Ginny es tu asistente para el control efectivo de tus tarjetas de crédito.",
                    color: "#1DAF9A",
                    link: "https://ginnyapp.com/"
                },
                {
                    id: 5,
                    name: "Oorden",
                    category: "Finance",
                    description: "Software Inteligente en la Nube para Empresas y Contadores.",
                    color: "#3748A1",
                    link: "https://oorden.com/"
                }
            ]
        }
    }
}
</script>

<style lang="scss">
.app-launcher {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #F6F7F9;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
