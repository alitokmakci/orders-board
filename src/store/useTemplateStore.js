import Cookies from 'js-cookie'
import { defineStore } from 'pinia'

const useTemplateStore = defineStore('templateStore', {
	state: () => ({
		darkMode: false,
	}),
	getters: {
		isDarkModeEnabled(state) {
			return state.dark
		},
	},
	actions: {
		/**
		 * Toggle or set darkMode attrbiute
		 *
		 * @param {bool} payload
		 */
		setDarkMode(payload = null) {
			if (payload === null) {
				payload = !this.darkMode
			}

			this.darkMode = payload

			Cookies.set('dark', payload, { expires: 365 })

			if (payload) {
				document.documentElement.classList.add('dark')
			} else {
				document.documentElement.classList.remove('dark')
			}
		},
	},
})

export default useTemplateStore
