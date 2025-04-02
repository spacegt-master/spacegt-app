<template>
  <layout></layout>
</template>

<script setup>
import Layout from '@/layouts/default.vue'
import { useAuthorizationStore } from '../stores/authorization'
import { TokenApi } from '@/api/accounts/token'
import { onMounted, nextTick } from 'vue'
import { useAccountsStore } from '@/stores/data/accounts'

const authorizationStore = useAuthorizationStore()
const accountsStore = useAccountsStore()

onMounted(async () => {
  if (authorizationStore.token) {
    const res = await TokenApi.validate(authorizationStore.token)

    if (!res) {
      accountsStore.account = null
      accountsStore.authorities = []

      authorizationStore.token = ''
    }
  } else {
    accountsStore.account = null
    accountsStore.authorities = []

    authorizationStore.token = ''
  }
}) 
</script>
