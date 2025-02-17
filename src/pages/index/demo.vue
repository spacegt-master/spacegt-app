<template>
  <v-container class="pa-md-12 pa-6" fluid>
    <div class="align-end d-sm-flex justify-space-between mb-4">
      <div class="align-end d-flex">
        <h3 class="text-h5 font-weight-bold">Order #54879</h3>

        <v-btn append-icon="mdi-arrow-right" class="text-none" color="primary" :ripple="false" size="small" slim
          text="View invoice" variant="plain" />
      </div>

      <p class="font-weight-light text-body-2">Order placed <span class="font-weight-medium">{{ order.placedDate
          }}</span></p>
    </div>

    <v-card v-for="item in order.items" :key="item.id" class="mb-4">
      <v-container fluid>
        <v-row>
          <v-col cols="12" lg="2" md="3">
            <v-img color="surface-light" cover height="160" rounded="lg" width="100%" />
          </v-col>

          <v-col cols="12" lg="6" md="9">
            <p class="text-subtitle-1 font-weight-medium">{{ item.name }}</p>

            <p class="text-subtitle-2 font-weight-medium">${{ item.price }}</p>

            <p class="font-weight-light mt-2 text-body-2">{{ item.description }}</p>
          </v-col>

          <v-col cols="12" lg="2" md="6">
            <p class="text-subtitle-2 font-weight-medium">Delivery address</p>

            <p class="font-weight-light mt-2 text-body-2">{{ item.deliveryAddress }}</p>
          </v-col>

          <v-col cols="12" lg="2" md="6">
            <p class="text-subtitle-2 font-weight-medium">Shipping updates</p>

            <p class="font-weight-light mt-2 text-body-2">{{ item.shippingUpdateEmail }}</p>

            <p class="font-weight-light mt-2 text-body-2">{{ item.shippingUpdateMobile }}</p>

            <v-btn class="pa-0 mt-2 text-none" color="primary" :ripple="false" size="small" slim text="Edit"
              variant="plain" />
          </v-col>
        </v-row>
      </v-container>

      <v-divider />

      <v-container fluid>
        <p class="text-subtitle-2 font-weight-medium">{{ item.shippingStatus.info }}</p>

        <v-slider class="my-2" color="primary" :max="3" :model-value="item.shippingStatus.status" readonly rounded
          show-ticks="always" step="1" thumb-size="10" tick-size="0" :ticks="smAndUp ? {
            0: 'Order placed',
            1: 'Processing',
            2: 'Shipped',
            3: 'Delivered',
          } : undefined" track-color="surface-light" />
      </v-container>
    </v-card>

    <v-card class="mt-4" color="surface-light">
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="3">
            <p class="text-subtitle-2 font-weight-medium">Billing address</p>

            <p class="font-weight-light mt-2 text-body-2" style="white-space: pre-line;">{{ order.billingAddress }}</p>
          </v-col>

          <v-col cols="12" md="3">
            <p class="text-subtitle-2 font-weight-medium">Payment information</p>

            <div class="d-flex ga-3 mt-2">
              <v-icon icon="mdi-card-account-details-outline" />

              <div>
                <p class="text-subtitle-2">Ending with {{ order.payment.cardEndingNum }}</p>

                <p class="text-subtitle-2 font-weight-light">Expires {{ order.payment.expires }}</p>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <v-list bg-color="transparent" class="pa-0" slim>
              <v-defaults-provider :defaults="{
                VListItem: {
                  class: 'bg-transparent'
                }
              }">
                <v-list-item subtitle="Subtotal">
                  <template #append>
                    <p class="font-weight-medium text-body-2">${{ order.subTotal }}</p>
                  </template>
                </v-list-item>

                <v-divider />

                <v-list-item subtitle="Shipping">
                  <template #append>
                    <p class="font-weight-medium text-body-2">${{ order.shipping }}</p>
                  </template>
                </v-list-item>

                <v-divider />

                <v-list-item subtitle="Tax">
                  <template #append>
                    <p class="font-weight-medium text-body-2">${{ order.tax }}</p>
                  </template>
                </v-list-item>

                <v-divider />

                <v-list-item title="Order total">
                  <template #append>
                    <p class="color-primary font-weight-medium text-body-2">${{ order.total }}</p>
                  </template>
                </v-list-item>
              </v-defaults-provider>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify'

const { smAndUp } = useDisplay()

const order = ref({
  id: '92384',
  placedDate: 'April 15, 2022',
  billingAddress: 'Alex Johnson\n1234 Elm Street\nAustin, TX 78701',
  payment: {
    cardEndingNum: '1234',
    expires: '07 / 25',
  },
  subTotal: 200,
  shipping: 10,
  tax: 15,
  total: 225,
  items: [
    {
      id: 1,
      name: 'Eco-Friendly Water Bottle',
      price: 25,
      description: 'A stylish and sustainable water bottle made from recycled materials.',
      deliveryAddress: 'Alex Johnson 1234 Elm Street Austin, TX 78701',
      shippingUpdateEmail: 'alex@example.com',
      shippingUpdateMobile: '+1-512-555-1234',
      shippingStatus: {
        info: 'Preparing to ship on April 17, 2022',
        status: 1,
      },
    },
    {
      id: 2,
      name: 'Wireless Earbuds',
      price: 75,
      description: 'High-quality wireless earbuds with noise cancellation and long battery life.',
      deliveryAddress: 'Alex Johnson 1234 Elm Street Austin, TX 78701',
      shippingUpdateEmail: 'alex@example.com',
      shippingUpdateMobile: '+1-512-555-1234',
      shippingStatus: {
        info: 'Shipped on April 16, 2022',
        status: 0,
      },
    },
    {
      id: 3,
      name: 'Smart Home Speaker',
      price: 100,
      description: 'A smart speaker with voice assistant capabilities and high-fidelity sound.',
      deliveryAddress: 'Alex Johnson 1234 Elm Street Austin, TX 78701',
      shippingUpdateEmail: 'alex@example.com',
      shippingUpdateMobile: '+1-512-555-1234',
      shippingStatus: {
        info: 'Preparing to ship on April 18, 2022',
        status: 1,
      },
    },
  ],
})
</script>

<style lang="scss" scoped></style>
