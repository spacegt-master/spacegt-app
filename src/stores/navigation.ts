import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavigationStore = defineStore(
  "navigation",
  () => {
    const defaultItems = ref([
      {
        type: "VListItem",
        prependIcon: "mdi-home-outline",
        title: "Home",
        to: "/home",
        link: true,
        color: "primary",
      },
      {
        type: "VListSubheader",
        title: "Portal",
      },
      {
        type: "VListItem",
        prependIcon: "mdi-video-3d",
        title: "Model",
        to: "/portal/model",
        link: true,
        color: "primary",
      },
      {
        type: "VListSubheader",
        title: "Ecommerce",
      },
      {
        type: "VListItem",
        prependIcon: "mdi-store-outline",
        title: "Storefront",
        to: "/ecommerce/storefront",
        link: true,
        color: "primary",
      },
      {
        type: "VListItem",
        prependIcon: "mdi-sale-outline",
        title: "Promo",
        to: "/ecommerce/promo",
        link: true,
        color: "primary",
      },
      {
        type: "VListItem",
        prependIcon: "mdi-shape-outline",
        title: "Category",
        to: "/ecommerce/category",
        link: true,
        color: "primary",
      },
      {
        type: "VListItem",
        prependIcon: "mdi-clipboard-text-clock-outline",
        title: "Order History",
        to: "/ecommerce/order-history",
        link: true,
        color: "primary",
      },
      {
        type: "VListSubheader",
        title: "Other",
      },
      {
        type: "VListItem",
        prependIcon: "mdi-shield-alert-outline",
        title: "404",
        to: "/404",
        link: true,
        color: "primary",
      },
      {
        type: "VListSubheader",
        title: "Users",
      },
      {
        type: "VListGroup",
        fluid: true,
        activator: {
          prependIcon: "mdi-account-circle-outline",
          subtitle: "Manage your account",
          title: "Accounts",
        },
        childrenItems: [
          {
            link: true,
            color: "primary",
            prependIcon: "mdi-circle-small",
            title: "Downloads",
          },
          {
            link: true,
            color: "primary",
            prependIcon: "mdi-circle-small",
            title: "Subscriptions",
          },
          {
            link: true,
            color: "primary",
            prependIcon: "mdi-circle-small",
            title: "History",
          },
        ],
      },
      {
        type: "VListItem",
        prependIcon: "mdi-shield-account-outline",
        title: "Roles",
        to: "/accounts/roles",
        link: true,
        color: "primary",
      },
      {
        type: "VListItem",
        prependIcon: "mdi-bank",
        title: "Orgs",
        to: "/accounts/orgs",
        link: true,
        color: "primary",
      },
    ]);

    const appendItems = ref([
      {
        type: "VListItem",
        prependIcon: "mdi-cog-outline",
        title: "Settings",
        to: "/settings",
        link: true,
        nav: true,
      },
    ]);

    return { defaultItems, appendItems };
  },
  {
    persist: true,
  }
);
