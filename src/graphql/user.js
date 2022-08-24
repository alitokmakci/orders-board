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
		}
	}
`

export const LOGOUT_MUTATION = gql`
	mutation logout {
		logout
	}
`
