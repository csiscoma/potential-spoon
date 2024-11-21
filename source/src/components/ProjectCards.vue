<script setup>
const products = [
  {
    id: 1,
    name: "Project Tracker",
    category: "VUE3/VITE",
    description: "Track and manage your projects seamlessly.",
    status: "Active",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-01.jpg",
    imageAlt: "Project tracker dashboard screenshot.",
  },
  {
    id: 2,
    name: "Profile Builder",
    category: "REACT",
    description: "Create and customize user profiles.",
    status: "Active",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-02.jpg",
    imageAlt: "Profile builder application screenshot.",
  },
  {
    id: 3,
    name: "Timeline Tool",
    category: "VUE3",
    description: "Visualize and plan project timelines.",
    status: "Active",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-03.jpg",
    imageAlt: "Timeline visualization tool screenshot.",
  },
  {
    id: 4,
    name: "Resource Manager",
    category: "VITE",
    description: "Optimize and allocate resources effectively.",
    status: "Active",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-page-05-related-product-04.jpg",
    imageAlt: "Resource manager dashboard screenshot.",
  },
];
</script>

<template>
  <div class="p-6 rounded-lg shadow-lg bg-white/60">
    <h2 class="text-xl font-semibold text-gray-900">Projects</h2>
    <p class="mt-2 text-sm text-gray-700">
      Explore our project portfolio with detailed descriptions and statuses.
    </p>

    <!-- Project Cards Grid -->
    <div
      class="grid grid-cols-1 mt-6 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="product in products"
        :key="product.id"
        class="relative flex flex-col p-4 bg-white rounded-lg shadow group hover:shadow-lg"
      >
        <div
          class="overflow-hidden bg-gray-200 rounded-lg aspect-w-4 aspect-h-3"
        >
          <img
            :src="product.imageSrc"
            :alt="product.imageAlt"
            class="object-cover object-center"
          />
          <div
            class="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 opacity-0 group-hover:opacity-100"
          >
            <button
              class="px-4 py-2 font-medium text-gray-900 bg-white bg-opacity-75 rounded"
            >
              View Project
            </button>
          </div>
        </div>
        <div class="flex-1 mt-4">
          <h3 class="text-lg font-semibold text-gray-900">
            {{ product.name }}
          </h3>
          <p class="mt-1 text-sm text-gray-700">{{ product.description }}</p>
        </div>
        <div class="flex justify-between mt-4 text-sm text-gray-500">
          <span>{{ product.category }}</span>
          <span>{{ product.status }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
