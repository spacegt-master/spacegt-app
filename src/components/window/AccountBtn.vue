<template>
    <v-btn v-if="accountsStore.account" class="me-2" height="48" icon>
        <v-avatar size="32">
            <v-img v-if="accountsStore.account.avatar" :src="accountsStore.account.avatar" width="32"
                height="32"></v-img>
            <v-icon v-else icon="mdi-account-circle" size="32"></v-icon>
        </v-avatar>

        <v-menu activator="parent" width="280">
            <v-card variant="text" class=" rounded-lg border">
                <v-responsive class="bg-surface-light rounded-0" style="height: 88px;"></v-responsive>
                <div class="text-center mt-n9 mb-4">
                    <!-- <v-avatar size="72" class="border-md border-opacity-100 border-surface-light bg-surface">
                        <v-img src="@/assets/avatar/default-avatar.svg"></v-img>
                    </v-avatar> -->
                    <v-avatar size="72">
                        <v-img v-if="accountsStore.account.avatar" :src="accountsStore.account.avatar" width="72"
                            height="72"></v-img>
                        <v-icon v-else icon="mdi-account-circle" size="72"></v-icon>
                    </v-avatar>

                    <div class="text-h6 mt-2">{{ accountsStore.account.nickname }}</div>
                </div>
                <VDivider></VDivider>
                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-account-cog" link title="Settings" to="/user/settings" />
                    <v-list-item prepend-icon="mdi-logout" link title="Logout" to="/" @click="logout" />
                </v-list>
            </v-card>
            <!-- <v-list density="compact" nav>
                <v-list-item append-icon="mdi-cog-outline" link title="Settings" to="/user/settings" />

                <v-list-item append-icon="mdi-logout" link title="Logout" to="/" @click="logout" />
            </v-list> -->
        </v-menu>
    </v-btn>
    <v-btn v-else class="me-2" height="48" icon to="/login">
        <v-avatar size="32">
            <v-icon icon="mdi-login" size="24"></v-icon>
        </v-avatar>
    </v-btn>
</template>

<script setup>
import { useAuthorizationStore } from '@/stores/authorization';
import { useAccountsStore } from '@/stores/data/accounts';
import { nextTick } from 'vue';

const accountsStore = useAccountsStore()

const authorizationStore = useAuthorizationStore()

const logout = () => {
    nextTick(() => {
        accountsStore.account = null
        accountsStore.authorities = []

        authorizationStore.token = ''
    })
}
</script>

<style lang="scss" scoped></style>