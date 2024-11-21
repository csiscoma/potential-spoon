<script setup>
import { ref } from "vue";

// Mock data for onboarding action items
const onboardingActionItems = ref([
  {
    id: 1,
    title: "Complete profile setup",
    description:
      "Fill out your profile details to help others connect with you.",
    status: "Incomplete",
    link: "/onboarding/profile",
  },
  {
    id: 2,
    title: "Review company handbook",
    description:
      "Understand company policies and values by reading the handbook.",
    status: "Incomplete",
    link: "/onboarding/handbook",
  },
  {
    id: 3,
    title: "Set up project tools",
    description: "Install and configure tools required for your role.",
    status: "In Progress",
    link: "/onboarding/tools",
  },
]);
</script>

<template>
  <div>
    <!-- Title -->
    <h2 class="mb-2 text-xl font-semibold text-gray-800">
      Onboarding Action Items
    </h2>
    <p class="mb-4 text-sm text-gray-600">
      Keep track of your onboarding tasks and click on an item to take action.
    </p>

    <!-- Action Item List -->
    <div class="space-y-4">
      <div
        v-for="item in onboardingActionItems"
        :key="item.id"
        class="p-4 transition bg-white rounded-lg shadow hover:shadow-lg"
      >
        <!-- Item Info -->
        <h3 class="text-lg font-medium text-gray-800">{{ item.title }}</h3>
        <p class="text-sm text-gray-500">{{ item.description }}</p>
        <p class="mt-1 text-sm text-gray-500">
          <strong>Status:</strong> {{ item.status }}
        </p>

        <!-- Link to Onboarding Step -->
        <a
          :href="item.link"
          class="inline-block mt-2 text-sm text-indigo-600 hover:underline"
        >
          Take Action
        </a>
      </div>
    </div>
  </div>
</template>
