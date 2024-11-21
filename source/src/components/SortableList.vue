<script setup>
import { ref } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const sortOptions = [
  { name: "Most Popular", current: true },
  { name: "Best Rating", current: false },
  { name: "Newest", current: false },
  { name: "Oldest", current: false },
  { name: "Status", current: false },
];
const activeFilters = [{ label: "Objects", value: "objects" }];
</script>

<template>
  <div class="p-6 bg-white/90 rounded-lg shadow">
    <div>
      <!-- Sortable List Header -->
      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-semibold text-gray-900">Sort Projects</h1>
        <button
          @click="mobileFiltersOpen = true"
          class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          Filters
        </button>
      </div>
      <p class="mt-2 text-sm text-gray-700">
        Organize and filter projects by framework, status, or category.
      </p>
    </div>

    <!-- Filters -->
    <div class="flex items-center justify-between mt-6">
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="inline-flex items-center text-sm font-medium text-gray-700 group hover:text-gray-900"
          >
            Sort
            <ChevronDownIcon
              class="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
            />
          </MenuButton>
        </div>
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="scale-95 opacity-0"
          enter-to-class="scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="scale-100 opacity-100"
          leave-to-class="scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 z-10 w-40 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="py-1">
              <MenuItem
                v-for="option in sortOptions"
                :key="option.name"
                v-slot="{ active }"
              >
                <a
                  href="#"
                  :class="[
                    option.current
                      ? 'font-medium text-gray-900'
                      : 'text-gray-700',
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm',
                  ]"
                >
                  {{ option.name }}
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>

      <!-- Active Filters -->
      <div class="hidden sm:flex sm:space-x-4">
        <div
          v-for="filter in activeFilters"
          :key="filter.value"
          class="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-700"
        >
          {{ filter.label }}
          <button type="button" class="ml-1 text-gray-500 hover:text-gray-600">
            <span class="sr-only">Remove {{ filter.label }}</span>
            <XMarkIcon class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
