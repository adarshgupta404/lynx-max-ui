// rsbuild.config.ts
import path from "path";
import { pluginTailwindCSS } from "rsbuild-plugin-tailwindcss";

export default {
  plugins: [pluginTailwindCSS()],
  source: {
    alias: {
      "@": path.resolve(__dirname),
    },
    entries: [
      {
        name: "index",
        entry: "./src/index.ts", // <- ✅ This is your main entry point!
      },
    ],
  },
  output: {
    distPath: {
      root: "./dist",
    },
    cleanDistPath: true,
    filename: {
      js: "[name].js",
    },
  },
};
