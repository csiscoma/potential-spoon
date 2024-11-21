<script setup>
import { ref } from "vue";

// State for search query and results
const searchQuery = ref("");
const searchResults = ref([]);
const isLoading = ref(false);

// Mock function to simulate AI-assisted search
const searchProjects = async () => {
  if (!searchQuery.value.trim()) return; // Do nothing for empty queries

  isLoading.value = true;

  // Simulating a delay for AI-assisted search
  setTimeout(() => {
    searchResults.value = [
      {
        id: 1,
        name: "AI-Driven Smart Cities",
        description:
          "Explore AI applications for sustainable urban development.",
        category: "Technology",
        link: "/projects/ai-smart-cities",
      },
      {
        id: 2,
        name: "Renewable Energy Solutions",
        description:
          "Innovate in the field of solar, wind, and hydropower technologies.",
        category: "Environment",
        link: "/projects/renewable-energy",
      },
    ];
    isLoading.value = false;
  }, 1000);
};
</script>

<template>
  <div>
    <!-- Title -->
    <h2 class="mb-2 text-xl font-semibold text-gray-800">Project Search</h2>
    <p class="mb-4 text-sm text-gray-600">
      Search for new project ideas powered by AI. Enter a keyword to begin.
    </p>

    <!-- Search Input -->
    <div class="flex items-center mb-6 space-x-2">
      <input
        v-model="searchQuery"
        @keyup.enter="searchProjects"
        class="flex-grow p-3 text-sm text-gray-900 bg-white border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        type="text"
        placeholder="Enter a keyword, e.g., 'AI', 'Sustainability', 'Health'"
      />
      <button
        @click="searchProjects"
        class="px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-500"
      >
        Search
      </button>
    </div>

    <!-- Loading Indicator -->
    <div v-if="isLoading" class="text-sm text-center text-gray-500">
      Searching for projects...
    </div>

    <!-- Search Results -->
    <div v-if="!isLoading && searchResults.length > 0" class="space-y-4">
      <div
        v-for="result in searchResults"
        :key="result.id"
        class="p-4 transition bg-white rounded-lg shadow hover:shadow-lg"
      >
        <!-- Result Details -->
        <h3 class="text-lg font-medium text-gray-800">{{ result.name }}</h3>
        <p class="text-sm text-gray-500">{{ result.description }}</p>
        <p class="mt-1 text-xs text-gray-400">
          <strong>Category:</strong> {{ result.category }}
        </p>

        <!-- Link to Project -->
        <a
          :href="result.link"
          class="inline-block mt-2 text-sm text-indigo-600 hover:underline"
        >
          Learn More
        </a>
      </div>
    </div>

    <!-- No Results Found -->
    <div
      v-if="!isLoading && searchResults.length === 0 && searchQuery.trim()"
      class="text-center text-gray-500"
    >
      No results found for "{{ searchQuery }}".
    </div>
  </div>
</template>
