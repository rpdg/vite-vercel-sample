// import { Roles } from '@/common/Roles';
import { RouteRecordRaw } from 'vue-router';

const Presentation = () => import(/* webpackChunkName: "presentation" */ '@/views/presentation');

export default [
	{
		name: 'Presentation',
		path: '/presentation',
		component: Presentation,
		meta: {
			// roles: [Roles.BUYER, Roles.EXHIBITION],
		},
	},
] as RouteRecordRaw[];
