<template>
    <section class="main-screen">
        <UiContainer class="main-screen__container">
            <div class="main-screen__content">
                <h1 class="main-screen__title">{{ contentStore.pageContent?.testTaskHeaderTitle }}</h1>
                <p class="main-screen__subtitle">{{ contentStore.pageContent?.testTaskHeaderSubtitle }}</p>
                <p class="main-screen__description">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                <UiButton class="main-screen__button">Read more</UiButton>
            </div>
            <img 
            class="main-screen__img" 
            width="614" 
            :alt="contentStore.pageContent?.testTaskHeaderImageAltText"
            :src="contentStore.pageContent?.testTaskHeaderImage">
        </UiContainer>
    </section>
</template>

<script lang="ts" setup>
import { useContentStore } from '@/store/contentStore';

const contentStore = useContentStore()
</script>

<style lang="scss" scoped>
.main-screen {
    background-color: $light-bg-color;
    min-height: 440px;
    padding: 45px 0 75px;

    &__container {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
    }

    &__content {
        padding: 20px 0;
    }

    &__title {
        line-height: 30px;
        margin-bottom: 14px;
    }

    &__subtitle {
        max-width: 385px;
        font-size: 20px;
        font-weight: 500;
        font-family: "Inter", sans-serif;
        line-height: 24px;
        margin-bottom: 14px;
    }

    &__description {
        max-width: 568px;
        font-family: "Inter", sans-serif;
        margin-bottom: 50px;
    }
}
</style>