/**
 * @Author: @HuZimo
 * @Email：2081182432@qq.com
 * @Date: 2022-12-16 11:07:06
 * @LastEditors: @HuZimo
 * @LastEditTime: 2022-12-16 11:25:37
 * @Description: Axios Method encapsulation
 */

import axios, { AxiosResponse } from "axios";
import { storageSession } from "./storage";
import { messageBox, message, notification } from "@/utils/message"

// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 20000, // 超时时间
});
// 是否显示重新登录
let isLogin = false;
// request拦截器
service.interceptors.request.use((config: any) => {
  let token = storageSession.getItem('token'); // 根据情况获取token
  if (token) config.headers!["token"] = token; // 让每个请求携带自定义token
  return config;
}, error => {
  console.log(error);
  return Promise.reject(new Error(error));
})

// 响应拦截器
service.interceptors.response.use((res: AxiosResponse) => {
  // 未设置状态码则默认成功状态
  const code = res.data.code || 200;
  const msg = res.data.msg;
  // 二进制数据则直接返回
  if (res.request.responseType === "blob" || res.request.responseType === "arraybuffer") return res.data;
  if (code === 401) {
    if (!isLogin) {
      isLogin = true;
      messageBox("登录状态已过期，您可以继续留在该页面，或者重新登录", "warning", "系统提示").then(() => {
        isLogin = false;
        location.href = "/login";
      }).catch(() => {
        isLogin = false;
      });
    }
    return Promise.reject("无效的会话，或者会话已过期，请重新登录。");
  } else if (code === 500) {
    message(msg);
    return Promise.reject(new Error(msg));
  } else if (code !== 200) {
    notification(msg);
    return Promise.reject("error");
  } else {
    return res.data;
  }
}, error => {
  console.log('error: ', error);
  notification(error.response.data.msg, 'error');
  return Promise.reject(error);
});
export default service