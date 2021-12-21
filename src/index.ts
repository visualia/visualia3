import { Plugin } from "vue";
import Test from "./components/Test.vue";

export const Visualia: Plugin = {
  install: (app) => {
    app.component("Test", Test);
  },
};
