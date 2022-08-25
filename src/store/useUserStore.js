import { watch } from 'vue'
import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

import {
	useQuery,
	provideApolloClient,
	useMutation,
} from '@vue/apollo-composable'
import {
	FETCH_USER_QUERY,
	LOGIN_MUTATION,
	LOGOUT_MUTATION,
} from '../graphql/user'
import apolloClient from '../utils/apollo'
import useTemplateStore from './useTemplateStore'

provideApolloClient(apolloClient)

const useUserStore = defineStore('userStore', {
	state: () => ({
		user: {},
	}),
	getters: {
		getToken() {
			return Cookies.get('GQ_TOKEN')
		},
	},
	actions: {
		/**
		 * Login user
		 * @param {Object} token
		 */
		async login(payload) {
			const templateStore = useTemplateStore()
			templateStore.setLoading(true)

			const { mutate, onDone, onError, loading } = useMutation(
				LOGIN_MUTATION,
				() => ({
					variables: {
						email: payload.email,
						password: payload.password,
					},
				})
			)

			mutate()

			return new Promise((resolve, reject) => {
				watch(
					() => loading,
					(value) => {
						templateStore.setLoading(value)
					},
					{
						immediate: true,
					}
				)

				onDone((res) => {
					const token = res.data.login
					Cookies.set('GQ_TOKEN', token, { expires: 15 })

					this.loggedIn = true
					resolve(true)
				})

				onError((e) => {
					reject(JSON.parse(e.message).message)
				})
			})
		},

		/**
		 * Fetch user from api with given token
		 *
		 * @param {String} token
		 */
		async fetchUser() {
			const templateStore = useTemplateStore()

			templateStore.setLoading(true)

			const { onResult, onError, loading } = useQuery(
				FETCH_USER_QUERY,
				{},
				{
					fetchPolicy: 'network-only',
				}
			)

			return new Promise((resolve, reject) => {
				watch(
					() => loading,
					(value) => {
						templateStore.setLoading(value)
					},
					{
						immediate: true,
					}
				)

				onResult(({ data }) => {
					this.user = data.user

					resolve(true)
				})

				onError(() => {
					Cookies.remove('GQ_TOKEN')

					resolve(false)
				})
			})
		},

		/**
		 * Logout current user
		 */
		async logout() {
			const templateStore = useTemplateStore()

			templateStore.setLoading(true)

			const { mutate, onDone, onError, loading } =
				useMutation(LOGOUT_MUTATION)

			mutate()

			return new Promise((resolve, reject) => {
				watch(
					() => loading,
					(value) => {
						templateStore.setLoading(value)
					},
					{
						immediate: true,
					}
				)

				onDone((res) => {
					if (res) {
						Cookies.remove('GQ_TOKEN')

						resolve(true)
					}

					resolve(false)
				})

				onError((e) => {
					reject(JSON.parse(e.message).message)
				})
			})
		},
	},
})

export default useUserStore
