<script setup>
import { ref } from "vue";

// Mock data for open tasks
const openTasks = ref([
  {
    id: 1,
    title: "Design homepage wireframe",
    dueDate: "2024-11-25",
    status: "In Progress",
    boardLink: "/board/homepage",
  },
  {
    id: 2,
    title: "Fix user authentication bug",
    dueDate: "2024-11-22",
    status: "Pending",
    boardLink: "/board/authentication",
  },
  {
    id: 3,
    title: "Prepare Q4 performance report",
    dueDate: "2024-11-30",
    status: "Not Started",
    boardLink: "/board/reports",
  },
]);
</script>

<template>
  <div>
    <!-- Title -->
    <h2 class="mb-2 text-xl font-semibold text-gray-800">Open Tasks</h2>
    <p class="mb-4 text-sm text-gray-600">
      View all your open tasks below and click on a task to open the relevant
      board for updates.
    </p>

    <!-- Task List -->
    <div class="space-y-4">
      <div
        v-for="task in openTasks"
        :key="task.id"
        class="p-4 transition bg-white rounded-lg shadow hover:shadow-lg"
      >
        <!-- Task Info -->
        <h3 class="text-lg font-medium text-gray-800">{{ task.title }}</h3>
        <p class="text-sm text-gray-500">
          <strong>Status:</strong> {{ task.status }}
        </p>
        <p class="text-sm text-gray-500">
          <strong>Due Date:</strong> {{ task.dueDate }}
        </p>

        <!-- Link to Board -->
        <a
          :href="task.boardLink"
          class="inline-block mt-2 text-sm text-indigo-600 hover:underline"
        >
          Go to Board
        </a>
      </div>
    </div>
  </div>
</template>
