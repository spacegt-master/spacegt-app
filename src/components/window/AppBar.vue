<template>
  <v-app-bar data-tauri-drag-region class="ps-4" flat :border="transparent ? 'none' : 'b'"
    :class="{ 'bg-transparent': transparent }">
    <template #default v-if="!transparent">
      <v-app-bar-nav-icon v-if="$vuetify.display.smAndDown" @click="$emit('navSwitch')" />

      <v-app-bar-title v-if="$vuetify.display.mdAndUp">
        <logo></logo>
      </v-app-bar-title>
    </template>
    <template #default v-else>
      <slot></slot>
    </template>

    <template #append>
      <div class="d-flex ga-2 align-center" v-if="!transparent">
        <SearchFields></SearchFields>

        <v-btn color="medium-emphasis" icon="mdi-bell-outline" />

        <v-btn color="medium-emphasis" icon="mdi-cart-outline" @click="$emit('shoppingCartsSwitch')" />

        <v-divider class="align-self-center" length="24" vertical />

        <account-btn></account-btn>
      </div>

      <div class="d-flex ga-2 align-center">
        <ThemeSwitch></ThemeSwitch>

        <v-btn icon="mdi-window-minimize" rounded="lg" class="rounded-0" @click="minimize"></v-btn>

        <v-btn :icon="isMaximize ? 'mdi-window-restore' : 'mdi-window-maximize'" rounded="lg" class="rounded-0"
          @click="maximize"></v-btn>

        <v-btn icon="mdi-close" rounded="lg" class="rounded-0" @click="close"></v-btn>
      </div>
    </template>
  </v-app-bar>

</template>

<script setup>
import { useScreenMaximize } from '@/utils/screen';
import { Window } from '@tauri-apps/api/window';

defineProps({ transparent: { type: Boolean, default: false } })

const { isMaximize } = useScreenMaximize()

const appWindow = new Window('main');

const minimize = () => appWindow.minimize()

const maximize = () => appWindow.toggleMaximize()

const close = () => appWindow.close()
</script>

<style lang="scss" scoped>
.v-app-bar:deep(.v-toolbar__content) {
  pointer-events: none;
}

.v-app-bar-nav-icon,
.v-input,
.v-btn {
  pointer-events: all;
}
</style>
