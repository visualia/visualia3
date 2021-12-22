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
  title: "Visualia",
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
          text: "Get started",
          children: [
            {
              text: "Introduction",
              link: "/",
            },
            { text: "Vite", link: "get-started/vite" },
            { text: "Vitepress", link: "get-started/vitepress" },
            { text: "ESM in HTML", link: "get-started/esm" },
            { text: "Globals in HTML", link: "get-started/global" },
            { text: "Node", link: "get-started/node" },
          ],
        },
      ],
    },
  },
});
