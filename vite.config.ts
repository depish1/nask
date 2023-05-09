import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "Api", replacement: path.resolve(__dirname, "src/api") },
      { find: "Components", replacement: path.resolve(__dirname, "src/components") },
      { find: "Contexts", replacement: path.resolve(__dirname, "src/contexts") },
      { find: "Enums", replacement: path.resolve(__dirname, "src/enums") },
      { find: "Helpers", replacement: path.resolve(__dirname, "src/helpers") },
      { find: "Hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "Icons", replacement: path.resolve(__dirname, "src/icons") },
      { find: "Pages", replacement: path.resolve(__dirname, "src/pages") },
      { find: "Schemas", replacement: path.resolve(__dirname, "src/schemas") },
      { find: "Styles", replacement: path.resolve(__dirname, "src/styles") },
      { find: "Types", replacement: path.resolve(__dirname, "src/types") },
      { find: "src", replacement: path.resolve(__dirname, "src") },
    ],
  },
});
