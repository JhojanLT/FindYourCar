import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    //host: '192.168.0.7', // Permite conexiones desde cualquier IP
    port: 5173, // Puerto predeterminado (asegúrate que no esté bloqueado)
    strictPort: true, // Evita que Vite cambie el puerto automáticamente
  },
});
