import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { sentryVitePlugin } from "@sentry/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "jsm-xt",
      project: "javascript-react",
      options: {
        telemetry: true,
      },
    }),
  ],

  build: {
    sourcemap: true,
  },
});
