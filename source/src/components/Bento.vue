<template>
  <div class="py-6 bg-transparent sm:py-8">
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <!-- Header Section -->
      <h2 class="font-semibold text-indigo-600 text-base/7">
        No more duplicate effort...
      </h2>
      <p
        class="mt-4 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl"
      >
        All Our Project Ideas in One Place
      </p>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 gap-8 sm:mt-12 lg:grid-cols-3">
        <!-- Bento Card: Search -->
        <div class="relative">
          <div
            class="absolute inset-px bg-white rounded-lg lg:rounded-bl-[2rem]"
          ></div>
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]"
          >
            <img
              class="object-cover object-left h-80"
              src="https://tailwindui.com/plus/img/component-images/bento-01-speed.png"
              alt="Search"
            />
            <div class="p-6">
              <h3 class="font-semibold text-indigo-600 text-sm/4">Search</h3>
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">
                Is your Idea on the List?
              </p>
              <p class="mt-2 text-sm text-gray-600">
                Not sure if your Project Idea is already on the list? Search for
                key words that describe what you want to do. If it's not there,
                you can add it.
              </p>
            </div>
          </div>
        </div>

        <!-- Bento Card: Integrations -->
        <div class="relative">
          <div class="absolute bg-white rounded-lg inset-px"></div>
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]"
          >
            <img
              class="object-cover object-center h-80"
              src="https://tailwindui.com/plus/img/component-images/bento-01-integrations.png"
              alt="Integrations"
            />
            <div class="p-6">
              <h3 class="font-semibold text-indigo-600 text-sm/4">
                Integrations
              </h3>
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">
                Share your favorite tools
              </p>
              <p class="mt-2 text-sm text-gray-600">
                Search for projects based on your favorite tools and
                integrations.
              </p>
            </div>
          </div>
        </div>

        <!-- Bento Card: Submissions -->
        <div class="relative">
          <div
            class="absolute inset-px bg-white rounded-lg max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]"
          ></div>
          <div
            class="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]"
          >
            <img
              class="object-cover object-center h-80"
              src="https://tailwindui.com/plus/img/component-images/bento-01-network.png"
              alt="Submissions"
            />
            <div class="p-6">
              <h3 class="font-semibold text-indigo-600 text-sm/4">
                Submissions
              </h3>
              <p class="mt-2 text-lg font-medium tracking-tight text-gray-950">
                Your Idea is Important
              </p>
              <p class="mt-2 text-sm text-gray-600">
                Do you have an Idea that could make work easier and more
                efficient? Let's see if we can make it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
