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



import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://dev-api.realroadies.com", // Change this to your real backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

