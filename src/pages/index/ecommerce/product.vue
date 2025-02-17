<template>
  <v-layout>

    <v-main>
      <v-card v-if="['Men', 'Women'].includes(tab)" class="position-absolute w-100" rounded="b-lg" style="z-index: 10;">
        <div ref="desktopTarget" class="px-6" />
      </v-card>

      <v-container class="pa-md-6" fluid>
        <v-row>
          <v-col cols="12" md="7" order="2" order-md="1">
            <v-img color="surface-light" height="450" rounded="lg" />

            <v-responsive class="mt-6">
              <v-tabs v-model="tab2" color="primary">
                <v-tab class="text-none" text="Customer Reviews" value="customer-reviews" />

                <v-tab class="text-none" text="FAQ" value="faq" />

                <v-tab class="text-none" text="License" value="license" />
              </v-tabs>

              <v-divider />

              <v-tabs-window v-model="tab2" class="mt-4">
                <v-tabs-window-item value="customer-reviews">
                  <v-list-item v-for="(item, i) in reviews" :key="i" class="px-0" lines="three"
                    :subtitle="item.user.date" :title="item.user.name">
                    <template #prepend>
                      <v-avatar class="hidden-sm-and-down" color="grey-darken-3" :image="item.user.avatar"
                        size="small" />
                    </template>

                    <v-rating color="amber-darken-2" density="compact" :model-value="item.user.rate" readonly
                      size="small" />

                    <p class="text-body-2 text-medium-emphasis">{{ item.review }}</p>

                    <v-divider class="mt-6" />
                  </v-list-item>
                </v-tabs-window-item>

                <v-tabs-window-item value="faq">
                  <div v-for="(faq, i) in faqs" :key="i" class="my-4 px-4">
                    <p class="text-body-1 mb-1 font-weight-bold">{{ faq.title }}</p>

                    <p class="text-caption text-medium-emphasis">{{ faq.subtitle }}</p>
                  </div>
                </v-tabs-window-item>

                <v-tabs-window-item value="license">
                  <div v-for="(item, i) in licenses" :key="i" class="my-4 px-4">
                    <p class="text-body-1 font-weight-bold mb-2">{{ item.title }}</p>

                    <p class="text-medium-emphasis mb-2">{{ item.description }}</p>

                    <ul class="ps-5">
                      <li v-for="feature in item.list" :key="feature">
                        <span class="text-body-2">{{ feature }}</span>
                      </li>
                    </ul>
                  </div>
                </v-tabs-window-item>
              </v-tabs-window>
            </v-responsive>
          </v-col>

          <v-col class="px-md-4" cols="12" md="5" order="1" order-md="2">
            <v-rating color="amber-darken-2" density="compact" model-value="4" readonly />

            <div class="text-md-h4 font-weight-bold mb-2 text-h5">Developer Backpack</div>

            <p class="text-caption font-weight-bold mb-4 text-medium-emphasis">Version 1.0 (Updated June 5, 2021)</p>

            <div class="text-body-1 mb-4 text-medium-emphasis">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              ratione debitis quis est labore voluptatibus! Eaque cupiditate minima,
              at placeat totam, magni doloremque veniam neque porro libero rerum
              unde voluptatem!
            </div>

            <v-row>
              <v-col cols="6" lg="6" md="12">
                <v-btn block class="text-none" color="primary" flat rounded="lg" size="large" text="Pay $240" />
              </v-col>

              <v-col cols="6" lg="6" md="12">
                <v-btn block class="text-none" color="primary" flat rounded="lg" size="large" text="Preview"
                  variant="tonal" />
              </v-col>
            </v-row>

            <v-divider class="my-6" />

            <p class="text-body-1 font-weight-bold mt-4 mb-2">Highlights</p>

            <ul class="ps-5">
              <li v-for="feature in features" :key="feature" class="pa-0" density prepend-icon="mdi-circle-small">
                <span class="text-body-2">{{ feature }}</span>
              </li>
            </ul>

            <v-divider class="my-6" />

            <p class="text-body-1 font-weight-bold mt-4 mb-2">Details</p>

            <p class="text-body-2 mb-4 text-medium-emphasis">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
              voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum
              unde
              voluptatem!
            </p>

            <v-divider class="my-6" />

            <p class="text-body-1 font-weight-bold mt-4 mb-2">Share</p>

            <v-btn v-for="icon in icons" :key="icon" color="medium-emphasis" :icon="icon" size="small" variant="text" />
          </v-col>
        </v-row>
      </v-container>

      <v-container class="pa-md-6" fluid>
        <v-row>
          <v-col v-for="(item, i) in products" :key="i" cols="12" md="3" sm="6">
            <v-hover v-slot="{ isHovering, props: hoverProps }">
              <v-card class="mx-auto" flat link :ripple="false" rounded="lg" v-bind="hoverProps">
                <v-img :aspect-ratio="4 / 5" block cover :src="item.img" />

                <v-overlay class="align-center justify-center" contained :model-value="isHovering" persistent
                  scrim="surface" />
              </v-card>
            </v-hover>

            <p class="text-body-2 text-medium-emphasis mt-3">{{ item.title }}</p>
            <p class="font-weight-bold text-body-1">${{ item.price }}</p>
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

const features = [
  'Padded Laptop Compartment',
  'Water Bottle Holder',
  'Anti-Theft Pockets',
  'Ventilated Back Panel',
]

const icons = [
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram',
]

const tab2 = ref(null)

const reviews = [
  {
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!',
    user: {
      avatar: '',
      name: 'John Doe',
      rate: 5,
      date: 'May 7, 2024',
    },
  },
  {
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!',
    user: {
      avatar: '',
      name: 'Sarah Lee',
      rate: 5,
      date: 'May 7, 2024',
    },
  },
  {
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!',
    user: {
      avatar: '',
      name: 'Mike Brown',
      rate: 4,
      date: 'May 7, 2024',
    },
  },
]

const faqs = [
  {
    title: 'Lorem ipsum dolor sit amet?',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!',
  },
  {
    title: 'Lorem ipsum dolor sit amet?',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!',
  },
  {
    title: 'Lorem ipsum dolor sit amet?',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!',
  },
]

const licenses = [
  {
    title: 'Overview',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!',
    list: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet elit.',
    ],
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    list: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet elit.',
    ],
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    list: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'Lorem ipsum dolor sit amet elit.',
    ],
  },
]

const products = [
  {
    title: 'Shirt 1',
    subtitle: 'Fashsion',
    price: 94,
    img: 'https://images.unsplash.com/photo-1602810319428-019690571b5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Shirt 2',
    subtitle: 'Nederland',
    price: 80,
    img: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Shirt 3',
    subtitle: 'Charcoal',
    price: 72,
    img: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Shirt 4',
    subtitle: 'Iso Dots',
    price: 64,
    img: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
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
