/**
 * @Author: @HuYunfei
 * @Email：2081182432@qq.com
 * @Date: 2022-12-16 10:25:14
 * @LastEditors: @HuYunfei
 * @LastEditTime: 2022-12-16 11:28:37
 * @Description: MainEntryFile content
 */
import { createApp } from 'vue'
import './style.css'
// import '@/utils/permissions'; // 开发过程中使用

import 'element-plus/dist/index.css'; // element plus样式
// import 'element-plus/theme-chalk/dark/css-vars.css'; // 暗黑模式主题
import * as ElementPlusIconsVue from '@element-plus/icons-vue'; // 导入所有element icon图标

import App from './App.vue';
import router from '@/router';
import pinia from '@/store';

const app = createApp(App);
// 全局注册element-plus icon图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(pinia).use(router).mount('#app');

console.log('%c我们要迈向未来,而不是沉湎于过去.🌞\nWe are going forward to the future, not back into the past.🎈', "color:#409eff;");