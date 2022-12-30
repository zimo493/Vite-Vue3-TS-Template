import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue"
/** 
 * path: "/user",                   // 路由地址
 * name: "User",                    // 设定路由的名字
 * component:                       // 组件路径
 * meta: {                          // 路由原元信息
 *    title: "用户列表",             // 设置该路由在页签和面包屑中展示的名字
 *    activeMenu: '/user/list'      // 当路由设置了该属性，则会高亮相对应的侧边栏
 * }
 */
const routes: Array<RouteRecordRaw> = [{
  path: "/",
  name: "Index",
  component: Layout,
  meta: { title: "首页", },
}, {
  path: "/401",
  name: "401",
  component: () => import("@/views/error/401.vue"),
  meta: { title: "401", },
}, {
  path: "/404",
  name: "404",
  component: () => import("@/views/error/404.vue"),
  meta: { title: "404", },
}, {
  path: "/redirect/:path(.*)",
  name: "redirect",
  component: () => import("@/views/redirect/index.vue"),
  meta: { title: "刷新中...", },
}
  /* {
  path: "",
  name: 'Layout',
  component: Layout,
  redirect: "/index",
  children: [{
    path: "/index",
    name: "Index",
    component: () => import("@/views/index.vue"),
    meta: {
      title: "首页",
    },
  }]
} */]

// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = createRouter.prototype.push;
createRouter.prototype.push = function push(location: any, onResolve: any, onReject: any) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err: any) => {
    console.log("路由异常", err);
  });
};

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 刷新时，滚动条位置还原
  //scrollBehavior: () => ({ left: 0, top: 0 }),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition ? savedPosition : { top: 0 };
  },
});

export default router;