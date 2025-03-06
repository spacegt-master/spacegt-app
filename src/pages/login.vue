<template>
  <spacegt-login :proxy="proxy" @login="onLogin">
    <app-bar transparent></app-bar>
  </spacegt-login>
</template>

<script setup>
import { snackbar } from '@/stores/snackbar';
import { useRouter } from 'vue-router';
import { useAuthenticationStore } from '@/stores/authentication'
import { useAccountsStore } from '@/stores/data/accounts'

const authenticationStore = useAuthenticationStore()
const accountsStore = useAccountsStore()
const router = useRouter()

const proxy = import.meta.env.VITE_APP_ACCOUNTS_SERVICE

const onLogin = (data) => {
  if (data.code === 0) {
    authenticationStore.token = data.token
    accountsStore.account = data.data
    accountsStore.authorities = data.data.authorities
    router.push('/')
  } else {
    snackbar({
      subtitle: data.message,
      type: 'warning',
    })
  }
}
</script>

<style lang="scss" scoped></style>
