import requests from "@/utils/request";
import { AxiosPromise } from "axios";

/* 登录示例 */
export function login(data: { username: string; password: string; }): AxiosPromise {
  return requests({
    url: "/user/login",
    method: "post",
    data,
  });
}