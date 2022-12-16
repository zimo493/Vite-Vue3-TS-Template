/**
 * @Author: @HuYunfei
 * @Email：2081182432@qq.com
 * @Date: 2022-12-16 10:41:04
 * @LastEditors: @HuYunfei
 * @LastEditTime: 2022-12-16 11:03:15
 * @Description: Menu Permission Management
 */

import router from '@/router';
import { message } from '@/utils/message';
import { NProgressStart, NProgressStop } from '@/utils/common';
import { storageSession } from '@/utils/storage'

const modules = import.meta.glob("../views/**/*.vue");
const whiteList = ['/login']; /* 白名单 */

/** 全局前置守卫 */
router.beforeEach((to, from, next) => {
  NProgressStart() // 进度条开始
  const token = storageSession.getItem('token'); // 根据情况获取token
  if (token) {
    if (to.path === '/login') {
      message('已是登录状态，无需重复登录！', 'info');
      next({ path: '/' });
      NProgressStop()
    } else {
      // 动态生成生成菜单...

      /* router.addRoute({
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import("@/views/error/404.vue"),
        meta: { title: "页面找不到", },
      }); // 最后在添加404页面，防止刷新页面找不到
      next({ ...to, replace: true }); // 确保addRoutes已完成 */
      next()
    }
  } else {
    // 没有token
    if (whiteList.includes(to.path)) {
      next(); // 在免登录白名单，直接进入
    } else {
      next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
      NProgressStop()
    }
  }
})
/** 全局后置守卫 */
router.afterEach(to => {
  document.title = to.meta.title as string;
  NProgressStop() // 进度条结束
});