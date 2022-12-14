import Cookies from 'js-cookie'
import useTemplateStore from '../store/useTemplateStore'
import useUserStore from '../store/useUserStore'

export const initializeApp = async () => {
	return new Promise(async (resolve, reject) => {
		// Check if dark mode cookie exist before mount the app
		if (Cookies.get('dark')) {
			useTemplateStore().setDarkMode(Cookies.get('dark') === 'true')
		}

		// Check if user token cookie exist
		if (Cookies.get('GQ_TOKEN')) {
			const result = await useUserStore().fetchUser()

			if (!result) {
				reject()
			}
		}

		resolve()
	})
}
