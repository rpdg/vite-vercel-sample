import { menus } from '@/common/Menu';
import IconFont from '@/components/IconFont';
import { Menu } from 'ant-design-vue';
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
	name: 'LeftSideMenu',
	setup() {
		const { t } = useI18n({ useScope: 'global' });
		let router = useRouter();
		let { path } = useRoute();
		// console.log(path, fullPath , hash , query);

		let selectedKeysRef = reactive<string[]>(['/' + path.split('/')[1]]);


		router.beforeEach((to, from) => {
			// console.log('afterEach --> to: ', to);
			// debugger;
			let key = '/' + to.fullPath.split('/')[1];
			selectedKeysRef[0] = key;
		});


		function toggleCurrent({ key }: { key: string }) {
			router.push(key);
		}


		return () => (
			<Menu
				mode={'inline'}
				inlineCollapsed={false}
				selectedKeys={selectedKeysRef}
				// @ts-ignore
				onClick={toggleCurrent}
			>
				{menus.map((menu) => (
					<Menu.Item
						key={menu.path}
						v-slots={{
							icon: () => <IconFont type={menu.icon} style={{ fontSize: '20px' }} />,
						}}
					>
						{t(menu.label)}
					</Menu.Item>
				))}
			</Menu>
		);
	},
});
