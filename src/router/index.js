import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/landing/";
import CreateProject from "../views/create-project/";
import AppLauncher from "../views/app-launcher/";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Landing",
        component: Landing
    },
    {
        path: "/create-project",
        name: "CreateProject",
        component: CreateProject
    },
    {
        path: "/app-launcher",
        name: "AppSelection",
        component: AppLauncher
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

export default router;
