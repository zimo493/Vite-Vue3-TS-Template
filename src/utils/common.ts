/**
 * @Author: @HuZimo
 * @Email：2081182432@qq.com
 * @Date: 2022-12-16 10:35:12
 * @LastEditors: @HuZimo
 * @LastEditTime: 2022-12-16 10:40:27
 * @Description: Common methods
 */

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

/** 进度条开始 */
export const NProgressStart = () => NProgress.start()
/** 进度条结束 */
export const NProgressStop = () => NProgress.done()

// 首字母大写
export const titleCase = (str: string) => str.replace(/( |^)[a-z]/g, L => L.toUpperCase())
// 下划转驼峰
export const camelCase = (str: string) => str.replace(/_[a-z]/g, str1 => str1.substr(-1).toUpperCase())