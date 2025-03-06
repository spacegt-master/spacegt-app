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
          <component v-for="item in navigationStore.defaultItems" :is="componentMatch(item.type)" v-bind="item">
            <!-- VListGroup -->
            <template v-if="item.type == 'VListGroup'" #activator="{ props: activatorProps }">
              <v-list-item v-bind="{ ...activatorProps, ...item.activator }" />
            </template>

            <component v-for="child in item.children" :is="VListItem" v-bind="child"></component>

          </component>
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

          <component class="ma-2" v-for="item in navigationStore.appendItems" :is="VListItem" v-bind="item">
          </component>
        </template>
      </v-navigation-drawer>

      <v-main>
        <div class="overflow-auto h-100">
          <router-view></router-view>
        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { useNavigationStore } from '@/stores/navigation'
import { VListGroup, VListItem, VListSubheader } from 'vuetify/components'

const navigationStore = useNavigationStore()

const shoppingCartsDrawer = ref(false)

const drawer = shallowRef(true)

const componentMatch = (type: string) => {
  switch (type) {
    case 'VListItem':
      return VListItem
    case 'VListSubheader':
      return VListItem
    case 'VListGroup':
      return VListGroup
  }
}
</script>

<style lang="scss" scoped></style>
