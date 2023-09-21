import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Add PostCSS configuration
import path from "path";
import postcssConfig from "./postcss.config";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: postcssConfig,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"), // This is where you specify the "@" symbol as an alias for the root directory.
    },
  },
});
