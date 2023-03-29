import { RouteRecordRaw } from "vue-router";

import Splash from "@/views/SplashView.vue";
import Portfolio from "@/views/PortfolioView.vue";
import Events from "@/views/EventsView.vue";
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
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  //   import(/* webpackChunkName: "about" */ "../views/Portfolio.vue"),
},
{
  path: "/events",
  name: RoutesNames.events,
  component: Events,
},
// To serve for real not found paths (rather than manual reload paths)
// { path: '*', component: NotFoundComponent }
];

export default routes;
export { RoutesNames };
