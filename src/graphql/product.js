import gql from 'graphql-tag'

export const FETCH_PRODUCT_QUERY = gql`
	query fetchProducts($index: Int!, $limit: Int!, $sortBy: String) {
		products(index: $index, limit: $limit, sortBy: $sortBy) {
			count
			products {
				id
				code
				stockStatus {
					available
				}
				vat
				itemType
				price {
					price {
						price
					}
				}
				isNew
				barcode1
				barcode2
				catalogCode
			}
		}
	}
`
