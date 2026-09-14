import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig(({ command }) => ({
  ssr: {
    noExternal: command === "build" ? true : undefined,
    external: ["cloudflare:workers"],
  },
  build: {
    rollupOptions: { external: [/^cloudflare:/] },
  },
  plugins: [tanstackStart({ server: { entry: "server" } }), react(), tsconfigPaths()],
}));
