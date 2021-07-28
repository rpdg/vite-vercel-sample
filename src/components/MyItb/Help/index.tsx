import { Card } from 'ant-design-vue';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import styles from '../index.module.scss';

export default defineComponent({
	name: 'HelpSection',
	setup() {
		const {t} = useI18n();

		let bg = "//via.placeholder.com/100x100.jpg/230E12/230E12"

		return () => (
			<Card
				title={t('myItb.dockIcons.help')}
				style={{marginTop: '28px' }}
			>
				<div class={styles.gridCols2}>
					
					<a href="//www.163.com" target="_blank" class={styles.helpItem} style={{backgroundImage: `url(${bg})`}}>
						<h2>{t('myItb.help.contact_sponsor')}</h2>
						<p>{t('myItb.help.enter')}</p>
					</a>

					<a href="//www.163.com" target="_blank" class={styles.helpItem} style={{backgroundImage: `url(${bg})`}}>
						<h2>{t('myItb.help.want_settle')}</h2>
						<p>{t('myItb.help.enter')}</p>
					</a>
					
					
				</div>
			</Card>
		);
	},
});