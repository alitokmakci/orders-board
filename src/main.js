import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { initializeApp } from './utils/bootstrap'
import apolloClient from './utils/apollo'
import router from './router'
import App from './App.vue'
// import styles
import './assets/app.css'

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

// Initialize necessery properties
initializeApp()
	.then(() => {
		// Mount the app
		app.mount('#app')
	})
	.catch(() => {
		window.location.href = '/login'
	})
