/**
 * @Author: @HuYunfei
 * @Email：2081182432@qq.com
 * @Date: 2022-12-16 10:29:48
 * @LastEditors: @HuYunfei
 * @LastEditTime: 2022-12-16 11:14:32
 * @Description: Message Prompt
 */
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'

/** 提示信息 */
export const message = (message: string, type: any = "success") => ElMessage({ message, type });

/** 消息确认框 */
export const messageBox = (content: string, type: any = "warning", title: string = '提示') => {
  return ElMessageBox.confirm(content, title, {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type,
  })
}

/** 
 * @消息通知 
 * message: 提示内容
 * title: 标题(默认值：提示)
 * type: 通知类型(默认值: 警告)
 * duration: 关闭时间(默认值: 3秒关闭 [为0则不会自动关闭])
 * position: 弹出位置(默认值: 右上角)
 * html: 是否使用 HTML 片段作为正文内容(默认值: false 否)
*/
export const notification = (message: string = '', title: string = '提示', type: any = "warning", duration: number = 3000, position: any = 'top-right', html: boolean = false) => {
  ElNotification({ title, message, type, duration, position, dangerouslyUseHTMLString: html })
}