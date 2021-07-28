import MainSectionHead from '@/components/Texts/MainSectionHead';
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import styles from './index.module.scss';
import type { NewsItem } from './news';

export default defineComponent({
	name: 'NewsDetail',
	props: {
		newsId: {
			type: String,
			required: true,
		},
	},
	setup(props) {
		const { t } = useI18n();

		let data = reactive<NewsItem>({
			coverpicture: '//via.placeholder.com/240x240.jpg?text=new1',
			title: 'To be, or not to be',
			digest: `In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.
            After massive project practice and summaries, Ant Design, a design language for background applications, is refined by Ant UED Team, which aims to uniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources of design and front-end development.`,
			id: 'id--aaa',
		});

		return () => (
			<>
				<MainSectionHead redLead={false}>{t('menu.news')}</MainSectionHead>
				<div class={`${styles.pd_20} ${styles.bg_white}`}>
					<img class={`${styles.fullWidthImage} ${styles.mg_b_20}`} src={data.coverpicture} />
					<h3>{data.title}</h3>
					<div class={styles.text_gray}>{data.digest}</div>
				</div>
			</>
		);
	},
});
