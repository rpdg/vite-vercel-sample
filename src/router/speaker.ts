// import { Roles } from '@/common/Roles';
import { RouteRecordRaw } from 'vue-router';

const SpeakerIndex = () => import(/* webpackChunkName: "speakers" */ '@/views/speakers');
const Detail = () => import(/* webpackChunkName: "speakers" */ '@/views/speakers/Detail');

export default [
	{
		name: 'SpeakerList',
		path: '/speakers',
		component: SpeakerIndex,
	},
	{
		name: 'SpeakerDetail',
		path: '/speakers/:speakerId',
		component: Detail,
		props: true,
	},
] as RouteRecordRaw[];
