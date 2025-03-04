import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

export const useAccountsStore = defineStore(
  "data-accounts",
  () => {
    return {};
  },
  {
    persist: true,
  }
);
