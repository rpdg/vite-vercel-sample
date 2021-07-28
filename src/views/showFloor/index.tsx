import MainSectionHead from '@/components/Texts/MainSectionHead';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
	name: 'Login',
	setup() {
		const { t } = useI18n();
		return () => (
			<>
				<MainSectionHead redLead={false}>{t('menu.showFloor')}</MainSectionHead>
			</>
		);
	},
});
