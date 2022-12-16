/**
 * @Author: @HuYunfei
 * @Email：2081182432@qq.com
 * @Date: 2022-12-16 11:26:47
 * @LastEditors: @HuYunfei
 * @LastEditTime: 2022-12-16 11:32:49
 * @Description: System Local Storage
 */

interface storageFunType {
  getItem(key: string): any;
  setItem(key: string, value: any): void;
  removeItem(key: string): void;
  clear(): void;
}

class sessionStorageProxy implements storageFunType {
  private storage: storageFunType;
  constructor(storageModel: storageFunType) {
    this.storage = storageModel;
  }
  getItem(key: string): any {
    return JSON.parse(this.storage.getItem(key)) || null;
  }
  setItem(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }
  removeItem(key: string): void {
    this.storage.removeItem(key);
  }
  clear(): void {
    this.storage.clear();
  }
}
// 本地储存,继承即可
class localStorageProxy extends sessionStorageProxy implements storageFunType {
  constructor(localStorage: storageFunType) {
    super(localStorage);
  }
}

export const storageSession = new sessionStorageProxy(sessionStorage); // 调用系统的session
export const storageLocal = new localStorageProxy(localStorage);
