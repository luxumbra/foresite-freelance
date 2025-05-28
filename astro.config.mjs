// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon()],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },

    plugins: [tailwindcss()],
  },
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});