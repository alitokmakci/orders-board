import Cookies from 'js-cookie'
import { defineStore } from 'pinia'

const useUserStore = defineStore('userStore', {
	state: () => ({}),
	getters: {},
	actions: {
		/**
		 * Fetch user from api with given token
		 *
		 * @param {String} token
		 */
		fetchUser() {},
	},
})

export default useUserStore
