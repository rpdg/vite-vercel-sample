import LoginLayout from '@/components/Layouts/Login';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import pic1 from './01.png';
import pic2 from './02.png';
import pic3 from './03.png';
import styles from './index.module.scss';

export default defineComponent({
	name: 'Login',
	setup() {

		const { t } = useI18n({ useScope: 'global' });
		
		return () => (
			<LoginLayout>
				<div class={styles.outer}>
					<div class={styles.padding}>
						<h3>China 2021 plus</h3>
					</div>
					<div class={styles.form}>
						<h1>{t('login.registForm')}</h1>
						<img src={pic1} class={styles.signPic} />
						<img src={pic2} class={styles.signPic} />
						<img src={pic3} class={styles.signPic} />
					</div>
					<div class={styles.padding}></div>
				</div>
			</LoginLayout>
		);
	},
});
