<template>
  <v-system-bar window data-tauri-drag-region>
    <v-icon class="me-2" icon="mdi-message"></v-icon>

    <span>10 unread messages</span>

    <v-spacer></v-spacer>

    <v-btn icon="mdi-window-minimize" variant="text" size="x-small" class="rounded-0" @click="minimize"></v-btn>

    <v-btn :icon="isMaximize ? 'mdi-window-restore' : 'mdi-window-maximize'" variant="text" size="x-small" class="rounded-0"
      @click="maximize"></v-btn>

    <v-btn icon="mdi-close" variant="text" size="x-small" class="rounded-0" @click="close"></v-btn>
  </v-system-bar>
</template>

<script setup>
import { useScreenMaximize } from '@/utils/screen';
import { Window } from '@tauri-apps/api/window';

const { isMaximize } = useScreenMaximize()

const appWindow = new Window('main');

const minimize = () => appWindow.minimize()

const maximize = () => appWindow.toggleMaximize()

const close = () => appWindow.close()

</script>

<style lang="scss" scoped></style>
