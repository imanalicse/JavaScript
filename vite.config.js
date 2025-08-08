import {defineConfig} from "vite";

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',  // Output build files to dist/ (one level above src/)
    },
    server: {
        open: true,    // Opens browser automatically when you run dev server
    }
})