import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const alphabet = Array.from(Array(26), (v, k) => {
	return String.fromCharCode(k + 65);
});
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: alphabet,
  server: {
    host: true,
    strictPort: true,
    port: 5713
  }
})
