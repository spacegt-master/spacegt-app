// vite.config.mts
import Components from "file:///E:/Development%20Project/Vue/spacegt/node_modules/.pnpm/unplugin-vue-components@0.27.5_@babel+parser@7.26.9_@nuxt+kit@3.15.4_rollup@4.30.1_vue@3.5.13_typescript@5.6.3_/node_modules/unplugin-vue-components/dist/vite.js";
import Vue from "file:///E:/Development%20Project/Vue/spacegt/node_modules/.pnpm/@vitejs+plugin-vue@5.2.1_vite@5.4.11_@types+node@22.10.7_sass-embedded@1.83.4_sass@1.77.8__vue@3.5.13_typescript@5.6.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Vuetify, { transformAssetUrls } from "file:///E:/Development%20Project/Vue/spacegt/node_modules/.pnpm/vite-plugin-vuetify@2.0.4_vite@5.4.11_@types+node@22.10.7_sass-embedded@1.83.4_sass@1.77.8__v_nttnlxsglhcrjllidqe5gf4yju/node_modules/vite-plugin-vuetify/dist/index.mjs";
import ViteFonts from "file:///E:/Development%20Project/Vue/spacegt/node_modules/.pnpm/unplugin-fonts@1.3.1_@nuxt+kit@3.15.4_vite@5.4.11_@types+node@22.10.7_sass-embedded@1.83.4_sass@1.77.8_/node_modules/unplugin-fonts/dist/vite.mjs";
import VueRouter from "file:///E:/Development%20Project/Vue/spacegt/node_modules/.pnpm/unplugin-vue-router@0.10.9_rollup@4.30.1_vue-router@4.5.0_vue@3.5.13_typescript@5.6.3___vue@3.5.13_typescript@5.6.3_/node_modules/unplugin-vue-router/dist/vite.js";
import { defineConfig } from "file:///E:/Development%20Project/Vue/spacegt/node_modules/.pnpm/vite@5.4.11_@types+node@22.10.7_sass-embedded@1.83.4_sass@1.77.8/node_modules/vite/dist/node/index.js";
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_import_meta_url = "file:///E:/Development%20Project/Vue/spacegt/vite.config.mts";
var vite_config_default = defineConfig({
  plugins: [
    VueRouter(),
    Vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: "src/styles/settings.scss"
      }
    }),
    Components(),
    ViteFonts({
      google: {
        families: [
          {
            name: "Roboto",
            styles: "wght@100;300;400;500;700;900"
          },
          {
            name: "Russo One",
            styles: "wght@100;300;400;500;700;900"
          }
        ]
      }
    })
  ],
  define: { "process.env": {} },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"]
  },
  server: {
    host: "0.0.0.0",
    port: 3336
  },
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern-compiler"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcRGV2ZWxvcG1lbnQgUHJvamVjdFxcXFxWdWVcXFxcc3BhY2VndFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcRGV2ZWxvcG1lbnQgUHJvamVjdFxcXFxWdWVcXFxcc3BhY2VndFxcXFx2aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0RldmVsb3BtZW50JTIwUHJvamVjdC9WdWUvc3BhY2VndC92aXRlLmNvbmZpZy5tdHNcIjsvLyBQbHVnaW5zXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiO1xuaW1wb3J0IFZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgVnVldGlmeSwgeyB0cmFuc2Zvcm1Bc3NldFVybHMgfSBmcm9tIFwidml0ZS1wbHVnaW4tdnVldGlmeVwiO1xuaW1wb3J0IFZpdGVGb250cyBmcm9tIFwidW5wbHVnaW4tZm9udHMvdml0ZVwiO1xuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tIFwidW5wbHVnaW4tdnVlLXJvdXRlci92aXRlXCI7XG5cbi8vIFV0aWxpdGllc1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gXCJub2RlOnVybFwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIFZ1ZVJvdXRlcigpLFxuICAgIFZ1ZSh7XG4gICAgICB0ZW1wbGF0ZTogeyB0cmFuc2Zvcm1Bc3NldFVybHMgfSxcbiAgICB9KSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVldGlmeWpzL3Z1ZXRpZnktbG9hZGVyL3RyZWUvbWFzdGVyL3BhY2thZ2VzL3ZpdGUtcGx1Z2luI3JlYWRtZVxuICAgIFZ1ZXRpZnkoe1xuICAgICAgYXV0b0ltcG9ydDogdHJ1ZSxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBjb25maWdGaWxlOiBcInNyYy9zdHlsZXMvc2V0dGluZ3Muc2Nzc1wiLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKCksXG4gICAgVml0ZUZvbnRzKHtcbiAgICAgIGdvb2dsZToge1xuICAgICAgICBmYW1pbGllczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUm9ib3RvXCIsXG4gICAgICAgICAgICBzdHlsZXM6IFwid2dodEAxMDA7MzAwOzQwMDs1MDA7NzAwOzkwMFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJSdXNzbyBPbmVcIixcbiAgICAgICAgICAgIHN0eWxlczogXCJ3Z2h0QDEwMDszMDA7NDAwOzUwMDs3MDA7OTAwXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGRlZmluZTogeyBcInByb2Nlc3MuZW52XCI6IHt9IH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAXCI6IGZpbGVVUkxUb1BhdGgobmV3IFVSTChcIi4vc3JjXCIsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gICAgZXh0ZW5zaW9uczogW1wiLmpzXCIsIFwiLmpzb25cIiwgXCIuanN4XCIsIFwiLm1qc1wiLCBcIi50c1wiLCBcIi50c3hcIiwgXCIudnVlXCJdLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjAuMC4wLjBcIixcbiAgICBwb3J0OiAzMzM2LFxuICB9LFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBzYXNzOiB7XG4gICAgICAgIGFwaTogXCJtb2Rlcm4tY29tcGlsZXJcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVcsMEJBQTBCO0FBQzVDLE9BQU8sZUFBZTtBQUN0QixPQUFPLGVBQWU7QUFHdEIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxlQUFlLFdBQVc7QUFUaUosSUFBTSwyQ0FBMkM7QUFZck8sSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsVUFBVTtBQUFBLElBQ1YsSUFBSTtBQUFBLE1BQ0YsVUFBVSxFQUFFLG1CQUFtQjtBQUFBLElBQ2pDLENBQUM7QUFBQTtBQUFBLElBRUQsUUFBUTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLFFBQ04sWUFBWTtBQUFBLE1BQ2Q7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxJQUNYLFVBQVU7QUFBQSxNQUNSLFFBQVE7QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixRQUFRO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFFBQVE7QUFBQSxVQUNWO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRLEVBQUUsZUFBZSxDQUFDLEVBQUU7QUFBQSxFQUM1QixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsSUFDQSxZQUFZLENBQUMsT0FBTyxTQUFTLFFBQVEsUUFBUSxPQUFPLFFBQVEsTUFBTTtBQUFBLEVBQ3BFO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osS0FBSztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
