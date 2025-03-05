<template>
  <div class="d-inline">
    <v-btn class="text-none" color="primary" prepend-icon="mdi-progress-check" :ripple="false" slim
      text="Checking for updates" variant="text" @click="CheckingForUpdates" />

    <v-dialog v-model="drawer" contained max-width="500" persistent>
      <v-card rounded="lg">
        <template #text>
          <div class="text-center pt-4">
            <v-avatar class="mb-4 pa-2" color="success" icon="mdi-check" size="x-large" variant="tonal">
              <v-img src="/logo.png"></v-img>
            </v-avatar>
            <div class="font-weight-bold">
              {{ app_name }} for {{ app_platform }} New Version
            </div>

            <div class="my-4">
              <v-chip color="secondary"> {{ currentVersion }} </v-chip>
              <v-icon icon="mdi-arrow-right-thin" class="mx-4"></v-icon>
              <v-chip color="primary"> {{ version }} </v-chip>
            </div>

            <div class="text-body-2 text-medium-emphasis mb-6">
              {{ notes }}
            </div>

            <v-window v-model="steps" direction="vertical">
              <v-window-item value="check">
                <div class="d-flex ga-4">
                  <v-btn border class="text-none flex-1-1-100" color="surface" text="Cancel" variant="flat"
                    @click="drawer = false" />

                  <v-btn class="text-none flex-1-1-100" color="primary" text="Update" variant="flat"
                    @click="update()" />
                </div>
              </v-window-item>

              <v-window-item value="download">
                <div class="mt-4 text-overline">Download</div>
                <v-progress-linear height="10" :model-value="progress"></v-progress-linear>
              </v-window-item>
              <v-window-item value="installed">
                <div class="mt-4 text-overline">Installed</div>
              </v-window-item>

            </v-window>
          </div>
        </template>
      </v-card>
    </v-dialog>

    <v-dialog v-model="drawer2" contained max-width="500">
      <v-card rounded="lg">
        <template #text>
          <div class="text-center pt-4">
            <v-avatar class="mb-4 pa-2" color="success" icon="mdi-check" size="x-large" variant="tonal">
              <v-img src="/logo.png"></v-img>
            </v-avatar>
            <div class="font-weight-bold mb-6">
              {{ app_name }} for {{ app_platform }}
            </div>

            <div class="text-body-2 text-medium-emphasis mb-6">
              It's the latest version
            </div>

            <div class="d-flex ga-4">
              <v-btn border class="text-none flex-1-1-100" color="surface" text="Cancel" variant="flat"
                @click="drawer2 = false" />
            </div>
          </div>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { app } from '@tauri-apps/api'
import { check } from '@tauri-apps/plugin-updater';
import { relaunch } from '@tauri-apps/plugin-process';
import { platform } from '@tauri-apps/plugin-os';
import { onMounted, shallowRef } from 'vue'
import { useChangeCase } from '@vueuse/integrations/useChangeCase';

const drawer = shallowRef(false)

const drawer2 = shallowRef(false)

const app_name = shallowRef()

const app_platform = shallowRef()

const version = shallowRef()

const currentVersion = shallowRef()

const notes = shallowRef()

const checkResult = shallowRef()

const steps = shallowRef('check') // download

const progress = shallowRef(0)

const CheckingForUpdates = async () => {
  checkResult.value = await check();
  console.log(checkResult.value)

  if (checkResult.value) {
    version.value = checkResult.value.version

    currentVersion.value = checkResult.value.currentVersion

    notes.value = checkResult.value.body

    drawer.value = true
  } else {
    drawer2.value = true
  }
}

const update = async () => {
  if (checkResult.value) {
    console.log(`found update ${checkResult.version} from ${checkResult.date} with notes ${checkResult.body}`);

    steps.value = 'download'

    let downloaded = 0;
    let contentLength = 0;

    // alternatively we could also call checkResult.value.download() and checkResult.value.install() separately
    await checkResult.value.downloadAndInstall((event) => {
      switch (event.event) {
        case 'Started':
          progress.value = 0

          contentLength = event.data.contentLength;
          console.log(`started downloading ${event.data.contentLength} bytes`);
          break;
        case 'Progress':
          downloaded += event.data.chunkLength;

          progress.value = Number.parseInt(downloaded / contentLength * 100)

          console.log(`downloaded ${downloaded} from ${contentLength}`);
          break;
        case 'Finished':
          progress.value = 0

          console.log('download finished');
          break;
      }
    });

    steps.value = 'installed'
    console.log('update installed');
    await relaunch();
  }

}

onMounted(async () => {
  app_name.value = useChangeCase(await app.getName(), 'capitalCase')
  app_platform.value = useChangeCase(platform(), 'capitalCase')
})

</script>

<style lang="scss" scoped></style>
