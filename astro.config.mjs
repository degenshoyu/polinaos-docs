// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "PolinaOS v0.1 Alpha",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/polinaos",
        },
      ],
      sidebar: [
        {
          label: "Overview",
          items: [
            { label: "Introduction", slug: "introduction" },
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
