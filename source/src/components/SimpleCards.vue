<script setup>
import { EllipsisVerticalIcon } from "@heroicons/vue/20/solid";
import data from "../assets/data.json";

// Get background color based on project data
const getBgColor = (bgColorClass) => {
  switch (bgColorClass) {
    case "bg-pink-600":
      return "#DB2777";
    case "bg-purple-600":
      return "#9333EA";
    case "bg-yellow-500":
      return "#EAB308";
    case "bg-green-500":
      return "#22C55E";
    default:
      return "#E5E7EB";
  }
};

const projects = data.projects;
</script>

<template>
  <div class="mb-12">
    <h2 class="mb-4 text-lg font-semibold text-gray-900">Project Overview</h2>
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      <li
        v-for="project in projects"
        :key="project.name"
        class="flex col-span-1 bg-white rounded-lg shadow"
      >
        <div
          :style="{ backgroundColor: getBgColor(project.bgColor) }"
          class="flex items-center justify-center flex-shrink-0 w-16 text-sm font-medium text-white rounded-l-lg"
        >
          {{ project.initials }}
        </div>
        <div
          class="flex items-center justify-between flex-1 bg-white rounded-r-lg"
        >
          <div class="px-4 py-2">
            <a
              :href="project.href"
              class="block font-medium text-gray-900 hover:text-indigo-600"
              >{{ project.name }}</a
            >
            <p class="text-sm text-gray-500">{{ project.members }} Members</p>
          </div>
          <div class="pr-4">
            <button
              type="button"
              class="inline-flex items-center justify-center w-8 h-8 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <EllipsisVerticalIcon class="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
