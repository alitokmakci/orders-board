import gql from 'graphql-tag'

export const LOGIN_MUTATION = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password)
	}
`

export const FETCH_USER_QUERY = gql`
	query {
		user {
			name
			email
			contact
			address1
			address2
			address3
			city
			country
			postCode
			telephone
			telephone2
			mobile
			fax
			companyName
			contactName
			contactEmail
			userCode
			creditLimit
			currencyCode
			marketingEmailEnabled
			marketingSmsEnabled
			marketingNotificationEnabled
			showAllPricesIncludingVat
		}
	}
`

export const LOGOUT_MUTATION = gql`
	mutation logout {
		logout
	}
`
