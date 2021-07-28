import { Card } from 'ant-design-vue';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
	name: 'CouponSection',
	setup() {
		const {t} = useI18n();

		return () => (
			<Card
				title={t('myItb.dockIcons.coupon')}
				style={{marginTop: '28px' }}
			>
				Coupon
			</Card>
		);
	},
});