import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import styleImport from 'vite-plugin-style-import'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    styleImport({
      libs: [{
        library: 'zarm',
        esModule: true,
        resolveStyle: (name)=> {
          return `zarm/es/${name}/style/css`
        }
      }]
    })
  ],
  css: {
    modules: {
      localsConvention: 'dashesOnly'
    },
    preprocessorOptions: {
      less: {
        // 支持内链JavaScript
        javascriptEnabled: true
      }
    }
  }
})
