<script setup lang="ts">
const dark = useDark()
</script>

<template>
  <q-layout dark view="hHh lpR fFf">
    <q-header dark>
      <q-toolbar dark>
        <q-btn to="/" icon="home" />
        <q-toolbar-title>App</q-toolbar-title>
        <q-btn
          @click="dark.toggle"
          :icon="dark.isActive ? 'dark_mode' : 'light_mode'"
        />
      </q-toolbar>
    </q-header>
    <q-page-container class="window-width window-height">
      <q-page dark class="full-width full-height">
        <slot />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
