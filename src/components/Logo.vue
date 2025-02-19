<template>
  <div class="d-flex" style="width: 140px; align-items: center; margin-left: -6px;">
    <v-img src="/logo.png" style="width: 30px; height: 30px;"></v-img>
    <div class="subtitle " :class="[themeStore.isDark ? 'text-indigo-lighten-1' : 'text-indigo-darken-1']">pacegt</div>
  </div>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore()
</script>

<style lang="scss" scoped>
.subtitle {
  font-family: 'Russo One';
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  padding-top: 6px;
}
</style>
