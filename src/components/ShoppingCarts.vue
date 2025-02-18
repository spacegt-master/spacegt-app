<template>
  <v-navigation-drawer v-model="drawer" location="end" temporary width="400">
    <v-card flat tile title="Shopping cart">
      <template #append>
        <v-btn color="disabled" density="comfortable" icon="$close" variant="text" @click="drawer = false" />
      </template>

      <template #text>
        <div class="py-4" />

        <template v-for="(item, i) in items" :key="i">
          <v-divider v-if="i !== 0" class="my-4" />

          <div class="d-flex">
            <v-img class="border" color="surface-light" height="88" max-width="88" rounded="lg" width="88" />

            <v-list-item class="flex-fill pe-0" :subtitle="item.variant">
              <template #title>
                <div class="d-flex align-center justify-space-between text-subtitle-1 font-weight-bold">
                  <div>{{ item.title }}</div>

                  <div class="pe-2">{{ item.price }}</div>
                </div>
              </template>

              <div class="pt-3 d-flex align-center justify-space-between">
                <div>Qty {{ item.qty }}</div>

                <v-btn class="text-none" size="small" slim text="Remove" variant="plain" />
              </div>
            </v-list-item>
          </div>
        </template>
      </template>
    </v-card>

    <template #append>
      <v-divider />

      <v-list-item lines="two" subtitle="Shipping and taxes calculated at checkout">
        <template #title>
          <div class="d-flex align-center justify-space-between">
            <strong>Subtotal</strong>

            <strong>$732.00</strong>
          </div>
        </template>
      </v-list-item>

      <div class="pa-4">
        <v-btn block class="text-none mb-4" color="primary" flat height="50" rounded="lg" text="Checkout" to="/ecommerce/checkout" />

        <v-btn block class="text-none" color="primary" rounded="lg" text="Continue shopping" variant="plain" />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { shallowRef, watch } from 'vue'

const items = [
  {
    title: 'Developer Backpack',
    price: '$290.00',
    variant: 'Color: Black',
    qty: 1,
  },
  {
    title: 'Designer Backpack',
    price: '$152.00',
    variant: 'Color: Blue',
    qty: 1,
  },
  {
    title: 'Developer Backpack',
    price: '$290.00',
    variant: 'Color: Pink',
    qty: 1,
  },
]

const drawer = defineModel()

</script>

<style lang="scss" scoped></style>
