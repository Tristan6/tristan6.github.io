import { RouteRecordRaw } from "vue-router";

import Splash from "@/views/SplashView.vue";
import Portfolio from "@/views/PortfolioView.vue";
import NotFound from "@/components/NotFound.vue";
import RoutesNames from "./routesNames";

const routes: RouteRecordRaw[] = [
{
  path: "/",
  name: RoutesNames.splash,
  component: Splash,
},
{
  path: "/portfolio",
  name: RoutesNames.portfolio,
  component: Portfolio,
},
{
  path: "/events",
  name: RoutesNames.events,
  component: () =>
  import(/* webpackChunkName: "about" */ "../views/EventsView.vue"),
},
// To serve for real not found paths (rather than manual reload paths)
{
  path: '/:pathMatch(.*)*',
  name: RoutesNames.notFound,
  component: NotFound,
},
];

export default routes;
export { RoutesNames };
