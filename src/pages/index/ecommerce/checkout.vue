<template>
  <v-layout>
    <v-app-bar border="b" class="px-md-4" flat>
      <template #prepend>
        <v-app-bar-nav-icon v-if="display.mdAndDown.value" :ripple="false" variant="plain" @click="drawer = !drawer" />
      </template>

      <v-img class="me-sm-8" max-width="40" src="https://cdn.vuetifyjs.com/docs/images/logos/v.svg" />

      <v-tabs v-if="display.lgAndUp.value" v-model="tab" color="primary" :mandatory="false">
        <v-tab v-for="(item, i) in nav" :key="i" class="text-none" v-bind="item" :value="item.text" />
      </v-tabs>

      <v-spacer />

      <template #append>
        <v-btn class="ms-1" color="medium-emphasis" icon="mdi-bell-outline" />
        <v-btn class="ms-1" color="medium-emphasis" icon="mdi-cart-outline" />
        <v-btn class="ms-1" color="medium-emphasis" icon="mdi-account" />
      </template>
    </v-app-bar>

    <v-navigation-drawer v-if="display.mdAndDown.value" v-model="drawer" location="start" temporary width="355">
      <template #prepend>
        <v-toolbar flat>
          <v-btn icon @click="drawer = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
      </template>

      <v-tabs v-model="tab" color="primary" :mandatory="false">
        <v-tab class="text-none" value="Women">Women</v-tab>
        <v-tab class="text-none" value="Men">Men</v-tab>
      </v-tabs>

      <v-divider />

      <div ref="mobileTarget" class="pa-4" />
    </v-navigation-drawer>

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

      <v-footer class="pt-6 pt-md-16 pb-0 d-flex flex-column">
        <v-row>
          <v-col cols="12" lg="4" md="12">
            <v-img class="mt-1 mb-6" max-width="120"
              :src="`https://vuetifyjs.b-cdn.net/docs/images/one/logos/vuetify-logo-${$vuetify.theme.current.dark ? 'dark' : 'light'}.png`" />

            <p>Making the world a better place through constructing elegant hierarchies.</p>

            <div class="mt-3">
              <v-btn v-for="icon in icons" :key="icon" :icon="icon" size="small" variant="text" />
            </div>
          </v-col>

          <v-col v-for="(section, i) in sections" :key="i" cols="6" lg="2" md="3">
            <p class="text-body-1 font-weight-bold mb-3">{{ section.title }}</p>

            <div v-for="item in section.items" :key="item">
              <v-btn class="text-none px-0 justify-start" exact href="#" :ripple="false" :text="item" variant="plain" />
            </div>
          </v-col>
        </v-row>

        <p class="py-4 text-caption text-right">
          &copy; 2016-{{ new Date().getFullYear() }} Vuetify. All rights reserved.
        </p>
      </v-footer>
    </v-main>

    <Teleport v-if="teleportTarget" :to="teleportTarget">
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="Women">
          <v-row class="my-4">
            <v-col cols="12" lg="6">
              <v-hover v-slot="{ isHovering, props: hoverProps }">
                <v-card class="mx-auto" flat link :ripple="false" rounded="lg" v-bind="hoverProps">
                  <v-img :aspect-ratio="2 / 1" cover rounded
                    src="https://images.unsplash.com/photo-1602810319428-019690571b5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <v-card class="pa-4 position-absolute bottom-0 on-surface-variant w-100"
                      color="rgba(var(--v-theme-surface-variant), .9)" height="80">
                      <div>
                        <p class="text-body-1">New Arrivals 1</p>
                        <p class="text-body-2 text-surface">Shop now</p>
                      </div>
                    </v-card>
                  </v-img>
                  <v-overlay class="align-center justify-center" contained :model-value="isHovering" no-click-animation
                    persistent scrim="surface" />
                </v-card>
              </v-hover>

              <v-row class="mt-6">
                <v-col cols="12" lg="6">
                  <v-hover v-slot="{ isHovering, props: hoverProps }">
                    <v-card class="mx-auto" flat link :ripple="false" rounded="lg" v-bind="hoverProps">
                      <v-img :aspect-ratio="5 / 4" cover rounded
                        src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                        <v-card class="pa-4 position-absolute bottom-0 on-surface-variant w-100"
                          color="rgba(var(--v-theme-surface-variant), .9)" height="80">
                          <div>
                            <p class="text-body-1">New Arrivals 2</p>
                            <p class="text-body-2 text-surface">Shop now</p>
                          </div>
                        </v-card>
                      </v-img>

                      <v-overlay class="align-center justify-center" contained :model-value="isHovering"
                        no-click-animation persistent scrim="surface" />
                    </v-card>
                  </v-hover>
                </v-col>

                <v-col cols="12" lg="6">
                  <v-hover v-slot="{ isHovering, props: hoverProps }">
                    <v-card class="mx-auto" flat link :ripple="false" rounded="lg" v-bind="hoverProps">
                      <v-img :aspect-ratio="5 / 4" cover rounded
                        src="https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                        <v-card class="pa-4 position-absolute bottom-0 on-surface-variant w-100"
                          color="rgba(var(--v-theme-surface-variant), .9)" height="80">
                          <div>
                            <p class="text-body-1">New Arrivals 3</p>
                            <p class="text-body-2 text-surface">Shop now</p>
                          </div>
                        </v-card>
                      </v-img>

                      <v-overlay class="align-center justify-center" contained :model-value="isHovering"
                        no-click-animation persistent scrim="surface" />
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" lg="6">
              <v-row>
                <v-col v-for="(each, i) in links" :key="i" cols="12" lg="4">
                  <p class="font-weight-bold text-body-1">{{ each.title }}</p>
                  <div v-for="(item) in each.items.women" :key="item">
                    <v-btn class="px-0 text-none justify-start" :ripple="false" :text="item" variant="plain" />
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-tabs-window-item>

        <v-tabs-window-item value="Men">
          <v-row class="my-4">
            <v-col cols="12" lg="6">
              <v-hover v-slot="{ isHovering, props: hoverProps }">
                <v-card class="mx-auto" flat link :ripple="false" rounded="lg" v-bind="hoverProps">
                  <v-img :aspect-ratio="2 / 1" cover rounded
                    src="https://images.unsplash.com/photo-1602810320073-1230c46d89d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    <v-card class="pa-4 position-absolute bottom-0 on-surface-variant w-100"
                      color="rgba(var(--v-theme-surface-variant), .9)" height="80">
                      <div>
                        <p class="text-body-1">New Arrivals 1</p>
                        <p class="text-body-2 text-surface">Shop now</p>
                      </div>
                    </v-card>
                  </v-img>

                  <v-overlay class="align-center justify-center" contained :model-value="isHovering" no-click-animation
                    persistent scrim="surface" />
                </v-card>
              </v-hover>

              <v-row class="mt-6">
                <v-col cols="12" lg="6">
                  <v-hover v-slot="{ isHovering, props: hoverProps }">
                    <v-card class="mx-auto" flat link :ripple="false" rounded="lg" v-bind="hoverProps">
                      <v-img :aspect-ratio="5 / 4" cover rounded
                        src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                        <v-card class="pa-4 position-absolute bottom-0 on-surface-variant w-100"
                          color="rgba(var(--v-theme-surface-variant), .9)" height="80">
                          <div>
                            <p class="text-body-1">New Arrivals 2</p>
                            <p class="text-body-2 text-surface">Shop now</p>
                          </div>
                        </v-card>
                      </v-img>

                      <v-overlay class="align-center justify-center" contained :model-value="isHovering"
                        no-click-animation persistent scrim="surface" />
                    </v-card>
                  </v-hover>
                </v-col>

                <v-col cols="12" lg="6">
                  <v-hover v-slot="{ isHovering, props: hoverProps }">
                    <v-card class="mx-auto" flat link :ripple="false" rounded="lg" v-bind="hoverProps">
                      <v-img :aspect-ratio="5 / 4" cover rounded
                        src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                        <v-card class="pa-4 position-absolute bottom-0 on-surface-variant w-100"
                          color="rgba(var(--v-theme-surface-variant), .9)" height="80">
                          <div>
                            <p class="text-body-1">New Arrivals 3</p>
                            <p class="text-body-2 text-surface">Shop now</p>
                          </div>
                        </v-card>
                      </v-img>

                      <v-overlay class="align-center justify-center" contained :model-value="isHovering"
                        no-click-animation persistent scrim="surface" />
                    </v-card>
                  </v-hover>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" lg="6">
              <v-row>
                <v-col v-for="(each, i) in links" :key="i" cols="12" lg="4">
                  <p class="font-weight-bold text-body-1">{{ each.title }}</p>
                  <div v-for="(item) in each.items.men" :key="item">
                    <v-btn class="px-0 text-none justify-start" :ripple="false" :text="item" variant="plain" />
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-tabs-window-item>
      </v-tabs-window>
    </Teleport>
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
