import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
// import Layout from '@/layout'

export const constantRoutes = [
	// {
	// 	path: '/login',
	// 	component: Layout
	// },
	{
		path: '/login',
		// component: Layout,
		name: 'Login',
		component: () => import("../views/login.vue")
	}
]


const router = new VueRouter({
	mode: 'history',
	        base: '/',
	routes: constantRoutes
}) 

export default router