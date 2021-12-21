import { Plugin } from "vue";
import VTest from "./components/VTest.vue";
import VSlider from "./components/VSlider.vue";

export const Visualia: Plugin = {
  install: (app) => {
    app.component("VTest", VTest);
    app.component("VSlider", VSlider);
  },
};
