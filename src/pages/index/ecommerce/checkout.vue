<template>
  <v-layout>

    <v-main>
      <v-card v-if="['Men', 'Women'].includes(tab)" class="position-absolute w-100" rounded="b-lg" style="z-index: 10;">
        <div ref="desktopTarget" class="px-6" />
      </v-card>

      <v-container class="pa-0" fluid>
        <v-row no-gutters>
          <v-col class="pa-4 pa-md-12" :class="theme.current.value.dark ? 'bg-grey-darken-5' : 'bg-grey-lighten-5'"
            cols="12" md="6">
            <div class="text-h6 mb-4">Order summary</div>

            <template v-for="(item, i) in items" :key="i">
              <v-divider v-if="i !== 0" class="my-4 " />

              <v-list-item class="px-0">
                <template #prepend>
                  <v-img class="me-4 border" color="surface" height="72" min-width="72" rounded />
                </template>

                <template #title>
                  <strong>{{ item.title }}</strong>
                </template>

                <template #subtitle>
                  {{ item.subtitle }}
                </template>

                <strong class="text-subtitle-1">{{ item.price }}</strong>
              </v-list-item>
            </template>

            <v-divider class="my-4" />

            <v-list-item class="px-0">
              <template #title>
                <div class="d-flex align-center justify-space-between">
                  <span>Subtotal</span>

                  <strong>$980.00</strong>
                </div>
              </template>
            </v-list-item>

            <v-list-item class="px-0">
              <template #title>
                <div class="d-flex align-center justify-space-between">
                  <span>Shipping</span>

                  <strong>$10.00</strong>
                </div>
              </template>
            </v-list-item>

            <v-list-item class="px-0">
              <template #title>
                <div class="d-flex align-center justify-space-between">
                  <span>Taxes</span>

                  <strong>$68.00</strong>
                </div>
              </template>
            </v-list-item>

            <v-divider class="my-2" />

            <v-list-item class="px-0">
              <template #title>
                <div class="d-flex align-center justify-space-between text-h6">
                  <span>Total</span>

                  <strong>$1058.00</strong>
                </div>
              </template>
            </v-list-item>
          </v-col>

          <v-col class="pa-4 pa-md-12 bg-surface" cols="12" md="6">
            <div class="text-h6 mb-4">Contact information</div>

            <v-text-field bg-color="surface" color="primary" density="compact" label="Email address"
              persistent-placeholder variant="outlined" />

            <v-checkbox-btn color="primary" density="comfortable" label="Sign me up for your newsletter." />

            <v-divider class="my-6" />

            <div class="text-h6 mb-4">Payment information</div>

            <v-text-field bg-color="surface" color="primary" density="compact" label="Cardholder name"
              persistent-placeholder variant="outlined" />

            <v-text-field bg-color="surface" color="primary" density="compact" label="Card number"
              persistent-placeholder variant="outlined" />

            <div class="d-flex ga-4">
              <v-text-field bg-color="surface" color="primary" density="compact" label="Expiration date"
                persistent-placeholder variant="outlined" />

              <v-text-field bg-color="surface" color="primary" density="compact" label="CVV" max-width="100"
                persistent-placeholder variant="outlined" />
            </div>

            <v-divider class="my-6" />

            <div class="text-h6 mb-4">Shipping information</div>

            <div class="d-flex ga-4">
              <v-text-field bg-color="surface" color="primary" density="compact" label="First name"
                persistent-placeholder variant="outlined" />

              <v-text-field bg-color="surface" color="primary" density="compact" label="Last name"
                persistent-placeholder variant="outlined" />
            </div>

            <v-text-field bg-color="surface" color="primary" density="compact" label="Address" persistent-placeholder
              variant="outlined" />

            <div class="d-flex ga-4">
              <v-text-field bg-color="surface" color="primary" density="compact" label="City" persistent-placeholder
                variant="outlined" />

              <v-text-field bg-color="surface" color="primary" density="compact" label="State" persistent-placeholder
                variant="outlined" />
            </div>

            <div class="d-flex ga-4">
              <v-text-field bg-color="surface" class="flex-1-0-0" color="primary" density="compact" label="ZIP code"
                persistent-placeholder variant="outlined" />

              <v-select bg-color="surface" class="flex-1-0-0" color="primary" density="compact"
                :items="['United States', 'Canada', 'Mexico']" label="Country" persistent-placeholder
                variant="outlined" />
            </div>

            <v-divider class="my-6" />

            <div class="text-h6 mb-4">Billing information</div>

            <v-checkbox-btn color="primary" density="comfortable" label="Same as shipping address."
              :model-value="true" />

            <v-divider class="my-8" />

            <v-btn block class="text-none" color="primary" height="48" prepend-icon="mdi-lock" rounded="lg"
              text="Place order" variant="flat" />
          </v-col>
        </v-row>
      </v-container>

    </v-main>
  </v-layout>
</template>

<script setup>
import { computed, ref, shallowRef, watch } from 'vue'
import { useDisplay, useTheme } from 'vuetify'

const display = useDisplay()
const theme = useTheme()

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

const nav = [
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

const items = [
  {
    title: 'Developer backpack',
    subtitle: 'Black\nLeather',
    price: '$290.00',
    quantity: 1,
  },
  {
    title: 'Designer backpack',
    subtitle: 'Brown\nLeather',
    price: '$390.00',
    quantity: 1,
  },
  {
    title: 'Travel backpack',
    subtitle: 'Blue\nNylon',
    price: '$300.00',
    quantity: 1,
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
