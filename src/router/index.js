import { createRouter, createWebHistory } from 'vue-router'
import ensureUserAuthneticated from '../middleware/authMiddleware'
import { routes } from './routes'

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach((to, from, next) => {
	const result = ensureUserAuthneticated()

	console.log('result:', result)

	if (to.meta.auth) {
		if (result) {
			next()
		} else {
			next('/login')
		}
	} else {
		if (!result) {
			next()
		} else {
			next('/')
		}
	}
})

export default router
