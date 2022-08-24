import Cookies from 'js-cookie'
import { defineStore } from 'pinia'
import { useQuery } from '@vue/apollo-composable'
import { FETCH_USER_QUERY } from '../graphql/user'
import { provideApolloClient } from '@vue/apollo-composable'
import apolloClient from '../utils/apollo'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { computed, watchEffect } from 'vue'

const useUserStore = defineStore('userStore', {
	state: () => ({
		user: {},
	}),
	getters: {
		getToken() {
			return Cookies.get('token')
		},
	},
	actions: {
		/**
		 * Fetch user from api with given token
		 *
		 * @param {String} token
		 */
		async fetchUser() {
			provideApolloClient(apolloClient)

			const { onResult, onError } = useQuery(FETCH_USER_QUERY)

			const user = computed(() => result.value)

			return new Promise((resolve, reject) => {
				onResult(({ data }) => {
					this.user = data.user
					resolve(true)
				})

				onError((error) => {
					Cookies.remove('GQ_TOKEN')
					resolve(false)
				})
			})
		},
	},
})

export default useUserStore
