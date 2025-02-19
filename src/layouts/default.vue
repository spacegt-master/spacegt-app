<template>
  <v-app>
    <app-bar @nav-switch="drawer = !drawer"
      @shopping-carts-switch="shoppingCartsDrawer = !shoppingCartsDrawer"></app-bar>

    <ShoppingCarts v-model="shoppingCartsDrawer"></ShoppingCarts>

    <SearchPalettes></SearchPalettes>

    <v-layout class="mt-16">

      <v-navigation-drawer v-model="drawer">
        <template #prepend>
        </template>

        <v-list density="compact" nav slim>

          <v-list-item link prepend-icon="mdi-laptop" title="Home" to="/home" />

          <v-list-subheader>Ecommerce</v-list-subheader>

          <v-list-item link prepend-icon="mdi-laptop" title="Storefront" to="/ecommerce/storefront" />

          <v-list-subheader>User</v-list-subheader>

          <v-list-item link prepend-icon="mdi-laptop" title="Demo" to="/demo" />

          <v-list-item link prepend-icon="mdi-view-dashboard" title="Dashboard" />

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
          <v-card class="mx-4 mb-5 mt-2 d-none d-lg-block" color="indigo" flat rounded="lg">
            <v-card-title>Upgrade Pro</v-card-title>

            <v-card-subtitle>Get access to all features</v-card-subtitle>

            <v-card-actions>
              <v-btn color="white" to="/pricing">Get Pro</v-btn>
            </v-card-actions>
          </v-card>

          <v-divider />

          <v-list-item class="ma-2" link nav prepend-icon="mdi-cog-outline" title="Settings" to="/settings" />
        </template>
      </v-navigation-drawer>

      <v-main>
        <Snackbar></Snackbar>

        <div class="overflow-auto h-100">
          <router-view></router-view>
        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'

const shoppingCartsDrawer = ref(false)

const drawer = shallowRef(true)
</script>

<style lang="scss" scoped></style>
