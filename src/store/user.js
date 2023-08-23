/*
 * @Author: zdh
 * @Date: 2023-07-14 11:03:25
 * @LastEditTime: 2023-07-31 13:33:11
 * @Description: 
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    accountId: 0,
		selectedFileId: ''
  }),
  getters: {
  },
  actions: {
		setFileId: val => {
			this.selectedFileId = val
		},

    getModulesArrOfTask: val => {
      console.log('======================================')
      console.log('这里getModulesArrOfTask还没写')
    }
  }
})
