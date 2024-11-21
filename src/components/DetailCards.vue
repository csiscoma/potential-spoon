<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { EllipsisHorizontalIcon } from "@heroicons/vue/20/solid";
import data from "../assets/data.json";

const statuses = data.statuses;
const clients = data.clients;
</script>

<template>
  <div>
    <h2 class="mb-4 text-lg font-semibold text-gray-900">
      Project Detail Cards
    </h2>
    <ul role="list" class="grid grid-cols-1 gap-6 lg:grid-cols-4">
      <li
        v-for="client in clients"
        :key="client.id"
        class="overflow-hidden bg-white rounded-lg shadow"
      >
        <div class="flex items-center gap-4 p-4 border-b bg-gray-50">
          <img
            :src="client.imageUrl"
            :alt="client.name"
            class="flex-none object-cover w-12 h-12 rounded-lg ring-1 ring-gray-900/10"
          />
          <div class="text-sm font-medium text-gray-900">
            {{ client.name }}
          </div>
          <Menu as="div" class="relative ml-auto">
            <MenuButton class="p-2 text-gray-400 hover:text-gray-500">
              <EllipsisHorizontalIcon class="w-5 h-5" aria-hidden="true" />
            </MenuButton>
            <MenuItems
              class="absolute right-0 w-32 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black/5"
            >
              <MenuItem>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  View
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Edit
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
        <dl class="px-4 py-3 text-sm divide-y divide-gray-200">
          <div class="flex justify-between py-2">
            <dt class="text-gray-500">Last invoice</dt>
            <dd>
              <time :datetime="client.lastInvoice.dateTime">{{
                client.lastInvoice.date
              }}</time>
            </dd>
          </div>
          <div class="flex justify-between py-2">
            <dt class="text-gray-500">Amount</dt>
            <dd class="flex items-center gap-2">
              <div class="font-medium text-gray-900">
                {{ client.lastInvoice.amount }}
              </div>
              <span
                :class="[
                  statuses[client.lastInvoice.status],
                  'px-2 py-1 text-xs font-medium rounded-md',
                ]"
              >
                {{ client.lastInvoice.status }}
              </span>
            </dd>
          </div>
        </dl>
      </li>
    </ul>
  </div>
</template>
