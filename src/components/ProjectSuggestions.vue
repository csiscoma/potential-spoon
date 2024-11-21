<script setup>
import { ref } from "vue";

// Mock data for AI-suggested projects
const projectSuggestions = ref([
  {
    id: 1,
    name: "Green Energy Initiative",
    description: "Collaborate on sustainable energy solutions for the future.",
    category: "Environment",
    link: "/projects/green-energy",
  },
  {
    id: 2,
    name: "AI-Powered Healthcare",
    description:
      "Explore AI applications to improve patient care and diagnostics.",
    category: "Technology",
    link: "/projects/ai-healthcare",
  },
  {
    id: 3,
    name: "Community Art Collaboration",
    description: "Join a creative project focused on empowering local artists.",
    category: "Arts",
    link: "/projects/community-art",
  },
]);
</script>

<template>
  <div>
    <!-- Title -->
    <h2 class="mb-2 text-xl font-semibold text-gray-800">
      Project Suggestions
    </h2>
    <p class="mb-4 text-sm text-gray-600">
      Based on your interests, here are some projects you might want to explore.
    </p>

    <!-- Suggested Projects List -->
    <div class="space-y-4">
      <div
        v-for="project in projectSuggestions"
        :key="project.id"
        class="p-4 transition bg-white rounded-lg shadow hover:shadow-lg"
      >
        <!-- Project Details -->
        <h3 class="text-lg font-medium text-gray-800">{{ project.name }}</h3>
        <p class="text-sm text-gray-500">{{ project.description }}</p>
        <p class="mt-1 text-xs text-gray-400">
          <strong>Category:</strong> {{ project.category }}
        </p>

        <!-- Link to Project -->
        <a
          :href="project.link"
          class="inline-block mt-2 text-sm text-indigo-600 hover:underline"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</template>
