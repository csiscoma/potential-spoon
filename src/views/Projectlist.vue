<script setup>
import ProjectCards from "../components/ProjectCards.vue";
import SortableList from "../components/SortableList.vue";
</script>

<template>
  <div class="min-h-screen py-8 bg-transparent">
    <div class="mx-auto space-y-4 max-w-7xl">
      <SortableList />
      <ProjectCards />
    </div>
  </div>
</template>
