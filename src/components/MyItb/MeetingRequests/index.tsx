import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { Card, List, Tabs, Tag } from 'ant-design-vue';
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import styles from '../index.module.scss';

export default defineComponent({
	name: 'MeetingRequests',
	setup() {
		const { t } = useI18n();

		let contactList = reactive([
			{
				companyLogo: '//picsum.photos/100/100',
				avatar: '//picsum.photos/150/150',
				date: '2021/11/1',
				time: '10:22am - 11:00am',
				from: 'Tom',
				digest: 'To be, or not to be',
				id: 'id--aaa',
			},
		]);

		return () => (
			<Card title={t('myItb.dockIcons.requests')} style={{ marginTop: '28px' }}>
				<Tabs defaultActiveKey={1} style={{marginTop: '-24px'}}>
					<Tabs.TabPane key={1} tab={t('myItb.meetingRequests.online')}>
						<List
							itemLayout='vertical'
							dataSource={contactList}
							v-slots={{
								renderItem: ({ item }: { item: any }) => (
									<List.Item class={styles.listItem}>
										<List.Item.Meta
											v-slots={{
												// title: () => <div>{item.name}</div>,
												description: () => (
													<>
														<Tag
															color='#F0AE1C'
															style={{ float: 'right' , marginRight: 0}}
															v-slots={{
																icon: () => <ClockCircleOutlined />,
															}}
														>
															{t('myItb.meetingRequests.waiting')}
														</Tag>
														<div>
															<div class={styles.short}>{item.date}</div>
															<div class={styles.short}>{item.time}</div>
															<div class={styles.short}>
																{t('myItb.meetingRequests.waiting_confirm')}
															</div>
														</div>
													</>
												),
												avatar: () => [
													<img
														class={`${styles.avatar} ${styles.round}`}
														src={item.companyLogo}
													/>,
													<img
														class={`${styles.avatar} ${styles.round}`}
														src={item.avatar}
													/>,
												],
											}}
										></List.Item.Meta>
										<span class={styles.text_gray}>
											{item.from} {t('myItb.meetingRequests.invited_surfix')}
										</span>
									</List.Item>
								),
							}}
						/>
					</Tabs.TabPane>

					<Tabs.TabPane key={2} tab={t('myItb.meetingRequests.offline')}></Tabs.TabPane>
				</Tabs>
			</Card>
		);
	},
});
