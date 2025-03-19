<template>
    <v-container class="pa-1 h-100">
        <XProvider :theme="{ algorithm: themeStore.isDark ? theme.darkAlgorithm : theme.defaultAlgorithm, }">
            <v-row class="ma-0 h-100">
                <v-col cols="12" md="3">
                    <v-list v-model:selected="item2" nav slim>
                        <h4 class="mb-4 mx-auto">Historical Dialogue</h4>

                        <v-list-item v-for="(item, i) in items2" :key="i" color="indigo" rounded="lg" :title="item.text"
                            :value="item">
                            <template #prepend>
                                <v-icon icon="mdi-chat-processing-outline" />
                            </template>
                        </v-list-item>
                    </v-list>
                </v-col>

                <v-divider vertical />

                <v-col cols="12" md="9" class="h-100">
                    <v-card class="h-100 d-flex flex-column ">
                        <v-card-text class="flex-fill overflow-auto">
                            <Welcome class="mb-12" variant="borderless"
                                icon="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"
                                title="Hello, I'm Ant Design X"
                                description="Base on Ant Design, AGI product interface solution, create a better intelligent vision~">
                            </Welcome>

                            <Flex gap="middle" vertical>
                                <Bubble placement="start" content="Good morning, how are you?"
                                    :avatar="{ icon: h(UserOutlined), style: fooAvatar }" />
                                <Bubble placement="start" content="What a beautiful day!"
                                    :styles="{ avatar: hideAvatar }" :avatar="{}" />
                                <Bubble placement="end" content="Hi, good morning, I'm fine!"
                                    :avatar="{ icon: h(UserOutlined), style: barAvatar }" />
                                <Bubble placement="end" content="Thank you!" :styles="{ avatar: hideAvatar }"
                                    :avatar="{}" />
                            </Flex>


                        </v-card-text>
                        <v-card-actions>
                            <Flex vertical gap="middle" class="w-100">
                                <Sender />
                            </Flex>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </XProvider>
    </v-container>
</template>

<script setup>
import { shallowRef, h } from 'vue'
import { UserOutlined, EllipsisOutlined, ShareAltOutlined } from '@ant-design/icons-vue';
import { Flex, Button, Space } from 'ant-design-vue';
import { theme, XProvider, Bubble, Sender, Welcome } from 'ant-design-x-vue';
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore()

const items2 = [
    {
        icon: 'mdi-pen',
        text: 'Personal Information',
    },
    {
        icon: 'mdi-credit-card',
        text: 'Billing',
    },
    {
        icon: 'mdi-bell',
        text: 'Notification',
    },
]

const item2 = shallowRef(['Billing'])

const fooAvatar = {
    color: '#f56a00',
    backgroundColor: '#fde3cf',
};

const barAvatar = {
    color: '#fff',
    backgroundColor: '#87d068',
};

const hideAvatar = {
    visibility: 'hidden',
};
</script>

<style lang="scss" scoped></style>