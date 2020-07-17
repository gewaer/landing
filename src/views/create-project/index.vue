<template>
    <div class="create-project">
        <transition name="fade">
            <ProjectCreationLoader v-if="isloading" />
        </transition>
        <div class="container">
            <form novalidate>
                <form-wizard
                    ref="createProject"
                    title=""
                    subtitle=""
                    :class="{ 'visited-last-step' : visitedLastStep }"
                    color=""
                    @on-change="setVisitedLastStep"
                >
                    <wizard-step
                        slot="step"
                        :key="props.tab.title"
                        slot-scope="props"
                        :tab="props.tab"
                        :transition="props.transition"
                        :index="props.index"
                        :max-step="maxStep"
                    />
                    <tab-content title="PROJECT">
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
                    </tab-content>
                    <tab-content title="DESCRIPTION">
                        <div class="description">
                            <div class="form-group">
                                <label for="project-name">Project name</label>
                                <input
                                    id="project-name"
                                    v-model="projectSetup.name"
                                    type="text"
                                    class="form-control"
                                >
                            </div>
                            <div class="form-group">
                                <label for="project-description">Description</label>
                                <textarea
                                    id="project-description"
                                    v-model="projectSetup.description"
                                    class="form-control"
                                    rows="3"
                                />
                            </div>
                            <div class="form-group">
                                <label for="project-url">Project name</label>
                                <input
                                    id="project-url"
                                    v-model="projectSetup.url"
                                    type="text"
                                    class="form-control"
                                >
                            </div>
                        </div>
                    </tab-content>
                    <tab-content title="APP SETTINGS">
                        <div class="app-settings" />
                    </tab-content>
                    <tab-content title="AUTH" />
                    <template slot="footer" slot-scope="props">
                        <wizard-button v-if="props.activeTabIndex > 0" class="wizard-prev-button" @click.native="props.prevTab()">
                            Go back
                        </wizard-button>
                        <wizard-button v-if="!props.isLastStep" class="wizard-next-button" @click.native="props.nextTab()">
                            Next Step <i class="fas fa-chevron-right" />
                        </wizard-button>
                        <wizard-button v-if="props.isLastStep" class="wizard-next-button wizard-finish-button" @click.native="finishWizard">
                            Finish up and Review
                        </wizard-button>
                    </template>
                </form-wizard>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: "CreateProject",
    components: {
        ProjectCreationLoader: () => import(/* webpackChunkName: "project-creation-loader" */ "../../components/project-creation-loader"),
        FormWizard: () => import(/* webpackChunkName: "form-wizard-form" */ "vue-form-wizard").then(({ FormWizard }) => FormWizard),
        TabContent: () => import(/* webpackChunkName: "form-wizard-tab-content" */ "vue-form-wizard").then(({ TabContent }) => TabContent),
        WizardStep: () => import(/* webpackChunkName: "form-wizard-step" */ "./wizard-step"),
        WizardButton: () => import(/* webpackChunkName: "form-wizard-button" */ "vue-form-wizard").then(({ WizardButton }) => WizardButton)
    },
    data() {
        return {
            isloading: false,
            visitedLastStep: false,
            projectSetup: {
                project_type: "web",
                name: "",
                description: "",
                url: ""
            }
        };
    },
    computed: {
        maxStep() {
            return this.$refs.createProject.maxStep;
        },
        tabCount() {
            return this.$refs.createProject.tabCount;
        }
    },
    methods: {
        setVisitedLastStep(prevIndex, nextIndex) {
            if ((nextIndex + 1) === this.tabCount) {
                this.visitedLastStep = true;
            }
        },
        finishWizard() {
            this.isloading = true;
        }
    }
}
</script>

<style lang="scss">
.create-project {
    width: 100%;
    height: 100vh;
    background-color: #201E3B;
    overflow: hidden;

    .vue-form-wizard {
        .wizard-header {
            display: none;
        }

        .wizard-navigation {
            .wizard-nav-pills {
                display: flex;
                position: relative;
                text-align: center;
                padding-left: 0;
                margin-bottom: 0;

                @media(max-width: 1200px) {
                    width: 75%;
                    margin-left: auto;
                }

                li {
                    list-style: none;
                    padding: 30px 0;
                    flex: 1;

                    @media(max-width: 1200px) {
                        display: none;
                    }

                    a {
                        color: #3B566E;
                        font-family: 'Roboto', sans-serif;
                        font-size: 14px;
                        font-weight: 500;
                        letter-spacing: 1px;
                        text-decoration: none;

                        .wizard-icon {
                            font-style: normal;
                            font-size: 20px;
                        }
                    }

                    &:before, &:after {
                        content: "";
                        position: absolute;
                        width: 0%;
                        background-color: var(--primary-color);
                        height: 100%;
                        top: 0;
                        z-index: -1;
                    }

                    &:before {
                        transition: width .25s ease-in;
                        left: 0;
                    }

                    &:after {
                        transition: width .25s .25s ease-in;
                        left: 50%;
                    }

                    &.active {
                        @media(max-width: 1200px) {
                            display: block;

                            &:after {
                                border-top-right-radius: 0% !important;
                                border-bottom-right-radius: 0% !important;
                            }
                        }

                        a {
                            color: white;

                            .wizard-icon-circle {
                                border-color: transparent !important;

                                .wizard-icon-container {
                                    background-color: transparent !important;
                                }
                            }

                            .stepTitle {
                                color: white !important;
                            }
                        }
                    }

                    &.checked {
                        position: relative;
                        z-index: 1;

                        &:after, &:before {
                            width: 50%;
                        }

                        &.max-step {
                            &:after {
                                border-top-right-radius: 50%;
                                border-bottom-right-radius: 50%;
                            }
                        }

                        &.max-step:last-child {
                            &:after {
                                border-top-right-radius: 0%;
                                border-bottom-right-radius: 0%;
                            }
                        }
                    }

                }

                &:before {
                    content: "";
                    background-image: url("/img/kanvas-logo.svg");
                    background-repeat: no-repeat;
                    background-position: center right;
                    background-size: 65px;
                    background-color: var(--primary-color);
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    left: -100%;
                    color: white;
                    z-index: 5;
                }

                &:after {
                    content: "";
                    position: absolute;
                    background-color: var(--primary-color);
                    height: 100%;
                    width: 0%;
                    left: 100%;
                    transition: width 1s .5s;

                    @media(max-width: 1200px) {
                        width: 100%;
                    }
                }
            }

            .wizard-tab-content {
                padding: 30px;
                min-height: 500px;
                margin-top: 50px;
                background-color: #363262;
                display: flex;
                align-items: center;
                justify-content: center;

                .wizard-tab-container {
                    width: 100%;

                    .project-selection {
                        display: flex;
                        padding: 0 250px;
                        justify-content: space-between;

                        .form-check {
                            padding-left: 0;

                            input {
                                display: none;
                            }

                            input:checked + label {
                                color: white;

                                i {
                                    color: var(--primary-color);
                                }
                            }

                            label {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                color: rgba(255, 255, 255, .5);
                                font-size: 20px;
                                cursor: pointer;

                                i {
                                    color: #201E3B;
                                    font-size: 80px;
                                    margin-bottom: 20px;
                                }
                            }
                        }
                    }

                    .description {
                        .form-group {
                            label {
                                color: white;
                            }

                            input,
                            textarea {
                                background-color: #c1f1ff;
                            }
                        }
                    }
                }
            }
        }

        .wizard-card-footer {
            display: flex;
            justify-content: flex-end;
            margin-top: 30px;

            .wizard-prev-button {
                margin-right: 10px;
                padding: 12px 35px;
                background-color: transparent;
                border-color: transparent;
                color: white;

                &:focus {
                    outline: 0;
                }
            }

            .wizard-next-button {
                background-color: var(--primary-color);
                border-color: var(--primary-color);
                padding: 12px 35px;
                border-radius: 5px;
                color: white;
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
                letter-spacing: .6px;

                &:focus {
                    outline: 0;
                }
            }
        }

        &.visited-last-step {
            .wizard-navigation {
                .wizard-nav-pills {
                    position: relative;

                    &:after {
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>
