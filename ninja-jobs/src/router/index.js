import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Jobs from "../views/Jobs/Jobs.vue";
import JobDetails from "@/views/Jobs/JobDetails.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/jobs",
      name: "Jobs",
      component: Jobs,
    },
    {
      path: "/jobs/:id",
      name: "JobDetails",
      component: JobDetails,
      // props: true,
    },
    //Redirect
    {
      path: "/all-jobs",
      redirect: "/jobs",
    },
    //catchall 404
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound, 
    },
  ],
});

export default router;
