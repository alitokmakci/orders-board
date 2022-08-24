import gql from 'graphql-tag'

export const FETCH_ORDER_QUERY = gql`
	query fetchOrders($startDate: String, $endDate: String) {
		orders(startDate: $startDate, endDate: $endDate) {
			id
			orderName
			orderDate
			status
			deliveryDate
			total
			subTotal
			vatTotal
		}
	}
`
