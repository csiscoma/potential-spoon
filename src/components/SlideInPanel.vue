<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  project: {
    type: Object,
    default: null,
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

// Reactive style for panel visibility
const panelStyle = ref("translate-x-full");

// Watch the `isVisible` prop and update the panel style
watch(
  () => props.isVisible,
  (newVal) => {
    panelStyle.value = newVal ? "translate-x-0" : "translate-x-full";
  },
);

// Close the panel
const closePanel = () => {
  emit("close");
};
</script>

<template>
  <div
    class="fixed inset-y-0 right-0 z-50 flex flex-col w-full max-w-md transition-transform duration-300 ease-in-out bg-white border-t-4 border-l-4 border-indigo-500 shadow-lg"
    :class="panelStyle"
    style="margin-top: 4rem; height: calc(100vh - 4rem)"
  >
    <!-- Header -->
    <div class="flex items-center justify-between p-4 bg-gray-100 border-b">
      <h2 class="text-lg font-semibold text-gray-800">
        {{ project?.name || "Project Details" }}
      </h2>
      <button
        class="text-gray-500 hover:text-gray-700 focus:outline-none"
        @click="closePanel"
      >
        <span class="sr-only">Close panel</span>
        &times;
      </button>
    </div>

    <!-- Project Details -->
    <div class="flex-grow p-4 overflow-y-auto">
      <p class="text-sm text-gray-500">
        <strong>Status:</strong> {{ project?.status || "N/A" }}
      </p>
      <p class="mt-2 text-gray-700">
        {{ project?.description || "No description available." }}
      </p>
    </div>
  </div>
</template>
