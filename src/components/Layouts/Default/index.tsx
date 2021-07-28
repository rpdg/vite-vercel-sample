import { useAppStore } from '@/stores/AppStore';
import { Layout } from 'ant-design-vue';
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import Headbar from './Headbar/index';
import styles from './index.module.scss';
import RightDock from './RightDock';
import Sidebar from './Sidebar';

export default defineComponent({
	name: 'DefaultLayout',
	setup(props, { slots }) {
		let { appStore } = useAppStore();

		return () => (
			<Layout>
				<Layout.Header class={styles.header}>
					<Headbar />
				</Layout.Header>
				<Layout class={styles.body}>
					<Layout.Sider
						collapsible
						collapsedWidth={60}
						breakpoint={appStore.leftSideCollapsed ? undefined : 'md'}
						width={240}
						theme={'light'}
						v-model={[appStore.leftSideCollapsed, 'collapsed']}
						class={styles.bodyLeft}
					>
						<Sidebar />
					</Layout.Sider>
					<Layout.Content class={styles.bodyMain}>
						<RouterView />
					</Layout.Content>
					<Layout.Sider
						collapsible
						collapsedWidth={0.1}
						breakpoint={appStore.rightSideCollapsed ? undefined : 'xl'}
						v-model={[appStore.rightSideCollapsed, 'collapsed']}
						reverseArrow
						trigger={null}
						theme={'light'}
						width={394}
						class={styles.bodyRight}
					>
						<div class={styles.bodyRightPad}>
							<RightDock />
						</div>
					</Layout.Sider>
				</Layout>
			</Layout>
		);
	},
});
