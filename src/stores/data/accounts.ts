import { defineStore } from "pinia";
import { ref } from "vue";

export interface Users {
  id: string;
  username: string;
  nickname: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface Authorities {
  authority: string;
  key: string;
  name: string | null;
}

export const useAccountsStore = defineStore(
  "data-accounts",
  () => {
    const account = ref<Users>();
    const authorities = ref<Authorities[]>([]);

    return { account, authorities };
  },
  {
    persist: true,
  }
);
