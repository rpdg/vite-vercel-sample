import { Roles } from '@/common/Roles';
import { RouteRecordRaw } from 'vue-router';

const RecommendIndex = () => import(/* webpackChunkName: "recommend" */ '@/views/recommends');

export default [
	{
		name: 'RecommendIndex',
		path: '/recommend',
		component: RecommendIndex,
		meta: {
			roles: [Roles.buyer, Roles.exhibition, Roles.visitor],
		},
	},
] as RouteRecordRaw[];
