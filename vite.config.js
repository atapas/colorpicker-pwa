import { defineConfig } from 'vite';  
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({  
  plugins: [  
  VitePWA({  
      registerType: 'prompt',  
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],  
      manifest: {  
        name: 'Color Picker',  
        short_name: 'ColorPicker',  
        description: 'A PWA Color Picker made using Vite',  
        theme_color: '#ffffff',  
        start_url: '/',  
        icons: [  
          {  
            src: 'pwa-192x192.png',  
            sizes: '192x192',  
            type: 'image/png',  
          },  
          {  
            src: 'pwa-512x512.png',  
            sizes: '512x512',  
            type: 'image/png',  
          },  
          {  
            src: 'pwa-512x512.png',  
            sizes: '512x512',  
            type: 'image/png',  
            purpose: 'any maskable',  
          },  
        ],  
      },  
    }),  
  ],  
});