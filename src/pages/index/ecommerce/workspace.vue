<template>
  <v-layout>
    <v-main>
      <v-card v-if="['Men', 'Women'].includes(tab)" class="position-absolute w-100" rounded="b-lg" style="z-index: 10;">
        <div ref="desktopTarget" class="px-6" />
      </v-card>

      <v-container class="pa-md-12 pb-md-6" fluid>
        <div class="text-center mb-8">
          <h2 class="text-h5 text-md-h4 font-weight-bold mb-4">Workspace</h2>

          <p class="text-medium-emphasis w-100 w-md-50 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
            voluptatibus!
          </p>
        </div>
      </v-container>

      <v-expand-transition>
        <div v-if="filter">
          <v-container class="pa-md-6 border-b" fluid>
            <v-row>
              <v-defaults-provider :defaults="{
                VCheckboxBtn: {
                  density: 'comfortable',
                  color: 'primary',
                }
              }">
                <v-col cols="12" md="3" sm="6">
                  <v-label>Price</v-label>

                  <div class="py-4">
                    <v-checkbox-btn label="$0 to $25" />
                    <v-checkbox-btn label="$25 to $50" />
                    <v-checkbox-btn label="$50 to $75" />
                    <v-checkbox-btn label="$75+" />
                  </div>
                </v-col>

                <v-divider v-if="$vuetify.display.smAndUp" vertical />

                <v-col cols="12" md="3" sm="6">
                  <v-label>Rating</v-label>

                  <div class="py-4">
                    <v-checkbox-btn label="⭐️⭐️⭐️⭐️⭐️" />
                    <v-checkbox-btn label="⭐️⭐️⭐️⭐️" />
                    <v-checkbox-btn label="⭐️⭐️⭐️" />
                    <v-checkbox-btn label="⭐️⭐️" />
                    <v-checkbox-btn label="⭐️" />
                  </div>
                </v-col>

                <v-divider v-if="$vuetify.display.mdAndUp" vertical />

                <v-col cols="12" md="3" sm="6">
                  <v-label>Color</v-label>

                  <div class="py-4">
                    <v-checkbox-btn label="Red" />
                    <v-checkbox-btn label="Blue" />
                    <v-checkbox-btn label="Green" />
                    <v-checkbox-btn label="Yellow" />
                  </div>
                </v-col>

                <v-divider v-if="$vuetify.display.smAndUp" vertical />

                <v-col cols="12" md="3" sm="6">
                  <v-label>Size</v-label>

                  <div class="py-4">
                    <v-checkbox-btn label="Small" />
                    <v-checkbox-btn label="Medium" />
                    <v-checkbox-btn label="Large" />
                  </div>
                </v-col>
              </v-defaults-provider>
            </v-row>
          </v-container>
        </div>
      </v-expand-transition>

      <v-container class="pa-md-12 pa-6 bg-surface-light" fluid>
        <h3 class="text-h5 font-weight-bold mb-4">Featured collections</h3>

        <v-row>
          <v-col v-for="(item, i) in collections" :key="i" cols="12" md="4">
            <v-hover v-slot="{ isHovering, props }">
              <v-card class="mx-auto" v-bind="props" flat link :ripple="false" rounded="lg">
                <v-img block class="cursor-pointer" cover height="350" :src="item.img" />

                <v-overlay class="align-center justify-center" contained :model-value="isHovering" scrim="surface" />
              </v-card>
            </v-hover>

            <div class="text-body-2 text-medium-emphasis mt-3">{{ item.title }}</div>

            <div class="font-weight-bold text-body-1">{{ item.subtitle }}</div>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="pa-0" fluid>
        <v-row no-gutters>
          <v-col v-for="(item, i) in collections2" :key="i" cols="12" md="6">
            <v-card block flat :height="$vuetify.display.smAndDown ? 300 : 650" :image="item.img" :rounded="false">
              <template #image>
                <v-img cover gradient="to bottom, rgba(var(--v-theme-surface), .1), rgba(var(--v-theme-surface), 1)" />
              </template>

              <div class="position-absolute bottom-0 pa-md-12 pa-4 w-100">
                <h4 class="text-body-1 text-medium-emphasis">{{ item.title }}</h4>

                <p class="text-h5">{{ item.subtitle }}</p>

                <v-btn class="text-none mt-2" color="primary" flat :ripple="false" rounded="lg" text="Shop now" />
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="pa-md-12 pa-6 bg-surface-light" fluid>
        <h3 class="text-h5 font-weight-bold mb-4">Popular collections</h3>

        <v-row>
          <v-col v-for="(item, i) in collections" :key="i" cols="12" md="4">
            <v-hover v-slot="{ isHovering, props }">
              <v-card class="mx-auto" v-bind="props" flat link :ripple="false" rounded="lg">
                <v-img block class="cursor-pointer" cover height="350" :src="item.img" />

                <v-overlay class="align-center justify-center" contained :model-value="isHovering" scrim="surface" />
              </v-card>
            </v-hover>

            <div class="text-body-2 text-medium-emphasis mt-3">{{ item.title }}</div>

            <div class="font-weight-bold text-body-1">{{ item.subtitle }}</div>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="bg-surface-light" fluid>
        <v-row class="ma-n4">
          <v-col class="pa-0" cols="12" md="6">
            <v-img cover :height="$vuetify.display.mobile ? 300 : 700"
              src="https://images.unsplash.com/photo-1615914143778-1a1a6e50c5dd?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </v-col>

          <v-col class="d-flex flex-wrap align-content-center text-md-end pa-md-12 pa-6" cols="12" md="6">
            <h2 class="text-h4 text-md-h2 font-weight-bold mb-4">
              Stay focused and engaged
            </h2>

            <p class="text-body-1 mb-6 ms-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
              voluptatibus! Eaque cupiditate minima, at placeat totam!
            </p>

            <v-btn class="text-none ms-md-auto" color="primary" :ripple="false" rounded="lg" size="x-large"
              text="Shop Collection" />
          </v-col>
        </v-row>
      </v-container>

      <v-container class="pa-md-12 pa-6" fluid>
        <div class="d-flex justify-space-between align-center mb-4 flex-wrap">
          <p class="text-h5 font-weight-bold">All Categories</p>

          <v-btn append-icon="mdi-arrow-right" class="text-none px-0" color="primary" :ripple="false" size="small"
            text="Shop all categories" variant="plain" />
        </div>

        <v-responsive class="overflow-x-auto">
          <div class="d-flex ga-6 items-center w-100 py-2">
            <div v-for="(category, i) in categories" :key="i" class="text-center flex-fill">
              <v-card height="280" :image="category.img" link min-width="180" :ripple="false" rounded="lg">
                <template #image>
                  <v-img cover
                    gradient="to bottom, rgba(var(--v-theme-surface), .05), rgba(var(--v-theme-surface), .98) 90%" />
                </template>

                <div class="position-absolute bottom-0 pa-4 text-center w-100 on-surface">
                  <p class="text-body-1 font-weight-bold">{{ category.title }}</p>
                </div>
              </v-card>
            </div>
          </div>
        </v-responsive>
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
const filter = shallowRef(false)

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

const collections = [
  {
    title: 'Gaming computers',
    subtitle: 'For the best gaming experience',
    img: 'https://images.unsplash.com/photo-1598986646512-9330bcc4c0dc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Office furniture',
    subtitle: 'For the best office experience',
    img: 'https://images.unsplash.com/photo-1618506469810-282bef2b30b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Productivity',
    subtitle: 'For the best productivity experience',
    img: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Home Entertainment',
    subtitle: 'For the ultimate entertainment experience',
    img: 'https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Kitchen Appliances',
    subtitle: 'For a modern kitchen experience',
    img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Outdoor Gear',
    subtitle: 'For the best outdoor adventures',
    img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

const collections2 = [
  {
    title: 'Desks',
    subtitle: 'For your home office',
    img: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Mouses',
    subtitle: 'Friendly for offices',
    img: 'https://images.unsplash.com/photo-1617233082866-9d9c58674778?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

const categories = [
  {
    title: 'New',
    img: 'https://images.unsplash.com/photo-1689001164659-aa239f92853e?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Writing pads',
    img: 'https://images.unsplash.com/photo-1612367980327-7454a7276aa7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Mouses',
    img: 'https://images.unsplash.com/photo-1617233082866-9d9c58674778?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Desks',
    img: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Accessories',
    img: 'https://images.unsplash.com/photo-1678852524356-08188528aed9?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
