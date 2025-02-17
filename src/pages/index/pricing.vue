<template>

  <v-container class="pa-md-12 pa-sm-6 mt-8" fluid>
    <v-responsive class="text-center mx-auto mb-6 mb-md-12" max-width="700">
      <p class="font-weight-medium text-primary">Pricing</p>

      <h1 class="text-h4 font-weight-bold mb-4">
        Pricing plans for teams of all sizes
      </h1>

      <p class="text-subtitle-1 text-medium-emphasis">
        Distinction and no one freed him, and not by some labor.
        Often and as if it were just a way of wanting to not take pleasure in it.
        I will explain it as snacks.
      </p>
    </v-responsive>
    <div class="d-flex justify-center mb-6 mx-auto ">
      <v-sheet class="pa-1" elevation="10" rounded="xl">
        <v-btn class="mr-1 text-none" :color="selectedPlanType == 'monthly' ? 'primary' : 'default'" rounded
          text="Monthly" variant="flat" @click="handleChangePlanType('monthly')" />

        <v-btn class="text-none" :color="selectedPlanType == 'annually' ? 'primary' : 'default'" rounded text="Annually"
          variant="flat" @click="handleChangePlanType('annually')" />
      </v-sheet>
    </div>
    <v-row rounded="xl">
      <v-col v-for="(item, i) in plans" :key="i" cols="12" lg="4">
        <v-card border class="pa-8 d-flex flex-column mx-auto" :color="i == 1 ? 'primary' : 'default'" elevation="10"
          height="500" max-width="450" rounded="xl" :variant="i == 1 ? 'elevated' : 'text'">
          <div class="d-flex justify-space-between align-start">
            <p class="mb-4 font-weight-bold"> {{ item.title }} </p>
            <v-chip v-if="i == 1" class="mb-4" size="small">
              most popular
            </v-chip>
          </div>
          <p class="text-subtitle-2 pb-3">
            {{ item.subtitle }}
          </p>
          <div class="text-h4 mb-4 font-weight-bold">
            ${{ selectedPlanType == 'monthly' ? item.cost : item.annuallyCost }}
            <small class="text-body-2">
              /{{ selectedPlanType == 'monthly' ? 'month' : 'year' }}
            </small>
          </div>
          <v-btn class="mb-5 text-primary mx-auto " :color="i == 1 ? 'white' : 'primary'" max-height="36"
            text="Buy Plan" :variant="i == 1 ? 'flat' : 'outlined'" width="100%" />
          <v-list-item v-for="(feature, _index) in item.features" :key="_index" class="px-0 text-body-2">
            <v-icon class="mr-1" :color="i == 1 ? 'defalut' : 'primary'" icon="mdi-check" />
            {{ feature }}
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- Logos Section -->

  <v-container class="text-center pa-md-12 pa-6" fluid>
    <!-- <v-row>
      <v-col v-for="(item, i) in logos" :key="i" cols="6" lg="2" md="4" sm="6">
        <v-img class="mx-auto" max-width="180" :src="item" />
      </v-col>
    </v-row> -->
    <v-chip append-icon="mdi-arrow-right" class="mt-6" link>
      <span v-if="!$vuetify.display.smAndDown" class="me-1 text-caption">
        Over 2500 companies use our tools to better their business.
      </span>
      Read our customer stories
    </v-chip>
  </v-container>

  <!-- Testimonial Section -->

  <v-container class="pa-6 pa-md-12" fluid>
    <v-card class="pa-6 pa-md-12" :image="testimonialImgSrc" rounded="xl">
      <template #image>
        <v-img gradient="to bottom, rgba(var(--v-theme-surface), .8), rgba(var(--v-theme-surface), 1)" />
      </template>
      <p class="text-sm-h5 text-subtitle-1 text-medium-emphasis mb-6">
        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
        molestiae.
        Numquam corrupti in laborum sed rerum et corporis.”
      </p>
      <v-list-item class="px-0" subtitle="CTO of Saber Liquidation Ltd" title="Jurica Koletic" />
    </v-card>
  </v-container>

  <!-- FAQ Section -->

  <v-container class="pa-6 pa-md-12" fluid>
    <v-responsive class="mx-auto pa-1" max-width="800">
      <p class="text-h6 font-weight-bold text-sm-h5 text-center">
        Frequently Asked Questions
      </p>

      <p class="mt-4 text-body-1 text-medium-emphasis text-center">
        If you can't find the answer you're looking for, our customer support team is here to assist you. Feel free
        to
        reach out for prompt and helpful assistance.
      </p>
      <v-expansion-panels class="mt-4" focusable variant="popout">
        <v-expansion-panel v-for="(item, i) in faqs" :key="i">
          <v-expansion-panel-title collapse-icon="mdi-minus" expand-icon="mdi-plus">
            <strong>{{ item.title }}</strong>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div v-html="item.subtitle" />
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-responsive>
  </v-container>

</template>

<script setup>
import { computed, ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

// Define Values for Appbar Section

const drawer = ref(false)

const appBarItems = computed(() => {
  return [
    { title: 'Platform' },
    { title: 'Developers' },
    { title: 'Security' },
  ]
})

// Define values for Logo Section

const logos = computed(() => [
  `https://vuetifyjs.b-cdn.net/docs/images/one/logos/vbin-logo-${theme.current.value.dark ? 'dark' : 'light'}.png`,
  `https://vuetifyjs.b-cdn.net/docs/images/one/logos/vissues-logo-${theme.current.value.dark ? 'dark' : 'light'}.png`,
  `https://vuetifyjs.b-cdn.net/docs/images/one/logos/vone-logo-${theme.current.value.dark ? 'dark' : 'light'}.png`,
  `https://vuetifyjs.b-cdn.net/docs/images/one/logos/vsnips-logo-${theme.current.value.dark ? 'dark' : 'light'}.png`,
  `https://vuetifyjs.b-cdn.net/docs/images/one/logos/vplay-logo-${theme.current.value.dark ? 'dark' : 'light'}.png`,
  `https://vuetifyjs.b-cdn.net/docs/images/one/logos/vstudio-logo-${theme.current.value.dark ? 'dark' : 'light'}.png`,
])

// Define values for Testimonial Section

const testimonialImgSrc = computed(() => `https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`)

// Define values for Plan Section

const selectedPlanType = ref('monthly')

const handleChangePlanType = value => {
  selectedPlanType.value = value
}

const plans = [
  {
    title: 'Freelancer',
    subtitle: 'The essentials to provide your best work for clients.',
    cost: 15,
    annuallyCost: 144,
    features: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time',
    ],
  },
  {
    title: 'Startup',
    subtitle: 'A plan that scales with your rapidly growing business.',
    cost: 30,
    annuallyCost: 288,
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
  },
  {
    title: 'Enterprise',
    subtitle: 'Dedicated support and infrastructure for your company.',
    cost: 60,
    annuallyCost: 576,
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
  },
]

// Define values for FAQ Section

const faqs = [
  {
    title: 'How do I place an order?',
    subtitle: "To place an order, browse our selection of products, add the items you want to your cart, and proceed to checkout. You'll be guided through the process of providing your shipping and payment information. If you need assistance, our support team is available to help.",
  },
  {
    title: 'What are your shipping options and costs?',
    subtitle: 'We offer various shipping options to ensure your order arrives promptly. Shipping costs are calculated based on the size, weight, and destination of your order. During checkout, you can view the available shipping methods and associated fees before finalizing your purchase.',
  },
  {
    title: 'Do you accept returns and exchanges?',
    subtitle: "Yes, we have a hassle-free return and exchange policy. If you're not satisfied with your purchase, you can return it within [X] days for a full refund or exchange. Please refer to our Returns page for detailed instructions and guidelines.",
  },
  {
    title: 'How do I track my order?',
    subtitle: "Once your order has been processed and shipped, you'll receive a tracking number via email. You can use this number to track the progress of your package on the carrier's website. If you have any questions or concerns about your order status, don't hesitate to contact our support team.",
  },
  {
    title: 'Do you offer any discounts or promotions?',
    subtitle: 'Yes, we frequently offer discounts, promotions, and special offers to our valued customers. Be sure to check our homepage and social media channels for the latest deals. You can also sign up for our newsletter to receive exclusive offers and updates.',
  },
  {
    title: 'How do I contact customer support?',
    subtitle: 'You can reach our customer support team by email at [support@company.com] or by phone at [1-800-123-4567]. Our support representatives are available [Monday-Friday, 9am-5pm EST] to assist you with any questions or concerns you may have.',
  },
]

// Define values for Footer Section

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
