<template>
    <header class="header">
        <UiContainer class="header__container">
            <nav class="header__nav">
                <nuxt-link to="/" class="header__logo" exact no-prefetch>Logo</nuxt-link>
                <ul class="header__menu">
                    <li class="header__menu-item">
                        <nuxt-link to="/nav1" class="header__menu-link" exact no-prefetch>Nav 1</nuxt-link>
                    </li>
                    <li class="header__menu-item">
                        <nuxt-link to="/nav2" class="header__menu-link" exact no-prefetch>Nav 2</nuxt-link>
                    </li>
                    <li class="header__menu-item">
                        <nuxt-link to="/nav3" class="header__menu-link" exact no-prefetch>Nav 3</nuxt-link>
                    </li>
                </ul>
            </nav>
        </UiContainer>
    </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.header {
    background-color: $dark-bg-color;
    height: 100px;
    display: flex;
    align-items: center;

    &__nav {
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;
    }

    &__logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 162px;
        height: 71px;
        font-size: 25px;
        text-transform: uppercase;
    }

    &__menu {
        display: flex;
        flex-flow: row;
    }

    &__menu-link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 42px;
        font-weight: 700;
        text-transform: uppercase;
        transition-property: color;
        transition-duration: 250ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

        &.router-link-active, &:hover {
            color: $accent-color;
        }
    }
}
</style>
