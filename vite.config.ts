/**
 * @Author: @HuZimo
 * @Email：2081182432@qq.com
 * @Date: 2022-12-16 10:10:43
 * @LastEditors: @HuZimo
 * @LastEditTime: 2022-12-16 10:26:15
 * @Description: viteConfigFile content
 */
import { loadEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import WindiCSS from 'vite-plugin-windicss'; /** 引入windicss */
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 获取环境配置文件
  const env = loadEnv(mode, process.cwd());
  const { VITE_APP_BASE_API, VITE_APP_ENV } = env;
  return {
    base: VITE_APP_ENV === "production" ? "/" : "/",
    plugins: [
      vue(),
      AutoImport({
        imports: ['vue'],
        resolvers: [
          ElementPlusResolver(), //自动导入element plus相关函数
        ]
      }),
      Components({
        resolvers: [
          ElementPlusResolver(), //自动导入element plus组件
        ],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "/assets": "./src/assets",
      },
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
    },
    server: {
      host: "0.0.0.0",
      port: 5370, // 端口号
      open: true, // 是否自动打开
      /* proxy: {
        [VITE_APP_BASE_API]: {
          target: "http://localhost:8080",
          ws: true,
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp('^' + VITE_APP_BASE_API), '')
        },
      }, */
    },
  }
})