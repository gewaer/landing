<template>
    <div class="landing">
        <nav-bar />
        <landing-hero />
        <kanvas-details />
    </div>
</template>

<script>
export default {
    name: "Landing",
    components: {
        navBar: () => import(/* webpackChunkName: "nav-bar" */ "../../components/navbar"),
        landingHero: () => import(/* webpackChunkName: "landing-hero" */ "./hero"),
        kanvasDetails: () => import(/* webpackChunkName: "kanvas-details" */ "./details")
    }
}
</script>
