import { RoleName } from '@/common/Roles';
import DefaultLayout from '@/components/Layouts/Default';
import authenStore from '@/stores/AuthenStore';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import MyCalendar from './calendar';
import ErrorRoutes from './errors';
import HomeRoutes from './home';
import LoginRoutes from './login';
import NewsRoutes from './news';
import PresentationRoutes from './presentation';
import RecommendRoutes from './recommend';
import ShowFloorRoutes from './showFloor';
import SpeakerRoutes from './speaker';

const routes: RouteRecordRaw[] = [
	{
		name: 'DefaultLayout',
		component: DefaultLayout,
		path: '/',
		redirect: '/home',
		children: [
			...HomeRoutes,
			...SpeakerRoutes,
			...PresentationRoutes,
			...ShowFloorRoutes,
			...NewsRoutes,
			...RecommendRoutes,
			...MyCalendar
		],
	},
	...LoginRoutes,
	...ErrorRoutes,
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	// debugger;
	if (to.meta?.roles) {
		const { role } = authenStore;
		if (role) {
			if (!role || (to.meta.roles as RoleName[]).indexOf(role) === -1) {
				next({
					name: 'Error403',
				});
			} else {
				next();
			}
		} else {
			next({
				path: '/login',
				query: { redirect: to.fullPath },
			});
		}
	} else {
		next();
	}
});

export default router;
