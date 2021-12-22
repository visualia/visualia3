import { BuildOptions, defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const build: Record<string, BuildOptions> = {
  production: null,
  es: {
    lib: {
      formats: ["es"],
      entry: path.resolve(__dirname, "src/lib.ts"),
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
    lib: {
      formats: ["cjs", "umd"],
      entry: path.resolve(__dirname, "src/lib.ts"),
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
    plugins: [vue({ reactivityTransform: true })],
    build: build[mode],
  };
});
