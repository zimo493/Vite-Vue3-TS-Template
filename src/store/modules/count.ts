/* demo */
import {defineStore} from "pinia";

export const countStore = defineStore('demo', {
  state: (): { count: number } => {
    return {
      count: 1
    }
  },

  actions: {
    changeCount() {
      this.count += this.count
    }
  },
  getters: {},
  /* 开启本地存储 */
  /*persist: {
    enabled: true,
    strategies: [{
      // storage: localStorage,
      paths: ['count'], // 需要存储的数据
    }]
  },*/
})