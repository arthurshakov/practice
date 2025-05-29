import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import * as path from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode !== "production";

  return {
    plugins: [
      react({
        babel: {
          plugins: isDev ? ["check-prop-types"] : [],
        },
      }),
      svgr()
    ],
    resolve: {
      alias: {
        '@shared': path.resolve(__dirname, 'src/shared'),
      }
    }
  };
});
