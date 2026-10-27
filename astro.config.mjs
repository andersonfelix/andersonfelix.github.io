// @ts-check
import { defineConfig } from "astro/config";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import icon from "astro-icon";
import { fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  site: "https://www.andersonfelix.com.br",
  fonts: [
    {
      provider: fontProviders.google(),
      name: "IBM Plex Mono",
      cssVariable: "--font-ibm-plex-mono",
      weights: [400, 700],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "Noto Serif",
      cssVariable: "--font-noto-serif",
      weights: [400, 700],
      styles: ["normal"],
    },
  ],
  vite: {
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist(">= 0.25%")),
      },
    },
    build: {
      cssMinify: "lightningcss",
    },
  },
});
