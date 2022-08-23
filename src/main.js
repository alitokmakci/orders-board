import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
// import styles
import './assets/app.css'

// Create app
const app = createApp(App)
// Create store
const store = createPinia()

// Add plugins to the app
app.use(store)
app.use(router)

// Mount the app
app.mount('#app')
