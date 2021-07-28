// import { Roles } from '@/common/Roles';
import { RouteRecordRaw } from 'vue-router';

const NewsIndex = () => import(/* webpackChunkName: "news" */ '@/views/news');
const Detail = () => import(/* webpackChunkName: "news" */ '@/views/news/Detail');

export default [
	{
		name: 'NewsIndex',
		path: '/news',
		component: NewsIndex,
	},
	{
		name: 'NewsDetail',
		path: '/news/:newsId',
		component: Detail,
		props: true,
	},
] as RouteRecordRaw[];
