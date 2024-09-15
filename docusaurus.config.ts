import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "مستندات",
  tagline: "مستندات مون شاید به درد کسی خورد",
  favicon: "img/logo.webp",
  url: "https://alirrah.github.io/",
  baseUrl: "/document/",
  organizationName: "alirrah",
  projectName: "document",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "fa",
    locales: ["fa"],
    localeConfigs: {
      fa: {
        direction: "rtl",
        htmlLang: "fa-IR",
      },
    },
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: "img/logo.webp",
    navbar: {
      title: "مستندات",
      logo: {
        alt: "لوگو مستندات",
        src: "img/logo.webp",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "فهرست",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
