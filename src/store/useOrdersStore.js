import { watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { provideApolloClient } from '@vue/apollo-composable'
import { defineStore } from 'pinia'
import { FETCH_ORDER_QUERY } from '../graphql/order'
import apolloClient from '../utils/apollo'
import useTemplateStore from './useTemplateStore'

provideApolloClient(apolloClient)

const useOrderStore = defineStore('orderStore', {
	state: () => ({
		orders: [],
	}),
	getters: {},
	actions: {
		async fetchOrders(payload = {}) {
			const templateStore = useTemplateStore()

			templateStore.setLoading(true)

			const { result, onResult, onError, loading } = useQuery(
				FETCH_ORDER_QUERY,
				{
					startDate: payload.startDate,
					endDate: payload.endDate,
				},
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
					this.orders = data.orders
					resolve(true)
				})

				onError((error) => {
					// TODO Show Error Dialog
					console.log(error)
					resolve(false)
				})
			})
		},
	},
})

export default useOrderStore
