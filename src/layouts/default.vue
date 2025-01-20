<template>
  <v-app>
    <system-bar></system-bar>
    <v-layout class="mt-8">
      <v-navigation-drawer v-model="drawer">
        <template #prepend>
        </template>

        <v-list density="compact" nav slim>
          <v-list-subheader>User</v-list-subheader>

          <v-list-item active link prepend-icon="mdi-view-dashboard" title="Dashboard" />

          <v-list-group fluid>
            <template #activator="{ props: activatorProps }">
              <v-list-item v-bind="activatorProps" prepend-icon="mdi-account-circle" subtitle="Manage your account"
                title="Account" />
            </template>

            <v-list-item link prepend-icon="mdi-circle-small" title="Downloads" />

            <v-list-item link prepend-icon="mdi-circle-small" title="Subscriptions" />

            <v-list-item link prepend-icon="mdi-circle-small" title="History" />
          </v-list-group>

          <v-list-subheader>Social</v-list-subheader>

          <v-list-item link prepend-icon="mdi-account-group" title="Friends">
            <template #append>
              <v-badge content="39" inline />
            </template>
          </v-list-item>

          <v-list-item link prepend-icon="mdi-bell-badge" title="Notifications" />

          <v-list-subheader>Commerce</v-list-subheader>

          <v-list-item link prepend-icon="mdi-currency-usd" title="Sales" />

          <v-list-item link prepend-icon="mdi-trending-up" title="Projections" />
        </v-list>

        <template #append>
          <v-divider />
          <v-list-item class="ma-2" link nav prepend-icon="mdi-cog-outline" title="Settings" to="/settings" />
        </template>
      </v-navigation-drawer>

      <v-app-bar :elevation="2" title="Application" density="comfortable">
        <template #prepend>
          <v-app-bar-nav-icon scroll-behavior="collapse" density="comfortable" @click="drawer = !drawer" />
        </template>
        <template #append>
          <v-btn color="medium-emphasis" icon="mdi-bell-outline" density="comfortable" />

          <v-divider class="mx-4 align-self-center" length="40%" vertical />

          <v-btn class="text-none me-1 px-3" height="42" slim>
            <template #prepend>
              <v-avatar color="surface-light" image="https://cdn.vuetifyjs.com/images/john.png" size="32" start />
            </template>

            <span class="hidden-sm-and-down">John Leider</span>

            <v-menu activator="parent">
              <v-list density="compact" nav>
                <v-list-item append-icon="mdi-cog-outline" link title="Settings" />

                <v-list-item append-icon="mdi-logout" link title="Logout" to="/login" />
              </v-list>
            </v-menu>

            <template #append>
              <v-icon color="medium-emphasis" icon="mdi-chevron-down" />
            </template>
          </v-btn>
        </template>
      </v-app-bar>

      <v-main class="overflow-auto">
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { ref, shallowRef } from 'vue'

const drawer = shallowRef(true)
</script>

<style lang="scss" scoped></style>
