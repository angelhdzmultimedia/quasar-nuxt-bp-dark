<script setup lang="ts">
const isLoading = ref(true)

const dark = await useDark()

onMounted(() => {
  isLoading.value = false
})
</script>

<template>
  <div
    v-if="isLoading"
    :style="{ backgroundColor: dark.isActive ? '#121212' : 'white' }"
    class="window-width column window-height items-center justify-center"
  >
    <q-spinner color="primary" size="3em" />
  </div>
  <NuxtLayout v-else>
    <NuxtPage />
  </NuxtLayout>
</template>
