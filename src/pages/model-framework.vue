<template>
  <v-layout class="h-100">
    <app-bar transparent style="background-color: rgb(var(--v-theme-background));">
      <template #default>
        <v-breadcrumbs class="px-0 py-0 text-body-2" hide-details :items="items">
          <template #divider>
            <v-icon class="mx-n2" color="disabled" icon="mdi-chevron-right" />
          </template>
          <template v-slot:prepend>
            <v-icon icon="mdi-home-outline" size="small"></v-icon>
          </template>
        </v-breadcrumbs>
      </template>
    </app-bar>
    <v-main class="100%">
      <v-container class="pa-6 h-100" fluid>
        <v-row class="h-100 overflow-auto">
          <v-col class="h-100" cols="12" md="8" order="2" order-md="1">
            <!-- <v-img color="surface-light" height="100%" rounded="lg" /> -->
            <model-render class="rounded-lg	"></model-render>
          </v-col>
          <v-col class="pl-md-4" :class="{ 'h-100': $vuetify.display.mdAndUp }" cols="12" md="4" order="1" order-md="2">
            <div class=" h-100 pr-4" :class="{ 'overflow-auto': $vuetify.display.mdAndUp }">
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
                  <v-btn block class="text-none" color="primary" flat rounded="lg" size="large" text="Download" />
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
                voluptatibus!
                Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde
                voluptatem!
              </p>

              <v-divider class="my-6" />

              <p class="text-body-1 font-weight-bold mt-4 mb-2">Share</p>

              <v-btn v-for="icon in icons" :key="icon" color="medium-emphasis" :icon="icon" size="small"
                variant="text" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>
<script setup>
import { ref } from 'vue'

const items = [
  {
    title: 'Home',
    disabled: false,
    href: '/',
  },
  {
    title: 'Model',
    disabled: false,
    href: '/portal/model',
  },
  {
    title: 'Developer Backpack',
    disabled: true,
    href: '#',
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

const tab = ref(null)

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
</script>
<style scoped>
.v-toolbar {
  background: linear-gradient(rgb(var(--v-theme-background)) 0 80%, #ffffff00) !important;
}

.v-breadcrumbs {
  pointer-events: all !important;
}
</style>
