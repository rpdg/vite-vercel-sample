import { Button, Card } from 'ant-design-vue';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

export default defineComponent({
	name: 'LoginSection',
	setup() {
		const { t } = useI18n();

		const router = useRouter();
        
		function gotoLogin() {
			router.push('/login');
		}

		return () => (
			<Card style={{ marginTop: '28px' }}>
				<Button type='primary' block onClick={gotoLogin}>
					{t('login.login')}
				</Button>
			</Card>
		);
	},
});
