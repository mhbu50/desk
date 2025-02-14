import { ref } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useSidebarStore = defineStore("sidebar", () => {
  const isOpen = ref(true);
  const isExpanded = useStorage("sidebar_is_expanded", true);

  function toggle(state?: boolean) {
    isOpen.value = state ?? !isOpen.value;
  }

  function toggleExpanded(state?: boolean) {
    isExpanded.value = state ?? !isExpanded.value;
  }

  return {
    isOpen,
    isExpanded,
    toggle,
    toggleExpanded,
  };
});
