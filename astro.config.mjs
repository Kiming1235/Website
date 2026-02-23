// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import customErrorOverlayPlugin from "./vite-error-overlay-plugin.js";

export default defineConfig({
  output: "server",
  integrations: [tailwind(), react()],
  vite: {
    plugins: [customErrorOverlayPlugin()],
  },
  devToolbar: {
    enabled: false,
  },
  image: {
    domains: ["www.daehancargocrane.com"],
  },
  server: {
    allowedHosts: true,
    host: true,
  },
});
