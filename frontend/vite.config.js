import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from any IP address
    port: 3000, // You can specify your desired port here
    open: true, // Automatically open the app in the browser
  },
});
