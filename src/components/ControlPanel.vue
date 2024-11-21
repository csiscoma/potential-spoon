<script setup>
import { ref } from "vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/solid";

// Import the composable
import { useWidgets } from "../composables/useWidgets";

const { widgets } = useWidgets(); // Use the shared widgets state

// Manage panel collapse/expand state
const isExpanded = ref(false); // Collapsed by default
const togglePanel = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div
    class="fixed w-64 overflow-hidden bg-white rounded-lg shadow-lg bottom-6 right-6"
  >
    <!-- Control Panel Header -->
    <div class="flex items-center justify-between p-4 bg-gray-100">
      <h2 class="text-sm font-medium text-gray-700">Control Panel</h2>
      <button @click="togglePanel" class="focus:outline-none">
        <ChevronDownIcon v-if="!isExpanded" class="w-5 h-5 text-gray-500" />
        <ChevronUpIcon v-else class="w-5 h-5 text-gray-500" />
      </button>
    </div>

    <!-- Control Panel Content -->
    <div v-show="isExpanded" class="p-4">
      <ul class="space-y-2">
        <li
          v-for="widget in widgets"
          :key="widget.id"
          class="flex items-center justify-between"
        >
          <label
            :for="`widget-${widget.id}`"
            class="text-sm font-medium text-gray-800 cursor-pointer"
          >
            {{ widget.name }}
          </label>
          <input
            :id="`widget-${widget.id}`"
            type="checkbox"
            v-model="widget.visible"
            class="w-4 h-4 text-indigo-600 border-gray-300 rounded cursor-pointer focus:ring-indigo-500"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
