<template>
  <v-layout>
    <v-main>
      <v-card v-if="['Men', 'Women'].includes(tab)" class="position-absolute w-100" rounded="b-lg" style="z-index: 10;">
        <div ref="desktopTarget" class="px-6" />
      </v-card>

      <v-img content-class="d-flex align-center justify-center flex-column ga-8" cover
        gradient="to top, rgba(var(--v-theme-surface-variant),.8), rgba(var(--v-theme-surface-variant),.8)" height="500"
        src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <h2 class="text-h4 text-md-h2 font-weight-bold on-surface-variant">
          Special Event
        </h2>

        <v-btn class="text-none" color="primary" :ripple="false" rounded="lg" size="x-large" text="Shop Collection" />
      </v-img>

      <v-container class="pa-md-00 mb-16" style="margin-top: -6rem;">
        <v-row justify="center">
          <v-col v-for="(promo, i) in promos" :key="i" cols="12" lg="4" sm="6">
            <v-card class="mx-auto" color="surface" elevation="4" height="470" :image="promo.image" link max-width="384"
              :ripple="false" rounded="lg">
              <template #image>
                <v-img gradient="to top, rgba(var(--v-theme-surface),0) 10%, rgba(var(--v-theme-surface),.8)" />
              </template>

              <template #actions>
                <div class="pa-4 text-high-emphasis">
                  <div class="text-body-2 mb-1">
                    Shop collection
                  </div>

                  <div class="text-subtitle-1 font-weight-bold">{{ promo.title }}</div>
                </div>
              </template>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-divider />

      <v-container class="pa-md-12" fluid>
        <v-row>
          <v-col cols="12" md="6">
            <v-responsive class="mb-8 mb-md-12" max-width="600">
              <p class="font-weight-medium opacity-60 mb-1">Productivity</p>

              <h2 class="font-weight-bold text-h4 mb-4">Writing made easy</h2>

              <p class="text-body-1 text-medium-emphasis">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua. Anim amet fugiat veniam occaecat fugiat aliqua.
              </p>
            </v-responsive>

            <v-row>
              <v-col v-for="(spec, i) in specs" :key="i" cols="12" sm="6">
                <div class="py-4 border-t">
                  <strong>{{ spec.label }}</strong>

                  <p class="text-body-2 text-medium-emphasis">{{ spec.value }}</p>
                </div>
              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="6">
            <v-row>
              <v-col v-for="(src, i) in images" :key="i" cols="12" sm="6">
                <v-img class="mb-4" color="surface-light" height="250" rounded="lg" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <v-divider />

      <v-container class="bg-surface-light" fluid>
        <v-row class="ma-n4">
          <v-col class="d-flex flex-wrap align-content-center pa-md-12 pa-6" cols="12" md="6">
            <h2 class="text-h4 text-md-h2 font-weight-bold mb-4">
              Stay focused and engaged
            </h2>

            <p class="text-body-1 mb-6 ms-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
              voluptatibus! Eaque cupiditate minima, at placeat totam!
            </p>

            <v-btn class="text-none" color="primary" :ripple="false" rounded="lg" size="x-large"
              text="Shop Collection" />
          </v-col>

          <v-col class="pa-0" cols="12" md="6">
            <v-img cover gradient="to top, rgba(var(--v-theme-surface),.8), rgba(var(--v-theme-surface),.8)"
              :height="$vuetify.display.mobile ? 300 : 700"
              src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </v-col>
        </v-row>
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

const promos = [
  {
    title: 'T-shirts',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Accessories',
    image: 'https://images.unsplash.com/photo-1489769002049-ccd828976a6c?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

const images = [{}, {}, {}, {}]

const specs = [
  {
    label: 'Manufacturer',
    value: 'Apple',
  },
  {
    label: 'Material',
    value: 'High-quality Aluminum that is both lightweight and durable, providing a sleek finish and robust protection.',
  },
  {
    label: 'Weight',
    value: 'Approximately 1.2 lbs, ensuring a portable and easy-to-carry device without compromising on performance.',
  },
  {
    label: 'Warranty',
    value: 'Comprehensive 1 Year warranty covering hardware repairs and service, ensuring peace of mind and reliability.',
  },
  {
    label: 'Condition',
    value: 'New',
  },
  {
    label: 'Color',
    value: 'Space Gray',
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
