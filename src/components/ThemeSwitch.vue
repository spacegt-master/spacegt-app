<template>
  <v-switch class="pr-4" v-model="themeStore.isDark" hide-details @change="themeStore.useSystemThemes = false">
    <template #label>
      <span class="text-overline">{{ themeStore.isDark ? 'Dark' : 'Light' }}</span>
    </template>
  </v-switch>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore()
</script>

<style scoped></style>
