<template>
    <footer class="footer">
        <UiContainer class="footer__container">
            <ul class="footer__list">
                <li class="footer__list-item">
                    <nuxt-link class="footer__list-link">Contacts</nuxt-link>
                </li>
                <li class="footer__list-item">
                    <nuxt-link class="footer__list-link">Social Links</nuxt-link>
                </li>
            </ul>
        </UiContainer>
    </footer>
</template>

<script setup>
</script>
<style lang="scss" scoped>
.footer {
    background-color: $dark-bg-color;
    height: 100px;
    display: flex;
    align-items: center;

    &__list {
        display: flex;
        flex-flow: row;
        gap: 282px;
    }

    &__list-link {
        width: 200px;
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;

        transition-property: color;
        transition-duration: 250ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
            color: $accent-color;
        }
    }
}
</style>