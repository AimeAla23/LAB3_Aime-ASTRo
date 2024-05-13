import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";


export default defineConfig({
  output: "server",
  integrations: [react()],
  adapter: node({
    mode: "http",
  }),
  routes: [
    { src: '/blog', dest: '/blog' }, // Esto redirige la ruta principal a /blog
    { src: '/', dest: '/blog' },
  ],
});
