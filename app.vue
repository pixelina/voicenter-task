<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />

    <main>
      <nuxtPage />
    </main>

    <AppFooter />
  </div>
</template>
<script setup>
import { useContentStore } from '@/store/contentStore';

const contentStore = useContentStore()

await useAsyncData('content', contentStore.getContent)
</script>
