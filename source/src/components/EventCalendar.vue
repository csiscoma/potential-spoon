<script setup>
import { ref, computed } from "vue";
import {
  format,
  parseISO,
  startOfMonth,
  addMonths,
  subMonths,
  isSameDay,
  isAfter,
} from "date-fns";
import MonthCalendar from "./MonthCalendar.vue";
import AddEventModal from "./AddEventModal.vue";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
} from "@heroicons/vue/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

const today = new Date();
const currentMonth = ref(startOfMonth(today));
const nextMonth = ref(addMonths(currentMonth.value, 1));
const selectedDate = ref(format(today, "yyyy-MM-dd"));
const isModalOpen = ref(false);
const selectedEvent = ref(null);
const usedColors = new Set();

const colors = [
  "#F87171",
  "#FBBF24",
  "#34D399",
  "#60A5FA",
  "#A78BFA",
  "#F472B6",
  "#FACC15",
];

function goToPreviousMonth() {
  currentMonth.value = subMonths(currentMonth.value, 1);
  nextMonth.value = subMonths(currentMonth.value, 1);
}

function goToNextMonth() {
  currentMonth.value = addMonths(currentMonth.value, 1);
  nextMonth.value = addMonths(currentMonth.value, 1);
}

const meetings = [
  {
    id: 1,
    name: "All-Day Event",
    start: "All Day",
    startDatetime: "2024-11-09",
    end: "All Day",
    endDatetime: "2024-11-09",
    allDay: true,
  },
  {
    id: 2,
    name: "Team Meeting",
    start: "10:00 AM",
    startDatetime: "2024-11-12T10:00",
    end: "11:00 AM",
    endDatetime: "2024-11-12T11:00",
  },
  {
    id: 3,
    name: "Client Call",
    start: "1:00 PM",
    startDatetime: "2024-11-15T13:00",
    end: "2:00 PM",
    endDatetime: "2024-11-15T14:00",
  },
];

meetings.forEach((meeting) => {
  meeting.initial = meeting.name.charAt(0).toUpperCase();
  meeting.bgColor = assignUniqueColor();
});

function assignUniqueColor() {
  for (const color of colors) {
    if (!usedColors.has(color)) {
      usedColors.add(color);
      return color;
    }
  }
  // Reset used colors if all colors are taken
  usedColors.clear();
  return assignUniqueColor();
}

function selectDate(date) {
  selectedDate.value = date;
}

function editEvent(meeting) {
  selectedEvent.value = meeting;
  openModal();
}

const formattedSelectedDate = computed(() =>
  format(parseISO(selectedDate.value), "MMMM d, yyyy"),
);

function formatDate(datetime) {
  return format(parseISO(datetime), "MMMM d, yyyy");
}

function formatDateTime(datetime) {
  return format(parseISO(datetime), "h:mm a");
}

const filteredMeetings = computed(() => {
  return meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), parseISO(selectedDate.value)),
  );
});

const upcomingMeetings = computed(() => {
  const result = meetings
    .filter((meeting) => isAfter(parseISO(meeting.startDatetime), today))
    .sort((a, b) => parseISO(a.startDatetime) - parseISO(b.startDatetime))
    .slice(0, 3);

  result.forEach((meeting) => {
    if (!usedColors.has(meeting.bgColor)) {
      usedColors.add(meeting.bgColor);
    } else {
      meeting.bgColor = assignUniqueColor();
    }
  });

  return result;
});

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
  selectedEvent.value = null;
}

function handleEventSubmit(eventData) {
  console.log("Event Data Submitted:", eventData);
  closeModal();
}
</script>

<template>
  <div class="flex items-end mt-6 md:mx-72">
    <p class="text-xl font-semibold text-pretty text-gray-950 sm:text-1xl">
      Stellar Schedule...
    </p>
    <p
      class="mt-2 ml-4 text-4xl font-semibold tracking-tight text-indigo-600 tracking- text-pretty sm:text-5xl"
    >
      Event Galaxy
    </p>
  </div>
  <div
    class="flex flex-col px-12 py-6 mt-6 bg-white border shadow rounded-xl md:mx-60 md:flex-row md:divide-x md:divide-gray-200"
  >
    <!-- Calendars Side -->
    <div class="md:w-2/3 md:flex md:pr-8">
      <div class="w-full md:flex">
        <div class="md:flex-1 md:pr-4">
          <div class="relative">
            <div class="flex items-center justify-center">
              <button
                @click="goToPreviousMonth"
                type="button"
                class="flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">Previous months</span>
                <ChevronLeftIcon class="w-5 h-5" aria-hidden="true" />
              </button>
              <h2
                class="flex-auto text-sm font-semibold text-center text-gray-900"
              >
                {{ format(currentMonth, "MMMM yyyy") }}
              </h2>
            </div>
            <MonthCalendar
              :month="currentMonth"
              :selected-date="selectedDate"
              @select-date="selectDate"
              :meetings="meetings"
            />
          </div>
        </div>
        <div class="md:flex-1 md:pl-4">
          <div class="relative">
            <div class="flex items-center justify-center">
              <h2
                class="flex-auto text-sm font-semibold text-center text-gray-900"
              >
                {{ format(nextMonth, "MMMM yyyy") }}
              </h2>
              <button
                @click="goToNextMonth"
                type="button"
                class="flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span class="sr-only">Next months</span>
                <ChevronRightIcon class="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <MonthCalendar
              :month="nextMonth"
              :selected-date="selectedDate"
              @select-date="selectDate"
              :meetings="meetings"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Events Side -->
    <section class="mt-12 md:w-1/3 md:mt-0 md:pl-8">
      <h2 class="text-base font-semibold text-gray-900">
        Schedule for
        <time :datetime="selectedDate">{{ formattedSelectedDate }}</time>
      </h2>
      <ol class="mt-4 space-y-1 text-sm text-gray-500">
        <li
          v-for="meeting in filteredMeetings"
          :key="meeting.id"
          class="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100"
        >
          <div
            :style="{ backgroundColor: meeting.bgColor }"
            class="flex items-center justify-center flex-none w-10 h-10 text-lg font-semibold text-white rounded-full"
          >
            {{ meeting.initial }}
          </div>
          <div class="flex-auto">
            <p class="font-semibold text-gray-900">{{ meeting.name }}</p>
            <p class="mt-0.5">
              <time :datetime="meeting.startDatetime">{{ meeting.start }}</time>
              - <time :datetime="meeting.endDatetime">{{ meeting.end }}</time>
            </p>
            <p class="text-sm text-gray-600">
              {{ formatDate(meeting.startDatetime) }}
            </p>
          </div>
          <Menu
            as="div"
            class="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
          >
            <MenuButton
              class="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600"
            >
              <EllipsisVerticalIcon class="w-6 h-6" aria-hidden="true" />
            </MenuButton>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5"
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      @click="editEvent(meeting)"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-2 text-sm',
                      ]"
                    >
                      Edit
                    </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-2 text-sm',
                      ]"
                    >
                      Remove
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </li>
        <li v-if="filteredMeetings.length === 0" class="text-gray-500">
          No events for this day.
        </li>
      </ol>

      <h2 class="mt-8 text-base font-semibold text-gray-900">
        Upcoming Events
      </h2>
      <ol class="mt-4 space-y-1 text-sm text-gray-500">
        <li
          v-for="meeting in upcomingMeetings"
          :key="meeting.id"
          class="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100"
        >
          <div
            :style="{ backgroundColor: meeting.bgColor }"
            class="flex items-center justify-center flex-none w-10 h-10 text-lg font-semibold text-white rounded-full"
          >
            {{ meeting.initial }}
          </div>
          <div class="flex-auto">
            <p class="font-semibold text-gray-900">{{ meeting.name }}</p>
            <p class="mt-0.5">
              <time :datetime="meeting.startDatetime">{{
                formatDateTime(meeting.startDatetime)
              }}</time>
              -
              <time :datetime="meeting.endDatetime">{{
                formatDateTime(meeting.endDatetime)
              }}</time>
            </p>
            <p class="text-sm text-gray-600">
              {{ formatDate(meeting.startDatetime) }}
            </p>
          </div>
          <Menu
            as="div"
            class="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
          >
            <MenuButton
              class="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600"
            >
              <EllipsisVerticalIcon class="w-6 h-6" aria-hidden="true" />
            </MenuButton>
            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5"
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      @click="editEvent(meeting)"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-2 text-sm',
                      ]"
                    >
                      Edit
                    </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full text-left px-4 py-2 text-sm',
                      ]"
                    >
                      Remove
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </li>
        <li v-if="upcomingMeetings.length === 0" class="text-gray-500">
          No upcoming events.
        </li>
      </ol>

      <button
        type="button"
        class="w-full px-3 py-2 mt-8 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow hover:bg-indigo-500"
        @click="openModal"
      >
        Add event
      </button>

      <AddEventModal
        :isOpen="isModalOpen"
        :eventData="selectedEvent"
        @close="closeModal"
        @submit="handleEventSubmit"
      />
    </section>
  </div>
</template>

<style scoped>
section {
  overflow: visible;
}
</style>
