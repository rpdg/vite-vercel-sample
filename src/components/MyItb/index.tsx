import { MyItbModule } from '@/common/MyItbModules';
import authenStore from '@/stores/AuthenStore';
import { SyncOutlined } from '@ant-design/icons-vue';
import { defineAsyncComponent, defineComponent, PropType } from 'vue';

const loadingComponent = (
	<div style={{ padding: '50px', textAlign: 'center' }}>
		<SyncOutlined spin />
	</div>
);

const Coupons = defineAsyncComponent({
	loader: () => import('./Coupons'),
	loadingComponent,
});

const ChatSection = defineAsyncComponent({
	loader: () => import('./Chat'),
	loadingComponent,
});

const Favourites = defineAsyncComponent({
	loader: () => import('./Favourite'),
	loadingComponent,
});

const LoginSection = defineAsyncComponent({
	loader: () => import('./LoginSection'),
	loadingComponent,
});

const MeetingRequests = defineAsyncComponent({
	loader: () => import('./MeetingRequests'),
	loadingComponent,
});

const Help = defineAsyncComponent({
	loader: () => import('./Help'),
	loadingComponent,
});

export default defineComponent({
	props: {
		module: {
			type: String as PropType<keyof typeof MyItbModule>,
			required: true,
		},
	},
	name: 'MyItb',
	setup(props) {
		function renderModule() {
			let jsx;

			if (!authenStore.token) {
				return <LoginSection />;
			}

			switch (props.module) {
				case MyItbModule.Chat:
					jsx = <ChatSection />;
					break;
				case MyItbModule.Coupon:
					jsx = <Coupons />;
					break;
				case MyItbModule.Favourite:
					jsx = <Favourites />;
					break;
				case MyItbModule.Meeting:
					jsx = <MeetingRequests />;
					break;
				case MyItbModule.Help:
					jsx = <Help />;
					break;
				default:
					jsx = loadingComponent;
			}
			return jsx;
		}

		return () => renderModule();
	},
});
