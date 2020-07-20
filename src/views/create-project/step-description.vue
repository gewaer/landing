<template>
    <div class="description">
        <div class="form-group">
            <label for="project-name">Project name</label>
            <input
                id="project-name"
                v-model="projectSetup.name"
                required
                :class="{ 'is-invalid': $v.projectSetup.name.$error }"
                type="text"
                class="form-control"
            >
            <div class="invalid-feedback">
                Please provide a project name.
            </div>
        </div>
        <div class="form-group">
            <label for="project-description">Description</label>
            <textarea
                id="project-description"
                v-model="projectSetup.description"
                required
                :class="{ 'is-invalid': $v.projectSetup.description.$error }"
                class="form-control"
                rows="3"
            />
            <div class="invalid-feedback">
                Please provide a description.
            </div>
        </div>
        <div class="form-group">
            <label for="project-url">Project URL</label>
            <input
                id="project-url"
                v-model="projectSetup.url"
                required
                :class="{ 'is-invalid': $v.projectSetup.url.$error }"
                type="text"
                class="form-control"
            >
            <div class="invalid-feedback">
                Please provide a valid url.
            </div>
        </div>
    </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, url } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],
    props: {
        projectSetup: {
            type: Object,
            required: true
        }
    },
    validations: {
        projectSetup: {
            description: {
                required
            },
            name: {
                required
            },
            url: {
                required,
                url
            }
        }
    },
    methods: {
        isValid() {
            this.$v.$touch()
            return !this.$v.$invalid
        }
    }
}
</script>
