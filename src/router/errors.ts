import { RouteRecordRaw } from 'vue-router';

export default [
	{
		name: 'Error403',
		path: '/403',
		component: () => import(/* webpackChunkName: "error" */ '@/views/errors/403'),
	},
	{
		name: 'Error404',
		path: '/:pathMatch(.*)*',
		component: () => import(/* webpackChunkName: "error" */ '@/views/errors/404'),
	},
] as RouteRecordRaw[];
