import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
	ApolloLink,
} from '@apollo/client/core'
import Cookies from 'js-cookie'

// HTTP connection to the API
const httpLink = createHttpLink({
	// You should use an absolute URL here
	uri: 'https://simplisaleshw.cotunnel.com/graphql',
})

const authLink = new ApolloLink((operation, forward) => {
	console.log('burada')
	// add the authorization to the headers
	const token = Cookies.get('GQ_TOKEN')
	operation.setContext({
		headers: {
			authorization: token ? `Bearer ${token}` : null,
		},
	})

	return forward(operation)
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
	link: authLink.concat(httpLink),
	cache,
})

export default apolloClient
