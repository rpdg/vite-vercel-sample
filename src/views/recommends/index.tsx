import MainSectionHead from '@/components/Texts/MainSectionHead';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import styles from './index.module.scss';

export default defineComponent({
	name: 'PartnerCompany',
	setup() {
		const { t } = useI18n();
		return () => (
			<>
				<MainSectionHead redLead={false}>{t('menu.recommend')}</MainSectionHead>
				
				<div class={`${styles.gridCols4} ${styles.pd_20} ${styles.bg_white}`}>
					<div class={styles.squareItem}>
						<img src='//picsum.photos/120/120' />
					</div>
					<div class={styles.squareItem}>
						<img src='//picsum.photos/150/120' />
					</div>
					<div class={styles.squareItem}>
						<img src='//picsum.photos/150/170' />
					</div>
					<div class={styles.squareItem}>
						<img src='//picsum.photos/150/150' />
					</div>
				</div>

				<MainSectionHead moreLink='/news/page2'>{t(`partners.partners`)}</MainSectionHead>
				<div class={`${styles.gridCols4} ${styles.pd_20} ${styles.bg_white}`}>
					<div class={styles.cardPartner}>
						<img src='//picsum.photos/120/120' />
						<div class={styles.title}>
							{' '}
							To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The
							slings and arrows{' '}
						</div>
					</div>
				</div>
			</>
		);
	},
});