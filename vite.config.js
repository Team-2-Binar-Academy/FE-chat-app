import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        "process.env.VITE_VERCEL_BACKEND_API": JSON.stringify(process.env.VITE_VERCEL_BACKEND_API),
        "process.env.VITE_VERCEL_GOOGLE_CLIENT_ID": JSON.stringify(
            process.env.VITE_VERCEL_GOOGLE_CLIENT_ID
        ),
    },
});
