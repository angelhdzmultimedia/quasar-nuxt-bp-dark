<script setup lang="ts">
const isLoading = ref(true)

onMounted(() => {
  isLoading.value = false
})
</script>

<template>
  <div
    v-if="isLoading"
    class="
      column
      items-center
      justify-center
      window-width window-height
      overflow-hidden
    "
  >
    <span>WSOD (White Screen Of Death xD)</span>
    <q-spinner color="primary" size="3em" />
  </div>

  <NuxtLayout v-else>
    <NuxtPage />
  </NuxtLayout>
</template>
