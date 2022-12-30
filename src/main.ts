/**
 * @Author: @HuZimo
 * @Email：2081182432@qq.com
 * @Date: 2022-12-16 10:25:14
 * @LastEditors: @HuZimo
 * @LastEditTime: 2022-12-16 11:28:37
 * @Description: MainEntryFile content
 */
import { createApp } from 'vue'
import './style.css' /* 开发中复制src/assets/styles/base.css替换掉./style.css默认文件中的内容 并删除base.css文件 可在src/assets/styles/comm.less中编写项目中公共样式 */
// import '@/utils/permissions'; // 路由权限校验
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

/* 全局组件 */
import pagination from "./components/Pagination/index.vue"; /* 分页组件 */
app.component("pagination", pagination);

app.use(pinia).use(router).mount('#app');

console.log('%c我们要迈向未来,而不是沉湎于过去.🌞\nWe are going forward to the future, not back into the past.🎈', "color:#409eff;");