import MainSectionHead from '@/components/Texts/MainSectionHead';
import { List } from 'ant-design-vue';
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';
import styles from './index.module.scss';
import type { NewsItem } from './news';

export default defineComponent({
	name: 'NewsList',
	setup() {
		const { t } = useI18n();

		let newsList = reactive<NewsItem[]>([
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
				<MainSectionHead redLead={false}>{t('menu.news')}</MainSectionHead>
				<div class={`${styles.pd_20} ${styles.bg_white}`}>
					<List
						itemLayout='vertical'
						dataSource={newsList}
						v-slots={{
							renderItem: ({ item }: { item: NewsItem }) => (
								<List.Item class={styles.newsItem}>
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
