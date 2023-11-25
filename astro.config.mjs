import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  site: "https://astro-tutorial-pragmaticpat.netlify.app/",
  integrations: [preact()]
});