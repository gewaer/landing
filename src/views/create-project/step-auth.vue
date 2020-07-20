<template>
    <div class="auth">
        <div class="row align-items-center">
            <div class="col-12 col-lg">
                <div class="form-group switch mb-4 mb-lg-0">
                    <switches v-model="projectSetup.auth" color="blue" />
                    <label>Ecosystem Auth</label>
                </div>
            </div>
            <div class="col-12 col-lg">
                <div class="form-group switch mb-4 mb-lg-0">
                    <switches v-model="projectSetup.allow_signup" color="blue" />
                    <label>Allow User Registration</label>
                </div>
            </div>
            <div class="col-12 col-lg d-flex flex-column align-items-center align-items-lg-start">
                <div class="form-check">
                    <input
                        id="facebook"
                        v-model="projectSetup.social_login"
                        value="facebook"
                        class="form-check-input"
                        type="checkbox"
                    >
                    <label class="form-check-label" for="facebook">
                        Facebook Login
                    </label>
                </div>
                <div class="form-check">
                    <input
                        id="google"
                        v-model="projectSetup.social_login"
                        value="google"
                        class="form-check-input"
                        type="checkbox"
                    >
                    <label class="form-check-label" for="google">
                        Google Login
                    </label>
                </div>
                <div class="form-check">
                    <input
                        id="github"
                        v-model="projectSetup.social_login"
                        value="github"
                        class="form-check-input"
                        type="checkbox"
                    >
                    <label class="form-check-label" for="github">
                        Github Login
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Switches from "vue-switches";

export default {
    components: {
        Switches
    },
    props: {
        projectSetup: {
            type: Object,
            required: true
        }
    }
}
</script>
