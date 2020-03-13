<template>
    <div class="nav-bar">
        <div class="logo">
            <img src="/img/kanvas-logo.svg" width="65" alt="Kanvas logo">
        </div>
        <div class="nav-bar-links">
            <a href="#">About</a>
            <a href="#" class="try-it-out">Try it out!</a>
            <a href="#">Login</a>
        </div>
        <dropdown
            :is-icon="false"
            align="left"
            :x="35"
            :y="40"
            class="nav-bar-link-mobile"
        >
            <template slot="btn">
                <a href="#" class="hamburger-menu">
                    <img src="/img/hamburger-menu.svg" alt="Hamburger menu">
                </a>
            </template>
            <template slot="body">
                <a href="#">About</a>
                <a href="#" class="try-it-out">Try it out!</a>
                <a href="#">Login</a>
            </template>
        </dropdown>
    </div>
</template>

<script>
import Dropdown from "bp-vuejs-dropdown";

export default {
    name: "NavBar",
    components: { Dropdown }
}
</script>

<style lang="scss">
.nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 1;

    .nav-bar-links {
        display: flex;

        a {
            padding: 0 70px;
            font-size: 16px;
            text-transform: uppercase;
            font-family: "Roboto", sans-serif;
            font-weight: 600;
            color: white;
            letter-spacing: .7px;
            text-decoration: none;
            display: flex;
            align-items: center;

            &:last-child {
                padding-right: 25px;
            }

            &.try-it-out {
                padding: 8px 35px;
                border-radius: 5px;
                background-color: #3B566E;
            }
        }

        @media(max-width: 767px) {
            display: none;
        }
    }

    .nav-bar-link-mobile {
        align-self: flex-start;

        .bp-dropdown__btn {
            border: 0;
            padding: 0;
        }

        .bp-dropdown__btn--active {
            background-color: transparent;
        }

        .bp-dropdown__body {
            display: flex;
            flex-direction: column;

            a {
                padding: 5px 15px;
                color: var(--primary-color);
            }
        }

        @media(min-width: 767px) {
            display: none;
        }
    }
}
</style>
