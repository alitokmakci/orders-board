import { watch, computed } from 'vue'
import { provideApolloClient, useQuery } from '@vue/apollo-composable'
import { defineStore } from 'pinia'
import { FETCH_PRODUCT_QUERY } from '../graphql/product'
import apolloClient from '../utils/apollo'
import useTemplateStore from './useTemplateStore'

provideApolloClient(apolloClient)

const useProductStore = defineStore('productStore', {
	state: () => ({
		products: [],
		count: 0,
	}),
	getters: {},
	actions: {
		/**
		 * Fetch products
		 */
		async fetchProducts(payload) {
			const templateStore = useTemplateStore()

			templateStore.setLoading(true)

			const { result, onResult, onError, loading } = useQuery(
				FETCH_PRODUCT_QUERY,
				{
					index: payload.index,
					limit: payload.limit,
					sortBy: payload.sortBy,
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
					this.count = data.products.count
					this.products = data.products.products
					resolve(true)
				})

				onError((error) => {
					toaster.error(error.message)
					resolve(false)
				})
			})
		},
	},
})

export default useProductStore
