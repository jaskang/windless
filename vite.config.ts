import mdx from '@mdx-js/rollup'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      enforce: 'pre',
      ...mdx({}),
    },
    react(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
