<template>
    <div class="slider">
        <div>
            <button @click="prevSlide" class="slider__nav-btn slider__nav-btn--prev">
                <svg class="slider__item-icon" width="24px" height="22px">
                    <use xlink:href="@/assets/icons/symbol-defs.svg#icon-arrow-left"></use>
                </svg>
            </button>
            <button @click="nextSlide" class="slider__nav-btn slider__nav-btn--next">
                <svg class="slider__item-icon" width="24px" height="22px">
                    <use xlink:href="@/assets/icons/symbol-defs.svg#icon-arrow-right"></use>
                </svg>
            </button>

            <div class="slider__slides-wrapper">
                <div class="slider__slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                    <div v-for="(slide, index) in props.slides" :key="index" class="slider__slide">
                        <div class="slider__content">
                            <h2 class="slider__content-title">{{ slide.title }}</h2>
                            <h3 class="slider__content-subtitle">{{ slide.subtitle }}</h3>
                            <p class="slider__content-text">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standa typesetting industry.
                                Lorem Ipsum has been the industry's standa</p>
                            <UiButton class="slider__button">Read more</UiButton>
                        </div>
                        <img class="slider__img" width="577" height="486" :src="slide.image" :alt="slide.imageAlt" />
                    </div>
                </div>
            </div>
        </div>

        <div class="slider__dots">
            <button v-for="dot in visibleDots" :key="dot.index" class="slider__dot"
                :class="{ 'slider__dot--active': dot.isActive }" @click="goToSlide(dot.index)"></button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import type { PropType } from 'vue';
import type { Slide } from '@/types/interfaces';

const props = defineProps({
    slides: {
        type: Array as PropType<Slide[]>,
        required: true,
    }
});

const currentSlide = ref<number>(0);
const maxDots = ref<number>(5);


const visibleDots: ComputedRef<{ index: number; isActive: boolean }[]> = computed(() => {
    const slidesArray = props.slides;
    if (!Array.isArray(props.slides)) return [];

    const startIndex = Math.max(
        0,
        Math.min(currentSlide.value - Math.floor(maxDots.value / 2), props.slides.length - maxDots.value)
    );

    return slidesArray.slice(startIndex, startIndex + maxDots.value).map((_, index) => ({
        index: startIndex + index,
        isActive: startIndex + index === currentSlide.value,
    }));
});

const prevSlide = (): void => {
    const slidesArray = props.slides;
    if (slidesArray.length > 0) {
        currentSlide.value =
            (currentSlide.value - 1 + slidesArray.length) % slidesArray.length;
    }
};

const nextSlide = (): void => {
    const slidesArray = props.slides;
    if (slidesArray.length > 0) {
        currentSlide.value = (currentSlide.value + 1) % slidesArray.length;
    }
};

const goToSlide = (index: number): void => {
    currentSlide.value = index;
};
</script>

<style lang="scss" scoped>
.slider {
    position: relative;
    width: 100%;
    max-width: 1121px;
    margin: auto;

    &__slides-wrapper {
        display: flex;
        overflow: hidden;
        margin-bottom: 57px;
    }

    &__slides {
        width: 100%;
        display: flex;
        transition: transform 0.5s ease-in-out;
    }

    &__slide {
        min-width: 100%;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;
        gap: 38px;
    }

    &__content {
        display: flex;
        flex-flow: column;
        gap: 24px;
    }

    &__content-subtitle {
        max-width: 409px;
        font-weight: 500;
    }

    &__content-text {
        max-width: 506px;
        font-weight: 700;
    }

    &__button {
        width: 200px;
    }

    &__img {
        width: 577px;
        height: 486px;
        object-fit: cover;
    }

    &__nav-btn {
        width: 25px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        fill: $icon-color;
        cursor: pointer;
        z-index: 10;
    }

    &__nav-btn--prev {
        left: -55px;
    }

    &__nav-btn--next {
        right: -55px;
    }

    &__dots {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 236px;
        height: 60px;
    }

    &__dot {
        width: 10px;
        height: 10px;
        margin: 0 5px;
        background-color: $light-accent-color;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    &__dot--active {
        background-color: $accent-color;
    }
}
</style>