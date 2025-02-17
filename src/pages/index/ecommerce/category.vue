<template>
  <v-layout>
    <v-main>
      <v-container class=" pb-0 px-md-6" fluid>
        <div class="mt-4 pb-6">
          <h2 class="text-h5 text-md-h4 font-weight-bold mb-4">New Arrivals</h2>
          <p class="text-medium-emphasis w-100 mx-auto">
            Checkout out the latest release of Basic Tees, new and improved with four openings!
          </p>
        </div>
        <v-divider />
      </v-container>

      <v-container class="py-md-6 px-md-6" fluid>
        <v-row class="mb-12" no-gutters>
          <v-col class="pr-6" cols="12" md="3">
            <v-btn v-if="display.smAndDown.value" class="text-none px-0 mb-6" color="medium-emphasis"
              prepend-icon="mdi-filter" :ripple="false" size="small" text="Filters" variant="plain"
              @click="filterDrawer = !filterDrawer" />

            <div v-if="display.mdAndUp.value">
              <h2 class="text-subtitle-1 text-high-emphasis mb-3">Color</h2>
              <v-checkbox-btn v-for="(color, i) in ['White', 'Beige', 'Blue', 'Brown', 'Green', 'Purple']" :key="i"
                color="primary" density="comfortable" :label="color" />

              <v-divider class="my-3" />

              <h2 class="text-subtitle-1 text-high-emphasis mb-4">Category</h2>

              <v-checkbox-btn
                v-for="(color, i) in ['All New Arrivals', 'Tees', 'Crewnecks', 'Sweatshirts', 'Pants & Shorts']"
                :key="i" color="primary" density="comfortable" :label="color" />

              <v-divider class="my-3" />

              <h2 class="text-subtitle-1 text-high-emphasis mb-4">Sizes</h2>

              <v-checkbox-btn v-for="(color, i) in ['XS', 'S', 'M', 'L', 'XL', '2XL']" :key="i" color="primary"
                density="comfortable" :label="color" />
            </div>
          </v-col>

          <v-col cols="12" md="9">
            <v-row>
              <v-col v-for="(item, i) in products" :key="i" cols="12" md="4" sm="6">
                <v-card border flat rounded="lg" to="/ecommerce/product">
                  <v-hover v-slot="{ isHovering, props: hoverProps }">
                    <v-card class="mx-auto" v-bind="hoverProps" flat link :ripple="false" rounded="b-0">
                      <v-img :aspect-ratio="1 / 1" block cover :src="item.img" />

                      <v-overlay class="align-center justify-center" contained :model-value="isHovering" persistent
                        scrim="surface" />
                    </v-card>
                  </v-hover>

                  <div class="pa-3">
                    <p class="text-body-1">{{ item.title }}</p>

                    <p class="text-caption font-italic">{{ item.description }}</p>

                    <p class="text-body-2 text-medium-emphasis mt-1">{{ item.subtitle }}</p>

                    <p class="font-weight-bold text-body-2 mt-1">${{ item.price }}</p>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-divider />
      </v-container>

    </v-main>

    <Teleport v-if="teleportTarget" :to="teleportTarget">
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="Women">
          <v-row class="my-4">
            <v-col v-for="(each, i) in links" :key="i" cols="12" lg="3">
              <p class="font-weight-bold text-body-1">{{ each.title }}</p>
              <div v-for="(item) in each.items.women" :key="item">
                <v-btn class="px-0 text-none justify-start" :ripple="false" :text="item" variant="plain" />
              </div>
            </v-col>
          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item value="Men">
          <v-row class="my-4">
            <v-col v-for="(each, i) in links" :key="i" cols="12" lg="3">
              <p class="font-weight-bold text-body-1">{{ each.title }}</p>
              <div v-for="(item) in each.items.men" :key="item">
                <v-btn class="px-0 text-none justify-start" :ripple="false" :text="item" variant="plain" />
              </div>
            </v-col>
          </v-row>
        </v-tabs-window-item>
      </v-tabs-window>
    </Teleport>

    <Teleport v-if="filterMobileTarget" :to="filterMobileTarget">
      <div>
        <v-expansion-panels :bg-color="$vuetify.display.lgAndUp ? 'background' : 'surface'" flat hoverable multiple
          static variant="accordion">
          <v-expansion-panel :ripple="false">
            <!-- replace style with min-height after v3.7 -->
            <v-expansion-panel-title class="px-2" style="min-height: 40px;">
              <div class="text-body-2 text-high-emphasis">Color</div>
            </v-expansion-panel-title>

            <v-expansion-panel-text>
              <div class="ms-n4">
                <v-checkbox-btn v-for="(color, i) in ['White', 'Beige', 'Blue', 'Brown', 'Green', 'Purple']" :key="i"
                  color="primary" density="comfortable" :label="color" />
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-divider class="my-2" />

          <v-expansion-panel :ripple="false">
            <!-- replace style with min-height after v3.7 -->
            <v-expansion-panel-title class="px-2" style="min-height: 40px;">
              <div class="text-body-2 text-high-emphasis">Category</div>
            </v-expansion-panel-title>

            <v-expansion-panel-text>
              <div class="ms-n4">
                <v-checkbox-btn
                  v-for="(category, i) in ['All New Arrivals', 'Tees', 'Crewnecks', 'Sweatshirts', 'Pants & Shorts']"
                  :key="i" color="primary" density="comfortable" :label="category" />
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>

          <v-divider class="my-2" />

          <v-expansion-panel :ripple="false">
            <!-- replace style with min-height after v3.7 -->
            <v-expansion-panel-title class="px-2" style="min-height: 40px;">
              <div class="text-body-2 text-high-emphasis">Sizes</div>
            </v-expansion-panel-title>

            <v-expansion-panel-text>
              <div class="ms-n4">
                <v-checkbox-btn v-for="(size, i) in ['XS', 'S', 'M', 'L', 'XL', '2XL']" :key="i" color="primary"
                  density="comfortable" :label="size" />
              </div>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </Teleport>
  </v-layout>
</template>

<script setup>
import { computed, ref, shallowRef, watch } from 'vue'
import { useDisplay } from 'vuetify'

const display = useDisplay()

const mobileTarget = ref()
const desktopTarget = ref()
const teleportTarget = computed(() => display.mobile.value ? mobileTarget.value : desktopTarget.value)
const filterMobileTarget = ref()

const drawer = shallowRef(false)
const filterDrawer = shallowRef(false)

const tab = ref()

watch(display.mobile, val => {
  if (!val) drawer.value = false
})

const items = [
  { text: 'Women' },
  { text: 'Men' },
  { text: 'Company' },
  { text: 'Blog' },
]

const links = [
  {
    title: 'Clothing',
    items: {
      women: ['Skirts', 'Blouses', 'Leggings', 'Shorts', 'Cardigans', 'Casual Wear'],
      men: ['Hoodies', 'Shorts', 'Blazers', 'Cardigans', 'Athleisure', 'Formal Wear'],
    },
  },
  {
    title: 'Accessories',
    items: {
      women: ['Earrings', 'Necklaces', 'Bracelets', 'Scarves', 'Handbags', 'Hair Accessories'],
      men: ['Cufflinks', 'Tie Clips', 'Backpacks', 'Gloves', 'Socks', 'Keychains'],
    },
  },
  {
    title: 'Collection',
    items: {
      women: ['Must Haves', 'Essentials', 'Trending Now', 'Clearance'],
      men: ['Must Haves', 'Essentials', 'Trending Now', 'Clearance'],
    },
  },
  {
    title: 'Brands',
    items: {
      women: ['Urban Chic', 'Elegance', 'Vintage Vibes', 'Modern Muse', 'Boho Beauty'],
      men: ['Bold Move', 'Classic Cuts', 'Urban Chic', 'Elegance'],
    },
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

const products = [
  {
    title: 'Shirt 1',
    subtitle: 'Fashsion',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!',
    price: 94,
    img: 'https://images.unsplash.com/photo-1602810319428-019690571b5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Shirt 2',
    subtitle: 'Nederland',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!',
    price: 80,
    img: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Shirt 3',
    subtitle: 'Charcoal',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!',
    price: 72,
    img: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Shirt 4',
    subtitle: 'Iso Dots',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!',
    price: 64,
    img: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Shirt 5',
    subtitle: 'Brush',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!',
    price: 62,
    img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Shirt 6',
    subtitle: 'Max',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!',
    price: 130,
    img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]
</script>

<style lang="scss" scoped></style>
