<template>
  <v-layout class="h-100">
    <router-view></router-view>
    <Snackbar></Snackbar>
  </v-layout>
</template>

<script lang="ts" setup>
import 'spacegt/dist/style.css'
</script>

<style>
html {
  overflow: hidden;
}

html,
body,
#app {
  height: 100%;
}
</style>
