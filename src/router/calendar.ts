import { Roles } from '@/common/Roles';
import { RouteRecordRaw } from 'vue-router';

const MyCalendar = () => import(/* webpackChunkName: "calendar" */ '@/views/calendar');

export default [
	{
		name: 'MyCalendar',
		path: '/calendar',
		component: MyCalendar,
		meta: {
			roles: [Roles.buyer, Roles.exhibition],
		},
	},
] as RouteRecordRaw[];
