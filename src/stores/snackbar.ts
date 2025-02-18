import { defineStore } from "pinia";
import { ref } from "vue";

export const useSnackbarStore = defineStore("snackbar", () => {
  const snackbar = ref(false);

  // success
  const type = ref();

  const subtitle = ref();

  const text = ref();

  const timeout = ref();

  const start = (options: {
    subtitle: any;
    type: any;
    text: any;
    timeout: any;
  }) => {
    type.value = options.type;
    subtitle.value = options.subtitle;
    text.value = options.text;

    timeout.value = options.timeout || 2000;
    snackbar.value = true;
  };

  return {
    snackbar,
    type,
    subtitle,
    text,
    timeout,
    start,
  };
});

export const snackbar = (options: {
  subtitle: any;
  type: any;
  text: any;
  timeout: any;
}) => {
  const snackbarStore = useSnackbarStore();
  return snackbarStore.start(options);
};
