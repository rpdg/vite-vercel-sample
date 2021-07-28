import MainSectionHead from '@/components/Texts/MainSectionHead';
import { List } from 'ant-design-vue';
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import styles from './Detail.module.scss';

export default defineComponent({
	name: 'SpeakerDetail',
	props: {
		speakerId: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const { t } = useI18n();

		let speechList = reactive([
			{
				pic: '//via.placeholder.com/240x240.jpg?text=speech',
				title: 'To be, or not to be',
				company: 'To be, or not to be',
				id: 'id--aaa',
				name: 'Joooy',
			},
			{
				pic: '//via.placeholder.com/240x240.jpg?text=speech',
				title: 'To be, or not to be',
				company: 'To be, or not to be',
				id: 'id--aaa',
				name: 'Joooy',
			},
		]);

		return () => (
			<>
				<MainSectionHead redLead={false}>{t('speakers.speaker')}</MainSectionHead>
				<div class={styles.detailCard}>
					<img class={styles.avatar} src='//via.placeholder.com/240x240.jpg?text=speaker' alt='' />
					<div class={styles.profile}>
						<h3 class={styles.name}>Name Here</h3>
						<p>Company</p>
						<p>Title</p>
					</div>
					<dir class={styles.bio}>Speaker Bio</dir>
					<div class={styles.descr}>
						To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings
						and arrows
					</div>
				</div>

				<MainSectionHead redLead>{t('speakers.related')}</MainSectionHead>
				<div class={`${styles.pd_20} ${styles.bg_white}`}>
					<List
						itemLayout='vertical'
						dataSource={speechList}
						v-slots={{
							renderItem: ({ item }: any) => (
								<List.Item  class={styles.speechItem}>
									<List.Item.Meta
										title={item.name}
										v-slots={{
											description: () => (
												<>
													<div class={styles.content}>{item.company}</div>
													<div class={styles.content}>{item.title}</div>
												</>
											),
											avatar: () => <img class={styles.avatar} src={item.pic} />,
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
