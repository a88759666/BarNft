import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' 

// https://vitejs.dev/config/
export default defineConfig({
  base: '/barNft/',
  plugins: [
    react(),
    svgr(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
    // alias:{
    //   '@': path.resolve(__dirname, 'src')
    // }
   },
})
