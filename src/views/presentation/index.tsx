import MainSectionHead from '@/components/Texts/MainSectionHead';
import { List, MonthPicker } from 'ant-design-vue';
import moment from 'moment';
import { defineComponent, reactive, toRaw, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';
import styles from './index.module.scss';
export default defineComponent({
	name: 'Login',
	setup() {
		const { t } = useI18n();

		let paramRef = reactive({
			month: moment(),
		});

		watch(paramRef, (paramRef) => {
			console.group(toRaw(paramRef));
		});

		let dataList = reactive([
			{
				coverpicture: '//via.placeholder.com/240x140.jpg?text=content-1',
				title: 'To be, or not to be',
				digest: 'To be, or not to be',
				id: 'id--aaa',
			},
			{
				coverpicture: '//via.placeholder.com/240x140.jpg?text=content-2',
				title: 'not to be',
				digest: 'To be, or not to be',
				id: 'id--bbb',
			},
		]);

		return () => (
			<>
				<MainSectionHead redLead={false}>{t('menu.presentation')}</MainSectionHead>
				<div class={`${styles.pd_20} ${styles.bg_white} ${styles.mg_b_20}`}>
					<MonthPicker allowClear={false} v-model={[paramRef.month, 'value']} />
				</div>

				<div class={`${styles.pd_20} ${styles.bg_white}`}>
					<List
						itemLayout='vertical'
						dataSource={dataList}
						v-slots={{
							renderItem: ({ item }: { item: any }) => (
								<List.Item class={styles.eventsItem}>
									<List.Item.Meta
										v-slots={{
											title: () => <RouterLink to={`/news/${item.id}`}>{item.title}</RouterLink>,
											description: () => <div class={styles.content}>{item.digest}</div>,
											avatar: () => <img class={styles.avatar} src={item.coverpicture} />,
										}}
									></List.Item.Meta>
								</List.Item>
							),
						}}
					/>
				</div>
			</>
		);
	},
});
