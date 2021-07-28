// import { Roles } from '@/common/Roles';
import { RouteRecordRaw } from 'vue-router';

const ShowFloorCompany = () => import(/* webpackChunkName: "showFloor" */ '@/views/showFloor');
const ShowFloorProduct = () => import(/* webpackChunkName: "showFloor" */ '@/views/showFloor/product');

export default [
	{
		name: 'ShowFloor-Company',
		path: '/showFloor',
		component: ShowFloorCompany,
		meta: {
			// roles: [Roles.BUYER, Roles.EXHIBITION],
		},
	},
	{
		name: 'ShowFloor-Product',
		path: '/showFloor/product',
		component: ShowFloorProduct,
	},
] as RouteRecordRaw[];
