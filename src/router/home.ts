import { Roles } from '@/common/Roles';
import { RouteRecordRaw } from 'vue-router';

export default [
	{
		name: 'Home',
		path: '/home',
		component: () => import(/* webpackChunkName: "home" */ '@/views/home/index'),
	},
	{
		name: 'Partners',
		path: '/partners',
		component: () => import(/* webpackChunkName: "home" */ '@/views/partners/index'),
	},
	{
		name: 'Events',
		path: '/events',
		meta: {
			roles: [Roles.buyer, Roles.exhibition],
		},
		component: () => import(/* webpackChunkName: "home" */ '@/views/events/index'),
	},
	
] as RouteRecordRaw[];
