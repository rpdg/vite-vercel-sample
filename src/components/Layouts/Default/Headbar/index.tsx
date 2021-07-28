import { useAppStore } from '@/stores/AppStore';
import { Input, Space, Switch } from 'ant-design-vue';
import { defineComponent, watch } from 'vue';
import TopbarAvatar from './Avatar';
import styles from './index.module.scss';

export default defineComponent({
	name: 'Headbar',
	setup() {

		const { appStore } = useAppStore();

		watch(() => appStore.isEn, appStore.switchLanguage);

		function doSearch(searchValue: string) {
			console.log(searchValue);
		}

		return () => (
			<div class={styles.headerWrap}>
				<div class={styles.logo}>logo</div>
				<section class={styles.gap}></section>
				<section class={styles.process}>
					{' '}
					<Space size={20}>
						<Input.Search style='width: 160px; border-radius: 60px;' onSearch={doSearch} />
						<Switch checked-children='En' un-checked-children='汉' v-model={[appStore.isEn, 'checked']} />
						<TopbarAvatar />
					</Space>
				</section>
			</div>
		);
	},
});
