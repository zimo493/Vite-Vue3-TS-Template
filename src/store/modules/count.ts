/* demo */
import { defineStore } from "pinia";
export const countStore = defineStore('demo', {
  state: (): { count: number } => {
    return {
      count: 0
    }
  },

  actions: {
    changeCount() {
      this.count++
    }
  },
  getters: {
  },
  persist: {
    enabled: true,
    strategies: [{
      // storage: localStorage,
      // paths: ['token', 'userInfo']
    }]
  },
})