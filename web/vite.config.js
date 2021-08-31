import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import styleImport from 'vite-plugin-style-import'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    styleImport(
      {
        libs: [
          {
            libraryName: 'zarm',
            esModule: true,
            resolveStyle: (name) => {
              return `zarm/es/${name}/style/css`;
            }
          }
        ]
      }
    )
  ],
  css: {
    modules: {
      localsConvention: 'dashesOnly'
    },
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // src 路径
      '@views': path.resolve(__dirname, 'src/views'), // src 路径
      '@components': path.resolve(__dirname, 'src/components'), // src 路径
      '@utils': path.resolve(__dirname, 'src/utils') // src 路径
    }
  },
  server: {
    port: 1000,
    open: true
  }
})
