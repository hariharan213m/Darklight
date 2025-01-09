import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true, // Redirect all SPA routes to index.html
  },
});
