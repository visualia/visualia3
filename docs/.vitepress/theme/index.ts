import DefaultTheme from "vitepress/theme";
import { Visualia } from "../../../src/lib";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Visualia);
  },
};
