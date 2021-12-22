//@ts-ignore
import DefaultTheme from "vitepress/theme";
import { Visualia } from "../../../src/lib.es";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Visualia);
  },
};
