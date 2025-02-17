<template>
  <v-layout>
    <v-app-bar border="b" flat>
      <v-spacer />

      <v-tabs v-model="tab" color="primary" :mandatory="false">
        <v-tab v-for="(item, i) in items" :key="i" v-bind="item" class="text-none" :value="item.text" />
        <v-tab class="text-none" text="Promo" to="/ecommerce/promo" />
        <v-tab class="text-none" text="Order History" to="/ecommerce/order-history" />
      </v-tabs>

      <v-spacer />
    </v-app-bar>


    <v-main>
      <v-card v-if="['Men', 'Women'].includes(tab)" class="position-absolute w-100" rounded="b-lg" style="z-index: 10;">
        <div ref="desktopTarget" class="px-8" />
      </v-card>

      <!-- Start Hero -->
      <v-img color="surface" cover
        gradient="to bottom, rgba(var(--v-theme-surface),.8), rgba(var(--v-theme-surface),.8)" height="700"
        src="https://images.unsplash.com/photo-1492138786289-d35ea832da43?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <v-container class="d-flex align-center h-100 justify-center pa-md-12 flex-column text-center">
          <h2 class="text-h4 text-md-h2 font-weight-bold mb-4">
            Shop our latest products
          </h2>

          <p class="text-body-1 w-100 w-md-66 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
            voluptatibus!
            Eaque cupiditate minima, at placeat totam!
          </p>

          <v-btn class="text-none" :ripple="false" rounded="lg" size="x-large" text="Shop latest products"
            to="/ecommerce/category" />
        </v-container>
      </v-img>
      <!-- End Hero -->

      <!-- Start Featured collections -->
      <v-container class="pa-md-12 pa-6 bg-surface-light" fluid>
        <h3 class="text-h5 font-weight-bold mb-4">Featured collections</h3>

        <v-row>
          <v-col v-for="(item, i) in collections" :key="i" cols="12" md="4">
            <v-hover v-slot="{ isHovering, props }">
              <v-card v-bind="props" class="mx-auto" flat link :ripple="false" rounded="lg">
                <v-img block class="cursor-pointer" cover height="350" :src="item.img" />

                <v-overlay class="align-center justify-center" contained :model-value="isHovering" scrim="surface" />
              </v-card>
            </v-hover>

            <div class="text-body-2 text-medium-emphasis mt-3">{{ item.title }}</div>

            <div class="font-weight-bold text-body-1">{{ item.subtitle }}</div>
          </v-col>
        </v-row>
      </v-container>
      <!-- End Featured collections -->

      <!-- Start Shop by Category -->
      <v-container class="pa-md-12 pa-6" fluid>
        <div class="d-flex justify-space-between align-center mb-4 flex-wrap">
          <p class="text-h5 font-weight-bold">Shop by Category</p>

          <v-btn append-icon="mdi-arrow-right" class="text-none px-0" color="primary" :ripple="false" size="small"
            text="Shop the collection" variant="plain" />
        </div>

        <v-responsive class="overflow-x-auto">
          <div class="d-flex ga-6 items-center w-100 py-2">
            <div v-for="(category, i) in categories" :key="i" class="text-center flex-fill">
              <v-card height="280" :image="category.img" link min-width="180" :ripple="false" rounded="lg">
                <template #image>
                  <v-img cover
                    gradient="to bottom, rgba(var(--v-theme-surface), .1), rgba(var(--v-theme-surface), .98) 80%" />
                </template>

                <div class="position-absolute bottom-0 pa-4 text-center w-100 on-surface">
                  <p class="text-body-1 font-weight-bold">{{ category.title }}</p>
                </div>
              </v-card>
            </div>
          </div>
        </v-responsive>
      </v-container>
      <!-- End Shop by Category -->

      <!-- Start Clean up workspace -->
      <v-container class="pa-md-12" fluid>
        <v-img color="surface" cover
          gradient="to bottom, rgba(var(--v-theme-surface),.8), rgba(var(--v-theme-surface),.8)" height="500"
          rounded="lg"
          src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
          <v-container class="d-flex align-center h-100 justify-center pa-md-12 flex-column text-center">
            <h2 class="text-h4 font-weight-black mb-4">
              Clean up your workspace
            </h2>

            <p class="text-body-1 w-100 w-md-66 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
              voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum
              unde
              voluptatem!
            </p>

            <v-btn class="text-none" :ripple="false" rounded="lg" size="x-large" text="Shop workspace"
              to="/ecommerce/workspace" />
          </v-container>
        </v-img>
      </v-container>
      <!-- End Clean up workspace -->

      <!-- Start Stay focused -->
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
      <!-- End Stay focused -->

      <!-- Start Trending products -->
      <v-container class="pa-md-12 pa-6" fluid>
        <div class="d-flex justify-space-between align-center mb-4 flex-wrap">
          <h2 class="text-h5 font-weight-bold">Trending products</h2>

          <v-btn append-icon="mdi-arrow-right" class="text-none px-0" color="primary" :ripple="false" size="small"
            text="Shop the collection" variant="plain" />
        </div>

        <v-row>
          <v-col v-for="(item, i) in products" :key="i" cols="12" md="3" sm="6">
            <v-hover v-slot="{ isHovering, props: hoverProps }">
              <v-card class="mx-auto" flat rounded="lg" v-bind="hoverProps">
                <v-img :aspect-ratio="4 / 5" block class="cursor-pointer" cover :src="item.img" />

                <v-overlay class="align-center justify-center" contained :model-value="isHovering" no-click-animation
                  persistent scrim="surface">
                  <v-btn class="text-none" :ripple="false" text="See more info" variant="flat" />
                </v-overlay>
              </v-card>

              <p class="mt-2">{{ item.title }}</p>

              <p class="text-medium-emphasis text-body-2">{{ item.subtitle }}</p>

              <p>${{ item.price }}</p>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
      <!-- End Trending products -->

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
]



</script>

<style lang="scss" scoped></style>
