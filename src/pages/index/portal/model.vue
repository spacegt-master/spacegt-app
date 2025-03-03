<template>
  <v-container class="pa-md-6" fluid>
    <h3 class="text-h5 font-weight-bold mb-4">Customer </h3>

    <v-row>
      <v-col v-for="(item, i) in products" :key="i" cols="12" md="3" sm="6">
        <v-hover v-slot="{ isHovering, props: hoverProps }">
          <v-card class="mx-auto" flat rounded="lg" v-bind="hoverProps">
            <v-img :aspect-ratio="4 / 5" block class="cursor-pointer" cover :src="item.img" />

            <v-overlay class="align-center justify-center" contained :model-value="isHovering" no-click-animation
              persistent scrim="surface">
              <v-btn class="text-none" :ripple="false" text="See more info" variant="flat" @click="dialog = true" />
            </v-overlay>
          </v-card>
        </v-hover>

        <div class="text-body-1 d-flex justify-space-between font-weight-bold mt-3">
          <p>{{ item.title }}</p>

          <p>${{ item.price }}</p>
        </div>

        <p class="text-medium-emphasis text-body-2">{{ item.subtitle }}</p>
      </v-col>
    </v-row>


    <v-dialog v-model="dialog" contained max-width="850">
      <v-card class="pa-4 pa-md-8 d-flex flex-row ga-8 flex-md-nowrap flex-wrap" rounded="lg">
        <v-img color="surface-light" cover max-height="400" rounded="lg" :src="item.img" width="400" />

        <div class="flex-shrink-1">
          <div class="d-flex justify-space-between align-center">
            <p class="text-h5 font-weight-bold">{{ item.title }}</p>

            <v-btn density="comfortable" icon="mdi-close" variant="text" @click="dialog = false" />
          </div>

          <div class="d-flex ga-4 align-center mb-4">
            <v-rating color="amber-darken-3" density="compact" model-value="4" readonly size="small" />
          </div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
            voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum
            unde voluptatem!
          </div>

          <div class="text-center mt-4">
            <v-btn class="text-none" rounded="lg" text="View full details" variant="text" to="/model-framework" />
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { shallowRef } from 'vue'

const dialog = shallowRef(false)

const item = {
  title: 'Developer backpack',
  subtitle: 'Travel',
  price: 240,
  img: 'https://images.unsplash.com/photo-1649813603207-854179e02af7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}

const selectedSize = shallowRef(1)
const sizes = [
  { name: 'XXS', available: false },
  { name: 'XS', available: true },
  { name: 'S', available: true },
  { name: 'M', available: true },
  { name: 'L', available: true },
  { name: 'XL', available: true },
  { name: '2XL', available: true },
]

const products = [
  {
    title: 'Shoes 1',
    subtitle: 'Fashsion',
    price: 35,
    img: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Shoes 2',
    subtitle: 'Nederland',
    price: 60,
    img: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Shoes 3',
    subtitle: 'Charcoal',
    price: 82,
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Shoes 4',
    subtitle: 'Iso Dots',
    price: 42,
    img: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Shoes 3',
    subtitle: 'Charcoal',
    price: 82,
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Shoes 4',
    subtitle: 'Iso Dots',
    price: 42,
    img: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]
</script>
