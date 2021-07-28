import { Card } from 'ant-design-vue';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
	name: 'ChatSection',
	setup() {
		const {t} = useI18n();

		return () => (
			<Card
				title={t('myItb.dockIcons.chat')}
				style={{marginTop: '28px' }}
			>
				Group
			</Card>
		);
	},
});