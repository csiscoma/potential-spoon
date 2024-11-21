import { createRouter, createWebHistory } from "vue-router";
import Splashpad from "../views/Splashpad.vue";
import Team from "../views/Team.vue";
import Projectlist from "../views/Projectlist.vue";
import Calendar from "../views/Calendar.vue";
import Dashboard from "../views/Dashboard.vue";
import Demo from "../views/Demo.vue";

const routes = [
  {
    path: "/",
    name: "splashpad",
    component: Splashpad,
  },
  {
    path: "/contributions",
    name: "contributions",
    component: Team,
  },
  {
    path: "/projectlist",
    name: "projectlist",
    component: Projectlist,
  },
  {
    path: "/calendar",
    name: "calendar",
    component: Calendar,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/demo",
    name: "demo",
    component: Demo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
