import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // necessary to have any custom utilities, self-hosted fonts, etc.
  // astro injects a base.css that is just the basic tailwind stuff if you don't do this
  // but you have to import base.css into every file with this setting
  // which is sad
  integrations: [react(), tailwind({ applyBaseStyles: false })]
});