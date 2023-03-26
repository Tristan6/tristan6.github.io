// import Vue from "vue";

export interface IRoutesNames {
  splash: string;
  portfolio: string;
  events: string;
}

const routesNames: Readonly<IRoutesNames> = {
  splash: "splash",
  portfolio: "portfolio",
  events: "events",
};

// declare module "vue/types/vue" {
//   // eslint-disable-next-line @typescript-eslint/interface-name-prefix
//   interface Vue {
//     $routesNames: IRoutesNames;
//   }
// }

export default routesNames;
