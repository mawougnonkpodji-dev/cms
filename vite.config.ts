import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "three"],
  },
  build: {
    target: "es2020",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/three") || id.includes("node_modules/@react-three")) {
            return "three";
          }
          if (id.includes("node_modules/react-router")) {
            return "router";
          }
          if (id.includes("node_modules/lucide-react")) {
            return "icons";
          }
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/")) {
            return "vendor";
          }
        },
      },
    },
  },
  optimizeDeps: {
    /**
     * @react-three/fiber importe des named exports depuis react-reconciler/constants (CJS).
     * Sans pré-bundle, Vite échoue avec : « does not provide an export named ConcurrentRoot ».
     */
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "@react-three/fiber",
      "three",
      "react-reconciler",
      "react-reconciler/constants",
    ],
  },
});
