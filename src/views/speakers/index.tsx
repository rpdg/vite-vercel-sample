import MainSectionHead from '@/components/Texts/MainSectionHead';
import { List } from 'ant-design-vue';
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';
import styles from './index.module.scss';

export default defineComponent({
	name: 'SpeakerList',
	setup() {
		const { t } = useI18n();

		let data = reactive([
			{
				pic: '//via.placeholder.com/240x240.jpg?text=speaker',
				title: 'To be, or not to be',
				company: 'To be, or not to be',
				id: 'id--aaa',
				name: 'Joooy',
			},
		]);

		return () => (
			<>
				<MainSectionHead redLead={false}>{t('menu.speakers')}</MainSectionHead>
				<div class={`${styles.bg_white} ${styles.pd_20}`} style={{paddingLeft:'30px'}}>
					<List
						// @ts-ignore
						grid={{ gutter: 20, column: 4 }}
						dataSource={data}
						v-slots={{
							renderItem: ({ item }: any) => (
								<RouterLink to={`/speakers/${item.id}`} class={styles.cardSpeaker}>
									<img src={item.pic} />
									<div class={styles.title}>{item.name}</div>
									<div class={styles.content}>{item.company}</div>
									<div class={styles.content}>{item.title}</div>
								</RouterLink>
							),
						}}
					></List>
				</div>
			</>
		);
	},
});
