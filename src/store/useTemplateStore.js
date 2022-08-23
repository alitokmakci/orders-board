import Cookies from 'js-cookie'
import { defineStore } from 'pinia'

const useTemplateStore = defineStore('templateStore', {
	state: () => ({
		darkMode: false,
		sidebarOpen: true,
	}),
	getters: {
		isDarkModeEnabled(state) {
			return state.dark
		},
		isSidebarOpen(state) {
			return state.sidebarOpen
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
		/**
		 * Toggle Sidebar
		 */
		toggleSidebar() {
			this.sidebarOpen = !this.sidebarOpen
		},
	},
})

export default useTemplateStore