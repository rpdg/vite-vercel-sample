import { useAppStore } from '@/stores/AppStore';
import authenStore from '@/stores/AuthenStore';
import { CheckOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons-vue';
import { Avatar, Dropdown, Menu } from 'ant-design-vue';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

export default defineComponent({
	setup() {
		let { appStore } = useAppStore();

		let router = useRouter();
		const { toggleRightSide } = useAppStore();

		const { t } = useI18n({ useScope: 'global' });

		function handleMenu(key: string) {
			switch (key) {
				case 'menu-myITB':
					toggleRightSide();
					break;
				case 'menu-logout':
					handleLogout();
					break;
				default:
			}
		}

		function handleLogout() {
			authenStore.removeToken();
			router.push('/login');
		}

		return () => (
			<Dropdown
				overlayStyle={{ minWidth: '120px' }}
				v-slots={{
					overlay: () => (
						<Menu
							// @ts-ignore
							onClick={({ item, key, keyPath }) => {
								handleMenu(key);
							}}
						>
							<Menu.Item
								key='menu-myITB'
								v-slots={{
									icon: () => (
										<CheckOutlined style={{ opacity: appStore.rightSideCollapsed ? 0 : 1 }} />
									),
								}}
							>
								{t('common.myITB')}
							</Menu.Item>
							<Menu.Divider />
							<Menu.Item
								key='menu-logout'
								v-slots={{
									icon: () => <LogoutOutlined />,
								}}
							>
								{t('common.signOut')}
							</Menu.Item>
						</Menu>
					),
				}}
			>
				<span style={{ whiteSpace: 'nowrap' }}>
					<Avatar
						size={'small'}
						v-slots={{
							icon: () => <UserOutlined />,
						}}
					/>
					<span style={{ margin: '0 6px', cursor: 'pointer' }}>Admin</span>
				</span>
			</Dropdown>
		);
	},
});
