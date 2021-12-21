import { Plugin, reactive } from "vue";
import VTest from "./components/VTest.vue";
import VSlider from "./components/VSlider.vue";
const v = reactive({});

export const Visualia: Plugin = {
  install: (app) => {
    app.component("VTest", VTest);
    app.component("VSlider", VSlider);
    app.config.globalProperties.v = v;
  },
};
