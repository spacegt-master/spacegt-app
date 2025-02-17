<template>
  <v-layout>

    <v-main>
      <v-card v-if="['Men', 'Women'].includes(tab)" class="position-absolute w-100" rounded="b-lg" style="z-index: 10;">
        <div ref="desktopTarget" class="px-8" />
      </v-card>

      <v-container class="pa-md-12">
        <div class="text-center">
          <h2 class="text-h4 font-weight-bold mb-2">Order history</h2>

          <p class="text-medium-emphasis mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
            voluptatibus!
          </p>
        </div>

        <v-card border flat rounded="lg">
          <v-card-item>
            <div class="d-flex">
              <div>
                <p class="font-weight-medium" :class="$vuetify.display.smAndUp ? 'text-subtitle-1' : 'text-body-2'">
                  Order
                  number</p>

                <p class="font-weight-light text-body-2">UH1112316</p>
              </div>

              <div class="mx-1 mx-sm-8">
                <div v-show="$vuetify.display.smAndUp">
                  <p class="text-subtitle-1 font-weight-medium">Date placed</p>

                  <p class="font-weight-light text-body-2">Jul 6, 2021</p>
                </div>
              </div>

              <div>
                <p class="font-weight-medium" :class="$vuetify.display.smAndUp ? 'text-subtitle-1' : 'text-body-2'">
                  Total
                  amount</p>

                <p class="text-body-2">$160.00</p>
              </div>
            </div>

            <template #append>
              <v-defaults-provider v-if="$vuetify.display.mdAndUp" :defaults="{
                VBtn: {
                  variant: 'text',
                  border: true,
                  rounded: 'lg',
                },
              }">
                <v-btn class="text-none me-3" text="View Order" />

                <v-btn class="text-none" text="View Invoice" />
              </v-defaults-provider>

              <v-btn v-else icon :size="$vuetify.display.smAndUp ? 'default' : 'small'" variant="plain">
                <v-icon icon="mdi-menu" />

                <v-menu activator="parent" transition="scale-transition">
                  <v-list>
                    <v-list-item class="text-none" link title="View Order" />

                    <v-list-item class="text-none" link title="View Invoice" />
                  </v-list>
                </v-menu>
              </v-btn>
            </template>
          </v-card-item>

          <v-divider />

          <v-card-item v-for="(order, i) of orders" :key="order.id">
            <div class="d-flex">
              <v-img class="me-3" color="surface-light" cover :height="$vuetify.display.smAndUp ? 160 : 80"
                :max-width="$vuetify.display.smAndUp ? 160 : 80" rounded="lg" :src="order.product.image" width="100%" />

              <div>
                <div class="d-md-flex justify-space-between">
                  <p class="text-subtitle-1">{{ order.product.name }}</p>

                  <p class="text-subtitle-1 font-weight-bold">${{ order.product.price }}</p>
                </div>

                <p v-show="$vuetify.display.smAndUp" class="font-weight-light mt-4 text-body-2">{{
                  order.product.description
                }}</p>
              </div>
            </div>

            <div class="d-sm-flex justify-space-between mt-4">
              <div v-if="order.deliveredDate" class="d-flex align-center mb-4">
                <v-icon color="success" icon="mdi-check-circle" size="small" start />

                <p class="text-body-2">Delivered on {{ order.deliveredDate }}</p>
              </div>

              <div v-else class="d-flex align-center pt-2 mb-4">
                <v-icon color="primary" icon="mdi-information-outline" size="small" start />

                <p class="text-body-2">Not yet delivered</p>
              </div>

              <div class="d-flex justify-center ga-4 pa-4 pa-md-0">
                <v-defaults-provider :defaults="{
                  VBtn: {
                    variant: 'plain',
                    color: 'primary',
                    class: 'text-none px-0',
                    ripple: false,
                    size: 'small',
                  },
                }">
                  <v-btn text="View Product" />

                  <v-divider length="24" vertical />

                  <v-btn text="Buy again" to="/ecommerce/checkout" />
                </v-defaults-provider>
              </div>
            </div>

            <v-divider v-if="i !== orders.length - 1" class="my-2" />
          </v-card-item>
        </v-card>
      </v-container>

    </v-main>

    <Teleport v-if="teleportTarget" :to="teleportTarget">
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="Women">
          <v-row class="my-4">
            <v-col cols="12" lg="2" order="3">
              <p class="font-weight-bold text-body-1">Clothing</p>
              <div v-for="item in clothing.women" :key="item">
                <v-btn class="px-0 text-none justify-start" :ripple="false" :text="item" variant="plain" />
              </div>
            </v-col>

            <v-col cols="12" lg="2" order="4">
              <p class="font-weight-bold text-body-1">Accessories</p>
              <div v-for="item in accessories.women" :key="item">
                <v-btn class="px-0 text-none justify-start" :ripple="false" :text="item" variant="plain" />
              </div>
            </v-col>

            <v-col cols="12" lg="2" order="5">
              <p class="font-weight-bold text-body-1">Brands</p>
              <div v-for="item in brands.women" :key="item">
                <v-btn class="px-0 text-none justify-start" :ripple="false" :text="item" variant="plain" />
              </div>
            </v-col>

            <v-col v-for="(category, i) in links.women" :key="i" cols="6" lg="3" :order="i + 1" :order-lg="6 + i">
              <v-hover v-slot="{ isHovering, props: hoverProps }">
                <v-card class="mx-auto" flat link :ripple="false" rounded="lg" v-bind="hoverProps">
                  <v-img :aspect-ratio="1 / 1" block cover :src="category.img" />

                  <v-overlay class="align-center justify-center" contained :model-value="isHovering" no-click-animation
                    persistent scrim="surface" />
                </v-card>
              </v-hover>
              <p class="text-body-1 mt-2">{{ category.title }}</p>
              <p class="text-body-2 text-medium-emphasis">Shop now</p>
            </v-col>
          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item value="Men">
          <v-row class="my-4">
            <v-col cols="12" lg="2" order="3">
              <p class="font-weight-bold text-body-1">Clothing</p>
              <div v-for="item in clothing.men" :key="item">
                <v-btn class="px-0 text-none justify-start" :ripple="false" :text="item" variant="plain" />
              </div>
            </v-col>

            <v-col cols="12" lg="2" order="4">
              <p class="font-weight-bold text-body-1">Accessories</p>
              <div v-for="item in accessories.men" :key="item">
                <v-btn class="px-0 text-none justify-start" :ripple="false" :text="item" variant="plain" />
              </div>
            </v-col>

            <v-col cols="12" lg="2" order="5">
              <p class="font-weight-bold text-body-1">Brands</p>
              <div v-for="item in brands.men" :key="item">
                <v-btn class="px-0 text-none justify-start" :ripple="false" :text="item" variant="plain" />
              </div>
            </v-col>

            <v-col v-for="(category, i) in links.men" :key="i" cols="6" lg="3" :order="i + 1" :order-lg="6 + i">
              <v-hover v-slot="{ isHovering, props: hoverProps }">
                <v-card class="mx-auto" flat link :ripple="false" rounded="lg" v-bind="hoverProps">
                  <v-img :aspect-ratio="1 / 1" block cover :src="category.img" />

                  <v-overlay class="align-center justify-center" contained :model-value="isHovering" no-click-animation
                    persistent scrim="surface" />
                </v-card>
              </v-hover>
              <p class="text-body-1 mt-2">{{ category.title }}</p>
              <p class="text-body-2 text-medium-emphasis">Shop now</p>
            </v-col>
          </v-row>
        </v-tabs-window-item>
      </v-tabs-window>
    </Teleport>
  </v-layout>
</template>

<script setup>
import { computed, ref, shallowRef, watch } from 'vue'
import { useDisplay } from 'vuetify'

const display = useDisplay()

const mobileTarget = ref()
const desktopTarget = ref()
const teleportTarget = computed(() =>
  display.mobile.value ? mobileTarget.value : desktopTarget.value
)
const drawer = shallowRef(false)

const tab = ref()

watch(display.mobile, val => {
  if (!val) drawer.value = false
})

const items = [
  { text: 'Women' },
  { text: 'Men' },
  { text: 'Company' },
  { text: 'Blog' },
  { text: 'Contact' },
]

const clothing = {
  women: ['Skirts', 'Blouses', 'Leggings', 'Shorts', 'Cardigans', 'Blazers', 'Athleisure', 'Casual Wear'],
  men: ['Hoodies', 'Shorts', 'Cardigans', 'Blazers', 'Athleisure', 'Casual Wear', 'Formal Wear'],
}

const accessories = {
  women: ['Earrings', 'Necklaces', 'Bracelets', 'Scarves', 'Handbags', 'Hair Accessories'],
  men: ['Cufflinks', 'Tie Clips', 'Backpacks', 'Gloves', 'Socks', 'Keychains'],
}

const brands = {
  women: ['Urban Chic', 'Elegance', 'Vintage Vibes', 'Modern Muse', 'Boho Beauty'],
  men: ['Bold Move', 'Classic Cuts', 'Urban Chic', 'Elegance'],
}

const links = {
  women: [
    {
      title: 'Example Women 1',
      img: 'https://images.unsplash.com/photo-1602810319428-019690571b5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Example Women 2',
      img: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],
  men: [
    {
      title: 'Example Men 1',
      img: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Example Men 2',
      img: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],
}

const orders = [
  {
    id: 1,
    product: {
      sku: '110075',
      name: 'Compact Travel Pack',
      description: 'Ideal for frequent travelers, the Compact Travel Pack offers enough space for your essentials while maintaining a sleek and lightweight design. Carry it comfortably as a backpack or a crossbody bag.',
      price: 85.00,
      image: 'https://images.unsplash.com/photo-1536584754829-12214d404f32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    deliveredDate: null,
  },
  {
    id: 2,
    product: {
      sku: '110076',
      name: 'Urban Daypack',
      description: 'Perfect for urban explorers, the Urban Daypack is designed for everyday use with multiple compartments to keep your items organized. Durable and stylish, it’s great for commuting and casual outings.',
      price: 75.00,
      image: 'https://images.unsplash.com/photo-1684086875755-4b0fed787c86?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    deliveredDate: '04/12/2024',
  },
  {
    id: 3,
    product: {
      sku: '110077',
      name: 'Adventurer’s Tote',
      description: 'Built for the adventurous spirit, the Adventurer’s Tote is crafted from high-quality materials to withstand any journey. Its spacious interior and versatile carry options make it a must-have for explorers.',
      price: 95.00,
      image: 'https://images.unsplash.com/photo-1621466550398-ac8062907657?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    deliveredDate: '04/12/2024',
  },
]

const icons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
]

const sections = [
  {
    title: 'Solutions',
    items: [
      'Marketing',
      'Analytics',
      'Commerce',
      'Insights',
    ],
  },
  {
    title: 'Support',
    items: [
      'Pricing',
      'Documentation',
      'Guides',
      'API Status',
    ],
  },
  {
    title: 'Company',
    items: [
      'About',
      'Blog',
      'Jobs',
      'Press',
      'Partners',
    ],
  },
  {
    title: 'Legal',
    items: [
      'Claim',
      'Privacy',
      'Terms',
    ],
  },
]
</script>

<style lang="scss" scoped></style>
