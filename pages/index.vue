<template>
    <div>
        <AppMainScreen />
        <AppItemsSection :title="content?.testTaskSecondBlockTitle"
            :sideBarTitle="content?.testTaskSecondBlockSideNavigationTitle"
            :list="content?.testTaskSecondDescriptiveBlockItems" />
        <AppSliderSection :title="content?.testTaskSlidesBlockTitle">
            <AppSlider :slides="content?.testTaskSlidesBlockSlides" />
        </AppSliderSection>
    </div>
</template>

<script setup>
import { useContentStore } from '@/store/contentStore';

const contentStore = useContentStore()

const content = contentStore.pageContent
</script>

<style lang="scss" scoped></style>