// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': 'https://dev-api.realroadies.com', // Adjust to your backend's local URL
//     }
//   }
  
// })



import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_BASE_URL || "https://dev-api.realroadies.com",
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});