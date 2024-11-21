<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen bg-transparent">
    <Header />
    <div id="app" class="flex-grow bg-transparent">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
