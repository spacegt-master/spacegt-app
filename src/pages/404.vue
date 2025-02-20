<template>
  <v-layout class="h-100">
    <app-bar transparent></app-bar>
    <v-main class="text-center d-flex flex-column justify-center">
      <v-empty-state headline="Whoops, 404" image="/logo.png" min-height="400"
        text="The page you were looking for does not exist">
        <template #title>
          <div class="text-primary">
            Page not found
          </div>
        </template>
      </v-empty-state>

      <div class="d-flex ga-2 flex-wrap justify-center mb-16">
        <v-btn class="mr-4 text-none" color="primary" prepend-icon="mdi-arrow-left" text="Go Back Home"
          variant="flat" to="/home" />

        <v-btn append-icon="mdi-arrow-right" class="text-none" text="Contact Service" variant="text" />
      </div>
    </v-main>
  </v-layout>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
