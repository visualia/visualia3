type Link = {
  text: string;
  link?: string;
  children?: Link[];
};

export const sidebar: Link[] = [
  {
    text: "Introduction",
    link: "/",
  },
  {
    text: "Get Started",
    children: [
      { text: "Vite", link: "/get-started/vite" },
      { text: "Vitepress", link: "/get-started/vitepress" },
    ],
  },
];
