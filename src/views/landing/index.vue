<template>
    <div class="landing">
        <landing-hero />
        <kanvas-details />
    </div>
</template>

<script>
export default {
    name: "Landing",
    components: {
        landingHero: () => import(/* webpackChunkName: "landing-hero" */ "./hero"),
        kanvasDetails: () => import(/* webpackChunkName: "kanvas-details" */ "./details")
    }
}
</script>
