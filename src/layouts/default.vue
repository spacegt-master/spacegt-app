<template>
  <v-app>
    <app-bar @nav-switch="drawer = !drawer"
      @shopping-carts-switch="shoppingCartsDrawer = !shoppingCartsDrawer"></app-bar>

    <ShoppingCarts v-model="shoppingCartsDrawer"></ShoppingCarts>

    <SearchPalettes></SearchPalettes>

    <v-layout class="mt-16">

      <v-navigation-drawer v-model="drawer" :mobile="$vuetify.display.smAndDown">
        <template #prepend>
        </template>

        <v-list density="compact" nav slim>

          <v-list-item link color="primary" prepend-icon="mdi-home-outline" title="Home" to="/home" />

          <v-list-subheader>Ecommerce</v-list-subheader>

          <v-list-item link color="primary" prepend-icon="mdi-store-outline" title="Storefront" to="/ecommerce/storefront" />

          <v-list-item link color="primary" prepend-icon="mdi-sale-outline" title="Promo" to="/ecommerce/promo" />

          <v-list-item link color="primary" prepend-icon="mdi-shape-outline" title="Category" to="/ecommerce/category" />

          <v-list-item link color="primary" prepend-icon="mdi-clipboard-text-clock-outline" title="Order History"
            to="/ecommerce/order-history" />

          <v-list-subheader>Other</v-list-subheader>

          <v-list-item link prepend-icon="mdi-shield-alert-outline" title="404" to="/404" />

          <v-list-subheader>User</v-list-subheader>

          <v-list-group fluid>
            <template #activator="{ props: activatorProps }">
              <v-list-item v-bind="activatorProps" prepend-icon="mdi-account-circle" subtitle="Manage your account"
                title="Account" />
            </template>

            <v-list-item link color="primary" prepend-icon="mdi-circle-small" title="Downloads" />

            <v-list-item link color="primary" prepend-icon="mdi-circle-small" title="Subscriptions" />

            <v-list-item link color="primary" prepend-icon="mdi-circle-small" title="History" />
          </v-list-group>
        </v-list>

        <template #append>
          <v-card class="mx-4 mb-5 mt-2" color="indigo" flat rounded="lg">
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
