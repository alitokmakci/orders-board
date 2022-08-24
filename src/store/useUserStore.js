import Cookies from 'js-cookie'
import { defineStore } from 'pinia'
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

provideApolloClient(apolloClient)

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
		 * Login user
		 * @param {Object} token
		 */
		async login(payload) {
			const { mutate, onDone, onError } = useMutation(
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
				onDone((res) => {
					const token = res.data.login
					Cookies.set('GQ_TOKEN', token)

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
			const { onResult, onError } = useQuery(FETCH_USER_QUERY)

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

		/**
		 * Logout current user
		 */
		async logout() {
			const { mutate, onDone, onError } = useMutation(LOGOUT_MUTATION)

			mutate()

			return new Promise((resolve, reject) => {
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
