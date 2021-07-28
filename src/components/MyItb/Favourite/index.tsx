import { StarFilled } from '@ant-design/icons-vue';
import { Card, List, Tabs } from 'ant-design-vue';
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import styles from '../index.module.scss';

export default defineComponent({
	name: 'Favourite',
	setup() {
		const { t } = useI18n();

		let contactList = reactive([
			{
				avatar: '//picsum.photos/150/150',
				name: 'To be, or not to be',
				digest: 'To be, or not to be',
				id: 'id--aaa',
			},
			{
				avatar: '//via.placeholder.com/240x240.jpg?text=new2',
				name: 'not to be',
				digest: 'To be, or not to be',
				id: 'id--bbb',
			},
		]);

		return () => (
			<Card title={t('myItb.dockIcons.favourite')} style={{ marginTop: '28px' }}>
				<Tabs defaultActiveKey={1} style={{ marginTop: '-24px' }}>
					<Tabs.TabPane key={1} tab={t('myItb.favourite.contact')}>
						<List
							itemLayout='vertical'
							dataSource={contactList}
							v-slots={{
								renderItem: ({ item }: { item: any }) => (
									<List.Item
										class={styles.listItem}
										v-slots={{
											extra: () => <StarFilled style={{ fontSize: '32px', color: '#AB2B2F' }} />,
										}}
									>
										<List.Item.Meta
											v-slots={{
												title: () => <div>{item.name}</div>,
												description: () => <div class={styles.content}>{item.digest}</div>,
												avatar: () => <img class={styles.avatar} src={item.avatar} />,
											}}
										></List.Item.Meta>
									</List.Item>
								),
							}}
						/>
					</Tabs.TabPane>

					<Tabs.TabPane key={2} tab={t('myItb.favourite.company')}></Tabs.TabPane>

					<Tabs.TabPane key={3} tab={t('myItb.favourite.products')}></Tabs.TabPane>
				</Tabs>
			</Card>
		);
	},
});
