import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Separate vendor libraries
        },
      },
    },
  },
  server: {
    historyApiFallback: true, // Redirect all SPA routes to index.html
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
