import DefaultTheme from "vitepress/theme";
import { Visualia } from "../../../src";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Visualia);
  },
};
