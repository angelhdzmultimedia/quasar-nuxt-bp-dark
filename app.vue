<script setup lang="ts">
const isLoading = ref(true)

onMounted(() => {
  isLoading.value = false
})
</script>

<template>
  <div
    v-if="isLoading"
    class="window-width column window-height items-center justify-center"
  >
    <q-spinner color="primary" size="3em" />
  </div>
  <NuxtLayout v-else>
    <NuxtPage />
  </NuxtLayout>
</template>
