import { RouteRecordRaw } from 'vue-router';

export default [
	{
		name: 'Login',
		path: '/login',
		component: () => import(/* webpackChunkName: "login" */ '@/views/login/index'),
	},
	{
		name: 'SignUp',
		path: '/signUp',
		component: () => import(/* webpackChunkName: "login" */ '@/views/login/signUp'),
	},
] as RouteRecordRaw[];
