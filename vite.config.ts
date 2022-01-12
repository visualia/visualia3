import path from "path";
import { BuildOptions, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pages from "vite-plugin-pages";
import markdown from "vite-plugin-md";
import matter from "gray-matter";
import fs from "fs";

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
        dirs: "docs2",
        exclude: ["**/components/*.vue"],
        extendRoute(route) {
          const routePath = path.resolve(__dirname, route.component.slice(1));
          const md = fs.readFileSync(routePath, "utf-8");
          const { data } = matter(md);
          route.meta = Object.assign(route.meta || {}, { frontmatter: data });
          return route;
        },
      }),
      markdown(),
    ],
    build: build[mode],
  };
});
