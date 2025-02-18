<template>
  <div class="w-100 h-100" style="background: rgb(var(--v-theme-background));">
    <img src="/logo.gif" style="
        width: 240px;
        height: 240px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      " :style="{ 'filter': themeStore.isDark ? 'brightness(0.93) invert(1)' : 'none' }" />
  </div>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore()
</script>

<style lang="scss" scoped></style>
