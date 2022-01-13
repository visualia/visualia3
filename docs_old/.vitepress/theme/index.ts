//@ts-ignore
import DefaultTheme from "vitepress/theme";
import { Visualia } from "../../../src/lib.es";
import "./style.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Visualia);
  },
};
