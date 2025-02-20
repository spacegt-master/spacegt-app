<template>
  <v-layout>
    <v-main class="d-flex flex-column">
      <!-- Header Section -->
      <v-card class="h-100 d-flex flex-column justify-center" flat :image="headerSrc" min-height="600" tile>
        <template #image>
          <v-img gradient="to bottom, rgba(var(--v-theme-surface), .8), rgba(var(--v-theme-surface), 1)" />
        </template>

        <v-container class="pa-6 pa-md-12 my-16" fluid>
          <v-responsive class="mb-8" max-width="700">
            <p class="font-weight-bold text-sm-h2 text-h4 mt-2'">
              Work with us
            </p>

            <p class="mt-4 text-body-1 text-medium-emphasis">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p>
          </v-responsive>

          <div class="d-flex algin-center ga-4 mb-8 flex-column flex-sm-row flex-wrap flex-md-nowrap">
            <v-btn v-for="item in headerItems" :key="item" append-icon="mdi-arrow-right" border max-width="300"
              size="small" :text="item" variant="text" />
          </div>

          <v-row>
            <v-col v-for="(item, i) in features" :key="i" cols="12" md="3" sm="6">
              <v-list-item class="px-0" :subtitle="item.subtitle">
                <template #title>
                  <p class="text-h5 font-weight-bold pb-2">
                    {{ item.title }}
                  </p>
                </template>
              </v-list-item>
            </v-col>
          </v-row>
        </v-container>
      </v-card>

      <!-- Stat Section -->

      <v-container class="px-6 px-md-12" fluid>
        <v-responsive max-width="600">
          <p class="font-weight-medium text-primary mb-2">Build faster</p>

          <h1 class="font-weight-bold mb-4 text-h4">
            A better workflow
          </h1>
        </v-responsive>

        <v-row class="text-subtitle-2 text-medium-emphasis mb-10">
          <v-col cols="12" md="6">
            <p class="mb-2">
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
              vitae
              sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat
              velit.
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
              vitae
              sed turpis id.
            </p>

            <p>
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
              fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
              adipiscing
              egestas.
            </p>
          </v-col>

          <v-col cols="12" md="6">
            <p class="mb-2">
              Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget.
              Est
              augue maecenas risus nulla ultrices congue nunc tortor. Enim et nesciunt doloremque nesciunt voluptate.
            </p>

            <p>
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
              fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
              adipiscing
              egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
            </p>
          </v-col>
        </v-row>

        <v-row dense justify="center">
          <v-col v-for="(stat, i) in stats" :key="i" class="d-flex" cols="12" lg="3" md="6">
            <v-divider vertical />

            <v-list-item :subtitle="stat.subtitle">
              <template #title>
                <div class="text-h4 font-weight-bold pb-2">
                  {{ stat.title }}
                </div>
              </template>
            </v-list-item>
          </v-col>
        </v-row>
      </v-container>

      <!-- Logo Section -->

      <v-container class="text-center pa-md-12 pa-6" fluid>
        <v-row no-gutters>
          <v-col v-for="(item, i) in logos" :key="i" class="pa-1" cols="6" lg="4">
            <v-sheet rounded>
              <v-img class="mx-auto pa-12" max-width="180" :src="item" />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <!-- Team Section -->

      <v-container class="px-6 px-md-12" fluid>
        <v-responsive max-width="600">
          <p class="font-weight-bold text-h4 mt-8">
            Our team
          </p>

          <p class="mt-2 text-subtitle-1 text-medium-emphasis">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best
            results for our clients.
          </p>
        </v-responsive>

        <v-row justify="center">
          <v-col v-for="(item, i) in teamMembers" :key="i" class="mt-8" cols="12" lg="3" md="4" sm="6">
            <v-img class="flex-0-1" color="surface-light" cover height="240" rounded="lg" />

            <v-list-item class="px-0 mt-4 my-2" :title="item.title">
              <template #subtitle>
                <p class="mt-1">{{ item.subtitle }}</p>
              </template>

              <p class="mt-1 text-caption text-medium-emphasis">{{ item.location }}</p>
            </v-list-item>
          </v-col>
        </v-row>
      </v-container>

      <!-- Stat2 Section -->

      <v-container>
        <h3 class="text-h4 font-weight-bold w-100 w-md-50 mb-4">
          Our goal is to bring easy web development to the masses
        </h3>

        <div class="text-subtitle-1 text-medium-emphasis w-100 w-md-66 mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
          voluptatibus!
          Eaque cupiditate minima, at placeat totam!
        </div>

        <v-row align="end">
          <v-col cols="12" md="3">
            <v-sheet class="pa-6" color="surface-light" rounded="xl">
              <div class="text-h4 mb-6">250k</div>

              <strong class="d-inline-block mb-2">Unique users per month</strong>

              <div class="opacity-60 font-weight-light text-body-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </v-sheet>
          </v-col>

          <v-col cols="12" md="4">
            <v-sheet class="pa-6 d-flex flex-column" color="surface-variant" min-height="400" rounded="xl">
              <div class="text-h4 mb-6 flex-grow-1 font-weight-bold">10 million</div>

              <strong class="d-inline-block mb-2">Unique views per month to the Vuetify documentation</strong>

              <div class="opacity-60 font-weight-light text-body-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </v-sheet>
          </v-col>

          <v-col cols="12" md="5">
            <v-sheet class="pa-6 d-flex flex-column" color="primary" min-height="300" rounded="xl">
              <div class="text-h4 mb-6 flex-grow-1 font-weight-bold">2.4 million</div>

              <strong class="d-inline-block mb-2">Package downloads per month</strong>

              <div class="opacity-60 font-weight-light text-body-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
                adipisicing
                elit.
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <!-- Content Section -->

      <v-container class="px-6 px-md-12" fluid>
        <v-row align="end">
          <v-col cols="12" md="6">
            <v-responsive class="mb-4" :max-width="$vuetify.display.smAndDown ? '100%' : 450">
              <p class="text-h5 text-sm-h4 font-weight-bold my-4">We’re always looking for awesome people to join us</p>

              <p class="text-body-2 text-medium-emphasis mt-1 mb-2">
                Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu.
                Cras
                purus nibh cursus sit eu in id.
              </p>
            </v-responsive>

            <v-img cover :height="$vuetify.display.smAndDown ? 250 : 500"
              :max-width="$vuetify.display.smAndDown ? '100%' : 450" rounded="xl"
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="100%" />
          </v-col>

          <v-col cols="12" md="6">
            <a v-for="(item, i) in blogs" :key="i" class="py-4 d-block text-high-emphasis text-decoration-none"
              color="transparent" href="#" @click.prevent="">
              <p class="text-subtitle-1">{{ item.title }}</p>

              <p class="text-body-2 text-medium-emphasis mt-1 mb-1">
                {{ item.shortDescription }}
              </p>

              <p class="text-body-2 mb-8"><span class="pr-4 font-weight-bold">{{ item.salary }}</span> {{ item.location
              }}
              </p>

              <v-divider />
            </a>

            <v-btn append-icon="mdi-arrow-right" class="mt-4" color="primary" :ripple="false" rounded size="small"
              text="View all openings" variant="flat" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
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

// define values for Header Section

const headerSrc = computed(() => `https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`)

const headerItems = [
  'Open roles',
  'Internship program',
  'Our values',
  'Meet our leadership',
]

// define values for Features Section

const features = [
  {
    title: '12',
    subtitle:
      'Offices worldwide',
  },
  {
    title: '300+',
    subtitle:
      'Full-time colleagues',
  },
  {
    title: '40',
    subtitle:
      'Hours per week',
  },
  {
    title: 'Unlimited',
    subtitle:
      'Paid time off',
  },
]

// Define Values for Logo Section

const logos = computed(() => [
  `https://vuetifyjs.b-cdn.net/docs/images/one/logos/vbin-logo-${theme.current.value.dark ? 'dark' : 'light'}.png`,
  `https://vuetifyjs.b-cdn.net/docs/images/one/logos/vissues-logo-${theme.current.value.dark ? 'dark' : 'light'}.png`,
  `https://vuetifyjs.b-cdn.net/docs/images/one/logos/vone-logo-${theme.current.value.dark ? 'dark' : 'light'}.png`,
  `https://vuetifyjs.b-cdn.net/docs/images/one/logos/vsnips-logo-${theme.current.value.dark ? 'dark' : 'light'}.png`,
  `https://vuetifyjs.b-cdn.net/docs/images/one/logos/vplay-logo-${theme.current.value.dark ? 'dark' : 'light'}.png`,
  `https://vuetifyjs.b-cdn.net/docs/images/one/logos/vstudio-logo-${theme.current.value.dark ? 'dark' : 'light'}.png`,
])

// Define values for Stat Section

const stats = [
  {
    title: '2016',
    subtitle: 'Founded',
  },
  {
    title: '528+',
    subtitle: 'Releases',
  },
  {
    title: '900+',
    subtitle: 'Documentation examples',
  },
  {
    title: '35m+',
    subtitle: 'Downloads',
  },
]

// Define values for Team Section

const teamMembers = [
  {
    title: 'John Leider',
    subtitle: 'Founder / CEO',
    location: 'Toronto, Canada',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
  {
    title: 'Sarah Connors',
    subtitle: 'CTO',
    location: 'Glasgow, Scotland',
    avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    title: 'Jane Doe',
    subtitle: 'Designer',
    location: 'Texas, United States',
  },
  {
    title: 'John Doe',
    subtitle: 'Developer',
    location: 'Texas, United States',
  },
  {
    title: 'Jane Smith',
    subtitle: 'Back-end Developer',
    location: 'Texas, United States',
  },
  {
    title: 'John Smith',
    subtitle: 'Front-end Developer',
    location: 'Texas, United States',
  },
  {
    title: 'Jane Doe',
    subtitle: 'Designer',
    location: 'Texas, United States',
  },
  {
    title: 'John Doe',
    subtitle: 'Developer',
    location: 'Texas, United States',
  },
]

// Define values for Blogs

const blogs = [
  {
    title: 'Advanced Strategies for SEO to Boost Sales',
    shortDescription: 'Quos nostrum molestias sed earum. Excepturi aut velit incidunt rerum voluptatem harum minus. Quaerat voluptatem distinctio...',
    salary: '$80,000 USD',
    location: 'Austin, TX',
  },
  {
    title: 'Elevating Customer Experience to Foster Growth',
    shortDescription: 'Molestias ad sint qui distinctio. Aliquam fuga consequuntur asperiores voluptatum est. Facere voluptatum ipsum...',
    salary: '$78,000 USD',
    location: 'New York, NY',
  },
  {
    title: 'Transforming Customer Interactions for Success',
    shortDescription: 'Sint et qui molestias ad distinctio. Asperiores fuga consequatur voluptatum. Est aliquam facere voluptatum ipsum...',
    salary: '$78,000 USD',
    location: 'Chicago, IL',
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

<style scoped></style>
