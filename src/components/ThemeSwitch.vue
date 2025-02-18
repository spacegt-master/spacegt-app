<template>
  <v-switch v-model="themeStore.isDark" hide-details @change="themeStore.useSystemThemes = false">
    <template #label>
      <span class="text-overline">{{ themeStore.isDark ? 'Dark' : 'Light' }}</span>
    </template>
  </v-switch>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore()
</script>

<style scoped>
.v-switch {
  min-width: 100px;
}
</style>
