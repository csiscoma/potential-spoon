<script setup>
import ProjectSuggestions from "../components/ProjectSuggestions.vue";
import OpenTasks from "../components/OpenTasks.vue";
import CommentsThreads from "../components/CommentsThreads.vue";
import OnboardingActionItems from "../components/OnboardingActionItems.vue";
import ProjectSearch from "../components/ProjectSearch.vue";
import ControlPanel from "../components/ControlPanel.vue";
import FollowedProjects from "../components/FollowedProjects.vue";
import SlideInPanel from "../components/SlideInPanel.vue";

// Import the composable
import { useWidgets } from "../composables/useWidgets";

const { widgets, isWidgetVisible } = useWidgets();
</script>

<template>
  <div class="flex flex-col min-h-screen bg-transparent">
    <div class="flex-grow">
      <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <section
          v-if="isWidgetVisible('projectSearch')"
          class="p-4 bg-white/90 rounded-lg shadow"
        >
          <ProjectSearch />
        </section>
      </div>

      <div
        class="grid grid-cols-1 gap-6 px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:grid-cols-3"
      >
        <div class="space-y-6">
          <section
            v-if="isWidgetVisible('projectSuggestions')"
            class="p-4 bg-white/90 rounded-lg shadow"
          >
            <ProjectSuggestions />
          </section>
          <section
            v-if="isWidgetVisible('onboardingActionItems')"
            class="p-4 bg-white/90 rounded-lg shadow"
          >
            <OnboardingActionItems />
          </section>
        </div>

        <div class="space-y-6 lg:col-span-2">
          <section
            v-if="isWidgetVisible('openTasks')"
            class="p-4 bg-white/90 rounded-lg shadow"
          >
            <OpenTasks />
          </section>
          <section
            v-if="isWidgetVisible('commentsThreads')"
            class="p-4 bg-white/90 rounded-lg shadow"
          >
            <CommentsThreads />
          </section>
        </div>
      </div>

      <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <section
          v-if="isWidgetVisible('followedProjects')"
          class="relative p-4 bg-white/90 rounded-lg shadow"
        >
          <FollowedProjects />
          <SlideInPanel />
        </section>
      </div>
    </div>

    <!-- Floating Control Panel -->
    <div>
      <ControlPanel />
    </div>
  </div>
</template>
