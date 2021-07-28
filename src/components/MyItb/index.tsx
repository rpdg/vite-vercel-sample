import { MyItbModule } from '@/common/MyItbModules';
import authenStore from '@/stores/AuthenStore';
import { defineAsyncComponent, defineComponent, PropType } from 'vue';

const Coupons = defineAsyncComponent(() => import('./Coupons'));
const ChatSection = defineAsyncComponent(() => import('./ChatSection'));
const Favourites = defineAsyncComponent(() => import('./Favourite'));
const LoginSection = defineAsyncComponent(() => import('./LoginSection'));
const MeetingRequests = defineAsyncComponent(() => import('./MeetingRequests'));


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
				default:
					jsx = <p>404</p>;
			}
			return jsx;
		}

		return () => renderModule();
	},
});
