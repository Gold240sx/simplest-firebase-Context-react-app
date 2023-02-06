import { defineConfig } from "vite"
import { resolve } from "path"
import react from "@vitejs/plugin-react"
import glob from "fast-glob"

export default defineConfig({
    plugins: [react()],
    assetsDir: "assets",
    base: "/",
    outDir: "dist",
    publicPath: "/",
    entries: () => glob.sync("./src/pages/**/*.jsx"),
})
