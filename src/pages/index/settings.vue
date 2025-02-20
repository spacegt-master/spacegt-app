<template>

  <v-container class="px-6 py-6 mb-6" fluid>
    <h5 class="text-h6 mb-2 font-weight-medium">System</h5>

    <p class="text-body-2 text-medium-emphasis">This information will be displayed publicly so be careful what you
      share.</p>

    <v-divider class="my-6" />

    <!-- <div class="d-flex justify-space-between align-center">
      <v-row class="w-50" no-gutters>
        <v-col cols="12" md="6">
          <h5 class="text-subtitle-1 font-weight-medium ">Full name</h5>
        </v-col>

        <v-col cols="12" md="6">
          <p class="text-body-2 text-medium-emphasis">Tom Cook</p>
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

    <v-btn class="text-none" color="primary" prepend-icon="mdi-update" :ripple="false" slim text="Update"
      variant="text" />
  </v-container>


</template>

<script setup>
import { check } from '@tauri-apps/plugin-updater';
import { relaunch } from '@tauri-apps/plugin-process';
import { onMounted } from 'vue';

onMounted(async () => {
  const update = await check();
  console.log(update)
  if (update) {
    console.log(
      `found update ${update.version} from ${update.date} with notes ${update.body}`
    );
    let downloaded = 0;
    let contentLength = 0;
    // alternatively we could also call update.download() and update.install() separately
    await update.downloadAndInstall((event) => {
      switch (event.event) {
        case 'Started':
          contentLength = event.data.contentLength;
          console.log(`started downloading ${event.data.contentLength} bytes`);
          break;
        case 'Progress':
          downloaded += event.data.chunkLength;
          console.log(`downloaded ${downloaded} from ${contentLength}`);
          break;
        case 'Finished':
          console.log('download finished');
          break;
      }
    });

    console.log('update installed');
    await relaunch();
  }
})


</script>

<style lang="scss" scoped></style>
