<template>
    <section class="slider-section">
        <UiContainer class="slider-section__container">
            <h2 class="slider-section__title">{{ props.title }}</h2>
            <slot>Here must be your slider...</slot>
        </UiContainer>
    </section>
</template>

<script setup>
const props = defineProps({ 
    title: {
        type: String
    }
});
</script>

<style lang="scss" scoped>
.slider-section {
    &__container {
        padding: 24px 0 114px;
    }

    &__title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-bottom: 57px;
        height: 98px;
    }
}
</style>