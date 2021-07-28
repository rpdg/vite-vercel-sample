import MainSectionHead from '@/components/Texts/MainSectionHead';
import { List, MonthPicker, Radio } from 'ant-design-vue';
import moment from 'moment';
import { defineComponent, reactive, toRaw, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';
import styles from './index.module.scss';

export default defineComponent({
	name: 'NewsList',
	setup() {
		const { t } = useI18n();

		let paramRef = reactive({
			status: 1,
			month: moment(),
		});

		watch(paramRef, (paramRef) => {
			console.group(toRaw(paramRef));
		});

		// function handleMonthChange(date: moment.Moment, dateString: string) {
		// 	console.log('---->', paramRef.month, 'string: ',dateString);
		// 	// selectedRef.value = undefined;
		// }

		let newsList = reactive([
			{
				coverpicture: '//via.placeholder.com/240x240.jpg?text=new1',
				title: 'To be, or not to be',
				digest: 'To be, or not to be',
				id: 'id--aaa',
			},
			{
				coverpicture: '//via.placeholder.com/240x240.jpg?text=new2',
				title: 'not to be',
				digest: 'To be, or not to be',
				id: 'id--bbb',
			},
		]);

		return () => (
			<>
				<MainSectionHead redLead={false}>{t('menu.events')}</MainSectionHead>
				<div class={`${styles.pd_20} ${styles.bg_white} ${styles.mg_b_20}`}>
					<Radio.Group v-model={[paramRef.status, 'value']}>
						<Radio.Button value={1}>{t('events.online')}</Radio.Button>
						<Radio.Button value={2}>{t('events.offline')}</Radio.Button>
					</Radio.Group>
					<MonthPicker allowClear={true} v-model={[paramRef.month, 'value']} />
				</div>
				<div class={`${styles.pd_20} ${styles.bg_white}`}>
					<List
						itemLayout='vertical'
						dataSource={newsList}
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
