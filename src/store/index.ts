/**
 * @Author: @HuYunfei
 * @Email：2081182432@qq.com
 * @Date: 2022-12-16 10:20:04
 * @LastEditors: @HuYunfei
 * @LastEditTime: 2022-12-16 10:25:15
 * @Description: Pinia
 */

import { createPinia, PiniaPluginContext } from "pinia"; // 导入pinia
import piniaPersist from 'pinia-plugin-persist'; // 持久化插件
/* import { storageLocal } from "@/utils/storage";
import { Names } from "./store/store-names"; */
// pinia持久化插件
/*export const piniaPlugin = (option?: { key?: string }) => {
  return (context: PiniaPluginContext) => {
    const { store } = context;
    const data = storageLocal.getItem(`${option?.key ?? Names.Key_Default_Prefix} ${store.$id}`);
    store.$subscribe(() => {
      storageLocal.setItem(`${option?.key ?? Names.Key_Default_Prefix}${store.$id}`, toRaw(store.$state));
    });
    return { ...data, };
  };
};*/
// pinia.use(piniaPlugin());
const pinia = createPinia();
pinia.use(piniaPersist);
export default pinia