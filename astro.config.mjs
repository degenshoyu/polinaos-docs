// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "PolinaOS v0.1 Alpha",
      favicon: "/favicon.ico",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/degenshoyu",
        },
      ],
      sidebar: [
        {
          label: "Overview",
          items: [
            { label: "Introduction", slug: "introduction" },
            { label: "Tokenomics", slug: "token-economy" },
            { label: "Modules", slug: "modules" },
            { label: "Workflow", slug: "workflow" },
          ],
        },
        {
          label: "Modules",
          collapsed: true,
          items: [],
        },
      ],
    }),
  ],
});
