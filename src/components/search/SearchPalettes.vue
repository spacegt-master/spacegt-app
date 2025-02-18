<template>
  <v-dialog v-model="dialog" absolute contained max-width="450">
    <v-card>
      <v-text-field v-model="value" density="comfortable" hide-details label="Type a command or search..."
        prepend-inner-icon="mdi-magnify" autofocus />
      <v-list class="px-2" density="compact" item-props :items="items" :lines="false" max-height="350" nav slim>
        <template #item="{ props: itemProps }">
          <v-list-item v-bind="itemProps" link />
        </template>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, shallowRef, watchEffect } from 'vue'
import { useMagicKeys } from '@vueuse/core'

const { control, k } = useMagicKeys()

const dialog = shallowRef(false)

const value = ref()

const items = [
  {
    type: 'subheader',
    title: 'Suggestions',
  },
  {
    title: 'Calendar',
    prependIcon: 'mdi-calendar',
  },
  {
    title: 'Search emojis',
    prependIcon: 'mdi-emoticon-happy-outline',
  },
  {
    title: 'Launch',
    prependIcon: 'mdi-rocket',
  },
  { type: 'divider' },
  {
    type: 'subheader',
    title: 'Settings',
  },
  {
    title: 'Profile',
    prependIcon: 'mdi-account-outline',
  },
  {
    title: 'Notifications',
    prependIcon: 'mdi-bell-outline',
  },
  {
    title: 'Settings',
    prependIcon: 'mdi-cog-outline',
  },
]

watchEffect(() => {
  if (control.value && k.value) {
    dialog.value = true
  }
})
</script>

<style lang="scss" scoped></style>
