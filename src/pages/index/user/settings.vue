<template>

  <v-container class="px-6 py-6 mb-6" fluid>
    <h5 class="text-h6 mb-2 font-weight-medium">Profile</h5>

    <p class="text-body-2 text-medium-emphasis">This information will be displayed publicly so be careful what you
      share.</p>

    <v-divider class="my-6" />

    <div class="d-flex justify-space-between align-center">
      <v-row class="w-50" no-gutters>
        <v-col cols="12" md="6">
          <h5 class="text-subtitle-1 font-weight-medium ">Full name</h5>
        </v-col>

        <v-col cols="12" md="6">
          <p class="text-body-2 text-medium-emphasis">Tom Cook</p>
        </v-col>
      </v-row>

      <div class="d-flex justify-end align-center flex-grow-1">
        <v-btn class="text-none" color="primary" :ripple="false" slim text="Update" variant="text" />
      </div>
    </div>

    <v-divider class="my-6" />

    <div class="d-flex justify-space-between align-center">
      <v-row class="w-50" no-gutters>
        <v-col cols="12" md="6">
          <h5 class="text-subtitle-1 font-weight-medium ">Email address</h5>
        </v-col>

        <v-col cols="12" md="6">
          <p class="text-body-2 text-medium-emphasis">tom.cook@example.com</p>
        </v-col>
      </v-row>

      <div class="d-flex justify-end align-center flex-grow-1">
        <v-btn class="text-none" color="primary" :ripple="false" slim text="Update" variant="text" />
      </div>
    </div>

    <v-divider class="my-6" />

    <div class="d-flex justify-space-between align-center">
      <v-row class="w-50" no-gutters>
        <v-col cols="12" md="6">
          <h5 class="text-subtitle-1 font-weight-medium ">Title</h5>
        </v-col>

        <v-col cols="12" md="6">
          <p class="text-body-2 text-medium-emphasis">Human Resources Manager</p>
        </v-col>
      </v-row>

      <div class="d-flex justify-end align-center flex-grow-1">
        <v-btn class="text-none" color="primary" :ripple="false" slim text="Update" variant="text" />
      </div>
    </div>
  </v-container>

  <v-container class="px-6 py-6 mb-6" fluid>
    <h5 class="text-h6 mb-2 font-weight-medium">Bank accounts</h5>

    <p class="text-body-2 text-medium-emphasis">Connect bank accounts to your account.</p>

    <v-divider class="my-6" />

    <div class="d-flex justify-space-between align-center">
      <h5 class="text-subtitle-1 font-weight-medium ">TD Canada Trust</h5>

      <div class="d-flex justify-end align-center flex-grow-1">
        <v-btn class="text-none" color="primary" :ripple="false" slim text="Update" variant="text" />
      </div>
    </div>

    <v-divider class="my-6" />

    <div class="d-flex justify-space-between align-center">
      <h5 class="text-subtitle-1 font-weight-medium ">Royal Bank of Canada</h5>

      <div class="d-flex justify-end align-center flex-grow-1">
        <v-btn class="text-none" color="primary" :ripple="false" slim text="Update" variant="text" />
      </div>
    </div>

    <v-divider class="my-6" />

    <v-btn class="text-none" color="primary" prepend-icon="mdi-plus" :ripple="false" slim text="Add another bank"
      variant="text" />
  </v-container>

  <v-container class="px-6 py-6 mb-6" fluid>
    <h5 class="text-h6 mb-2 font-weight-medium">Integrations</h5>

    <p class="text-body-2 text-medium-emphasis">Connect applications to your account.</p>

    <v-divider class="my-6" />

    <div class="d-flex justify-space-between align-center">
      <h5 class="text-subtitle-1 font-weight-medium ">QuickBooks</h5>

      <div class="d-flex justify-end align-center flex-grow-1">
        <v-btn class="text-none" color="primary" :ripple="false" slim text="Update" variant="text" />
      </div>
    </div>

    <v-divider class="my-6" />

    <v-btn class="text-none" color="primary" prepend-icon="mdi-plus" :ripple="false" slim text="Add another application"
      variant="text" />
  </v-container>

  <v-container class="px-6 py-6 mb-6" fluid>
    <h5 class="text-h6 mb-2 font-weight-medium">Language and dates</h5>

    <p class="text-body-2 text-medium-emphasis">Choose what language and date format to use throughout your account.</p>

    <v-divider class="my-6" />

    <div class="d-flex justify-space-between align-center">
      <v-row class="w-50" no-gutters>
        <v-col cols="12" md="6">
          <h5 class="text-subtitle-1 font-weight-medium ">Language</h5>
        </v-col>

        <v-col cols="12" md="6">
          <p class="text-body-2 text-medium-emphasis">English</p>
        </v-col>
      </v-row>

      <div class="d-flex justify-end align-center flex-grow-1">
        <v-btn class="text-none" color="primary" :ripple="false" slim text="Update" variant="text" />
      </div>
    </div>

    <v-divider class="my-6" />

    <div class="d-flex justify-space-between align-center">
      <v-row class="w-50" no-gutters>
        <v-col cols="12" md="6">
          <h5 class="text-subtitle-1 font-weight-medium ">Date format</h5>
        </v-col>

        <v-col cols="12" md="6">
          <p class="text-body-2 text-medium-emphasis">DD-MM-YYYY</p>
        </v-col>
      </v-row>

      <div class="d-flex justify-end align-center flex-grow-1">
        <v-btn class="text-none" color="primary" :ripple="false" slim text="Update" variant="text" />
      </div>
    </div>

    <v-divider class="my-6" />

    <div class="d-flex justify-space-between align-center">
      <h5 class="text-subtitle-1 font-weight-medium ">Automatic timezone</h5>

      <div class="d-flex justify-end align-center flex-grow-1">
        <v-switch color="primary" hide-details />
      </div>
    </div>
  </v-container>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
