<template>
    <div class="project-selection">
        <div class="form-check">
            <input
                id="web-based-project"
                v-model="projectSetup.project_type"
                value="web"
                class="form-check-input"
                type="radio"
                name="web-based-project"
            >
            <label class="form-check-label" for="web-based-project">
                <i class="fab fa-chrome" />
                Web
            </label>
        </div>
        <div class="form-check">
            <input
                id="mobile-based-project"
                v-model="projectSetup.project_type"
                value="mobile"
                class="form-check-input"
                type="radio"
                name="mobile-based-project"
            >
            <label class="form-check-label" for="mobile-based-project">
                <i class="fas fa-mobile" />
                Mobile
            </label>
        </div>
        <div class="form-check">
            <input
                id="both-based-project"
                v-model="projectSetup.project_type"
                value="both"
                class="form-check-input"
                type="radio"
                name="both-based-project"
            >
            <label class="form-check-label" for="both-based-project">
                <i class="fas fa-code" />
                Both
            </label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        projectSetup: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>
