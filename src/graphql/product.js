import gql from 'graphql-tag'

export const FETCH_PRODUCT_QUERY = gql`
	query fetchProducts($index: Int!, $limit: Int!) {
		products(index: $index, limit: $limit) {
			count
			products {
				id
				code
				stockStatus {
					available
				}
				itemType
				price {
					price {
						price
					}
				}
			}
		}
	}
`
