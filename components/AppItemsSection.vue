<template>
    <section class="items-section">
        <UiContainer>
            <h2 class="items-section__title">{{ props.title }}</h2>
            <div class="items-section__content">
                <div class="items-section__side-bar">
                    <nav class="items-section__side-bar-nav">
                        <h3 class="items-section__side-bar-title">{{ props.sideBarTitle }}</h3>
                        <ul class="items-section__side-bar-list">
                            <li class="items-section__side-bar-item" v-for="(item, index) in list" :key="item.key">
                                <a :href="'#item_' + item.key" class="items-section__side-bar-link">{{
                                    item.name }}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <ul class="items-section__items-list">
                    <li class="items-section__items-list-item" v-for="(item, index) in props.list" :key="item.key"
                        :class="{ 'reverse': index % 2 !== 0 }" :id="'item_' + item.key">
                        <img class="items-section__items-list-img" width="476" height="383" :src="item.image"
                            :alt="item.imageAltAtr">
                        <div class="items-section__items-list-content">
                            <h3 class="items-section__items-list-title">{{ item.title }}</h3>
                            <h3 class="items-section__items-list-subtitle">{{ item.subtitle }}</h3>
                            <p class="items-section__items-list-text">Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only five centuries, but also the
                                leap into electronic typesetting, remaining essentially unchanged. It was popularised in
                                the 1960s with the release of Letraset sheets</p>
                            <UiButton @click="openLink(item.buttonLink)" class="items-section__items-list-button">{{
                                item.buttonText }}</UiButton>
                        </div>
                    </li>
                </ul>
            </div>
        </UiContainer>
    </section>
</template>

<script lang="ts" setup>
import { useContentStore } from '@/store/contentStore';
import type { PropType } from 'vue';
import type { TestTaskItem } from '@/types/interfaces';

const props = defineProps({
    list: {
        type: Array as PropType<TestTaskItem[]>,
        required: true,
    },
    title: {
        type: String
    },
    sideBarTitle: {
        type: String
    }
});

const contentStore = useContentStore()

const openLink = (link: string): void => { 
    window.open(link, '_blank');
}
</script>

<style lang="scss" scoped>
.items-section {
    margin-bottom: 82px;

    &__title {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        margin-bottom: 22px;
        width: 448px;
        height: 84px;
    }

    &__content {
        display: flex;
        flex-flow: row;
        gap: 34px;
    }

    &__side-bar {
        width: 169px;
    }

    &__side-bar-nav {
        position: sticky;
        top: 25px;
    }

    &__side-bar-title {
        text-transform: uppercase;
        margin-bottom: 41px;
    }

    &__side-bar-list {
        display: flex;
        flex-flow: column;
        gap: 30px;
    }

    &__side-bar-link {
        font-weight: 700;
        text-transform: uppercase;
        transition-property: color;
        transition-duration: 250ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
            color: $accent-color;
        }
    }

    &__items-list {
        display: flex;
        flex-flow: column;
        gap: 135px;
    }

    &__items-list-item {
        display: flex;
        flex-flow: row;
        gap: 83px;
        scroll-margin-top: 30px;
    }

    &__items-list-item.reverse {
        flex-flow: row-reverse;
    }

    &__items-list-img {
        width: 476px;
        height: 383px;
        object-fit: cover;
    }

    &__items-list-content {
        max-width: 563px;
    }

    &__items-list-title {
        margin-bottom: 35px;
    }

    &__items-list-subtitle {
        font-weight: 500;
        margin-bottom: 45px;
    }

    &__items-list-text {
        margin-bottom: 35px;
    }
}
</style>