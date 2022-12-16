import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue"
/** 
 * path: "/login",                  // 路由地址
 * name: "Login",                   // 设定路由的名字
 * component:                       // 组件路径
 * meta: { 
 *    title: "登录",                // 设置该路由在页签和面包屑中展示的名字
 *    activeMenu: '/user/list'      // 当路由设置了该属性，则会高亮相对应的侧边栏
 * }
 */
const routes: Array<RouteRecordRaw> = [{
  path: "/",
  name: "Index",
  component: Layout,
  meta: {
    title: "首页",
  },
}, {
  path: "/redirect/:path(.*)",
  name: "redirect",
  component: () => import("@/views/redirect/index.vue"),
  meta: {
    title: "刷新中 ...",
  },
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
}, {
  path: "/login",
  name: "Login",
  component: () => import("@/views/login.vue"),
  meta: {
    title: "登录",
  },
}, {
  path: "/401",
  name: "401",
  component: () => import("@/views/error/401.vue"),
  meta: {
    title: "401",
  },
}, {
  path: "/redirect/:path(.*)",
  name: "redirect",
  component: () => import("@/views/redirect/index.vue"),
  meta: {
    title: "刷新中...",
  },
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
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;