import { Plugin, reactive } from "vue";
import VTest from "./components/VTest.vue";
import VSlider from "./components/VSlider.vue";

type V = Record<string, string | number | boolean>;
export const v = reactive<V>({});

export const Visualia: Plugin = {
  install: (app) => {
    app.component("VTest", VTest);
    app.component("VSlider", VSlider);
    app.config.globalProperties.v = v;
  },
};
