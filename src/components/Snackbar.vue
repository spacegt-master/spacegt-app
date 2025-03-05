<template>
  <v-snackbar v-model="snackbarStore.snackbar" color="surface" contained location="top end" rounded="lg"
    text="You're link has been successfully uploaded to the cloud!" title="Link successfully saved"
    :timeout="snackbarStore.timeout" class="mt-16 pt-2">
    <template #text>
      <div class="d-flex align-start">
        <v-icon v-if="snackbarStore.type" :color="snackbarStore.type" :icon="`$${snackbarStore.type}`" start />
        <div>
          <strong v-if="snackbarStore.subtitle" class="d-inline-block text-subtitle-2 mb-1">
            {{ snackbarStore.subtitle }}
          </strong>
          <div>
            {{ snackbarStore.text }}
          </div>
        </div>
      </div>
    </template>
    <template #actions>
      <v-btn density="comfortable" icon="$close" size="small" @click="snackbarStore.snackbar = false" />
    </template>
  </v-snackbar>
</template>

<script setup>
import { useSnackbarStore } from '@/stores/snackbar';

const snackbarStore = useSnackbarStore()
</script>

<style lang="scss" scoped></style>
