<script setup lang="ts">
useDark().set(true)
onMounted(() => {})

const emit = defineEmits(['loaded'])

setTimeout(() => emit('loaded'), 1500)
</script>

<template>
  <div class="column window-width window-height items-center justify-center">
    <q-spinner size="3em" color="primary" />
  </div>
</template>
