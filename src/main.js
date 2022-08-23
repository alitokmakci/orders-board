import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'
import {
	ApolloClient,
	createHttpLink,
	InMemoryCache,
} from '@apollo/client/core'

import router from './router'
import App from './App.vue'
// import styles
import './assets/app.css'
import Cookies from 'js-cookie'
import useTemplateStore from './store/useTemplateStore'

// HTTP connection to the API
const httpLink = createHttpLink({
	// You should use an absolute URL here
	uri: 'https://simplisaleshw.cotunnel.com/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
	link: httpLink,
	cache,
})

// Create app
const app = createApp({
	setup() {
		provide(DefaultApolloClient, apolloClient)
	},

	render: () => h(App),
})

// Create store
const store = createPinia()

// Add plugins to the app
app.use(store)
app.use(router)

// Check if dark mode cookie exist before mount the app
if (Cookies.get('dark')) {
	useTemplateStore().setDarkMode(Cookies.get('dark') === 'true')
}

// Mount the app
app.mount('#app')
