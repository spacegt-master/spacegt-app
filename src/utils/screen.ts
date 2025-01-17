import { useEventListener } from "@vueuse/core";
import { ref } from "vue";

const isMaximize = ref(
  window.outerHeight === screen.availHeight &&
    window.outerWidth === screen.availWidth
);

useEventListener(window, "resize", () => {
  isMaximize.value =
    window.outerHeight === screen.availHeight &&
    window.outerWidth === screen.availWidth;
});

export function useScreenMaximize() {
  return { isMaximize };
}
