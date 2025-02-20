<template>

  <v-container class="px-6 py-6 mb-6" fluid>
    <h5 class="text-h6 mb-2 font-weight-medium">System Settings</h5>

    <p class="text-body-2 text-medium-emphasis">System Settings cover performance optimization, security protection,
      personalization, device management and application management to help you use devices efficiently, safely and
      personally.</p>

    <v-divider class="my-6" />

    <div class="d-flex justify-space-between align-center">
      <v-row class="w-50" no-gutters>
        <v-col cols="12" md="6">
          <h5 class="text-subtitle-1 font-weight-medium ">Proxy</h5>
        </v-col>

        <v-col cols="12" md="6">
          <p class="text-body-2 text-medium-emphasis">No proxy used</p>
        </v-col>
      </v-row>

      <div class="d-flex justify-end align-center flex-grow-1">
        <v-btn class="text-none" color="primary" :ripple="false" slim text="Update" variant="text" />
      </div>
    </div>
    <!--
    <v-divider class="my-6" />

    <div class="d-flex justify-space-between align-center">
      <v-row class="w-50" no-gutters>
        <v-col cols="12" md="6">
          <h5 class="text-subtitle-1 font-weight-medium ">Email address</h5>
        </v-col>

        <v-col cols="12" md="6">
          <p class="text-body-2 text-medium-emphasis">tom.cook@example.com</p>
        </v-col>
      </v-row>

      <div class="d-flex justify-end align-center flex-grow-1">
        <v-btn class="text-none" color="primary" :ripple="false" slim text="Update" variant="text" />
      </div>
    </div>

    <v-divider class="my-6" />

    <div class="d-flex justify-space-between align-center">
      <v-row class="w-50" no-gutters>
        <v-col cols="12" md="6">
          <h5 class="text-subtitle-1 font-weight-medium ">Title</h5>
        </v-col>

        <v-col cols="12" md="6">
          <p class="text-body-2 text-medium-emphasis">Human Resources Manager</p>
        </v-col>
      </v-row>

      <div class="d-flex justify-end align-center flex-grow-1">
        <v-btn class="text-none" color="primary" :ripple="false" slim text="Update" variant="text" />
      </div>
    </div> -->

    <!-- <v-divider class="my-6" /> -->

  </v-container>
  <v-container class="px-6 py-6 mb-6" fluid>
    <h5 class="text-h6 mb-2 font-weight-medium">About Spacegt</h5>

    <p class="text-body-2 text-medium-emphasis">Current version: {{ version }}</p>

    <v-divider class="my-6" />

    <CheckingForUpdates></CheckingForUpdates>

    <v-btn class="text-none mx-1" color="primary" prepend-icon="mdi-card-account-mail-outline" :ripple="false" slim
      text="Contact" variant="text" to="/contact" />

    <v-btn class="text-none mx-1" color="primary" prepend-icon="mdi-information-outline" :ripple="false" slim
      text="About" variant="text" to="/about" />
  </v-container>


</template>

<script setup>
import CheckingForUpdates from '@/components/CheckingForUpdates.vue';
import { app } from '@tauri-apps/api'
import { onMounted, ref } from 'vue';

const version = ref()

onMounted(async () => {
  version.value = await app.getVersion()
})
</script>

<style lang="scss" scoped></style>
