import Home from '../pages/home.vue'
import Login from '../pages/login.vue'
import Products from '../pages/products.vue'
import Orders from '../pages/orders.vue'

/**
 * List routes here
 * For protection for the routes add meta field with auth attribute to true
 */
export const routes = [
	{
		path: '/',
		component: Home,
		meta: {
			auth: true,
			layout: true,
		},
	},
	{
		path: '/login',
		component: Login,
		meta: {
			auth: false,
			layout: false,
		},
	},
	{
		path: '/products',
		component: Products,
		meta: {
			auth: true,
			layout: true,
		},
	},
	{
		path: '/orders',
		component: Orders,
		meta: {
			auth: true,
			layout: true,
		},
	},
]
