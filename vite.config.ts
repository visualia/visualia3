import { BuildOptions, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

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
          cjs: "visualia.cjs.js",
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
    plugins: [vue({ reactivityTransform: true })],
    build: build[mode],
  };
});
