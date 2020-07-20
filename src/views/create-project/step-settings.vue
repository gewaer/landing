<template>
    <div class="app-settings">
        <div class="row">
            <div class="col-auto">
                <div class="form-group v-swatches">
                    <v-swatches v-model="projectSetup.primary_color" />
                    <label>Primary Color</label>
                </div>
            </div>
            <div class="col-auto">
                <div class="form-group v-swatches">
                    <v-swatches v-model="projectSetup.secondary_color" />
                    <label>Secondary Color</label>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label>Currency</label>
            <multiselect
                v-model="projectSetup.currency"
                :options="['US', 'EUR', 'GBP']"
                :allow-empty="false"
                :show-labels="false"
            />
        </div>
        <div class="form-group">
            <label>Language</label>
            <multiselect
                v-model="projectSetup.language"
                :options="['English', 'Spanish']"
                :allow-empty="false"
                :show-labels="false"
            />
        </div>
        <div class="form-group">
            <label>Timezone</label>
            <multiselect
                v-model="projectSetup.timezone"
                :options="['Option 1', 'Option 2', 'Option 3']"
                :allow-empty="false"
                :show-labels="false"
            />
        </div>
    </div>
</template>

<script>
import VSwatches from "vue-swatches";
import "vue-swatches/dist/vue-swatches.css";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";

export default {
    components: {
        Multiselect,
        VSwatches
    },
    props: {
        projectSetup: {
            type: Object,
            required: true
        }
    }
}
</script>
