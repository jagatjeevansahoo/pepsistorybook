import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // This will be your package output
    lib: {
      entry: 'src/main.tsx', // Your main Storybook entry
      name: 'MyStorybook',
      formats: ['es']
    },
    rollupOptions: {
      // Externalize dependencies if needed
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
