<template>
  <v-text-field v-model="value" class="border border-surface rounded-lg" density="compact" flat hide-details
    max-width="400" :min-width="focused && $vuetify.display.lgAndUp ? 400 : 300" persistent-placeholder
    placeholder="Search" prepend-inner-icon="mdi-magnify" rounded="lg" single-line variant="solo-filled"
    :class="{ 'mr-12': focused && $vuetify.display.lgAndUp }" @update:focused="(value) => focused = value">
    <template #append-inner>
      Ctrl+K
    </template>
  </v-text-field>
</template>

<script setup>
import { ref } from 'vue';

const focused = ref(false)

const value = ref()

</script>

<style lang="scss" scoped>
.v-text-field {
  transition: min-width 0.3s ease 0s, margin 0.3s ease 0s;
}
</style>
