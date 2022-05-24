import { createMarkdownRenderer, defineConfig } from "vitepress";

function VisualiaMarkdownIt(md) {
  const defaultFence = md.renderer.rules.fence;
  const mdRenderer = createMarkdownRenderer("");
  md.renderer.rules.fence = function () {
    const [tokens, idx, _options, _env, _slf] = arguments;
    const info = tokens[idx].info.trim();
    if (info === "md") {
      const { html } = mdRenderer.render(tokens[idx].content || "");
      return `
        ${defaultFence(...arguments)}
        ${html}
      `;
    }
    return defaultFence(...arguments);
  };

  const defaultHtmlBlock = md.renderer.rules.html_block;

  md.renderer.rules.html_block = function () {
    const [tokens, idx, _options, _env, _slf] = arguments;

    // return String(tokens[idx].content).startsWith("<v-")
    //   ? `<p>${defaultHtmlBlock(...arguments)}</p>`
    //   : defaultHtmlBlock(...arguments);

    return defaultHtmlBlock(...arguments);
  };

  return md;
}

export default defineConfig({
  title: "Fachwerk",
  vue: { reactivityTransform: true },
  markdown: {
    //@ts-ignore
    breaks: true,
    config: (md) => md.use(VisualiaMarkdownIt),
  },
  themeConfig: {
    repo: "visualia/visualia3",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Page source",
    sidebar: {
      "/": [
        {
          text: "Guide",
          children: [
            {
              text: "Introduction",
              link: "/",
            },
            {
              text: "Get Started",
              children: [
                { text: "Vite", link: "guide/get-started/vite" },
                { text: "Vitepress", link: "guide/get-started/vitepress" },
                { text: "Slidev", link: "guide/get-started/slidev" },
                { text: "JS module ", link: "guide/get-started/esm" },
                { text: "JS global", link: "guide/get-started/global" },
                { text: "Node", link: "guide/get-started/node" },
                { text: "Deno", link: "guide/get-started/deno" },
              ],
            },
          ],
        },
        {
          text: "Components",
          children: ["slider", "math"].map((c) => ({
            text: `v-${c}`,
            link: `/components/v-${c}`,
          })),
        },
        {
          text: "Utilities",
          children: [
            {
              text: "Array",
              children: [{ text: "range", link: "/utils/array/range" }],
            },
            {
              text: "Color",
              children: [{ text: "hsl", link: "/utils/color/hsl" }],
            },
            {
              text: "Point",
              children: [
                { text: "rectpoints", link: "/utils/point/rectpoints" },
              ],
            },
            {
              text: "Path",
              children: [
                { text: "linepath", link: "/utils/path/linepath" },
                { text: "circlepath", link: "/utils/path/circlepath" },
              ],
            },
          ],
        },
        {
          text: "Experiments",
          children: [
            {
              text: "v-pdf",
              link: "/components/v-pdf",
            },
          ],
        },
      ],
    },
  },
});
