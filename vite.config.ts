import fs from "fs";
import path from "path";
import { BuildOptions, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pages from "vite-plugin-pages";
import markdown from "vite-plugin-md";
import matter from "gray-matter";
import ViteFonts from "vite-plugin-fonts";

const build: Record<string, BuildOptions> = {
  production: null,
  es: {
    emptyOutDir: false,
    lib: {
      formats: ["es"],
      entry: path.resolve(__dirname, "src/lib.es.ts"),
      name: "visualia",
      fileName: (format) => {
        return {
          es: "visualia.js",
        }[format];
      },
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  cjs: {
    emptyOutDir: false,
    lib: {
      formats: ["cjs", "umd"],
      entry: path.resolve(__dirname, "src/lib.cjs.ts"),
      name: "visualia",
      fileName: (format) => {
        return {
          cjs: "visualia.cjs",
          umd: "visualia.umd.js",
        }[format];
      },
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
};

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue({ reactivityTransform: true, include: [/\.vue$/, /\.md$/] }),
      pages({
        extensions: ["vue", "md"],
        dirs: "docs",
        extendRoute(route) {
          const routePath = path.resolve(__dirname, route.component.slice(1));
          const md = fs.readFileSync(routePath, "utf-8");
          const { data } = matter(md);
          route.meta = Object.assign(route.meta || {}, { frontmatter: data });
          return route;
        },
      }),
      markdown({ markdownItOptions: { typographer: false } }),
      //@ts-ignore
      ViteFonts.default({
        google: {
          families: [
            {
              name: "IBM Plex Sans",
              styles: "ital,wght@0,400;0,500;0,700;1,400;1,500;1,700",
            },
            { name: "Cousine" },
          ],
        },
      }),
    ],
    build: build[mode],
  };
});
