import LoginLayout from '@/components/Layouts/Login';
import { LockOutlined, UserOutlined } from '@ant-design/icons-vue';
import { Button, Checkbox, Form, Input } from 'ant-design-vue';
import { defineComponent, reactive, ref, toRaw } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import styles from './index.module.scss';
// const useForm = Form.useForm;
interface FormState {
	user: string;
	password: string;
	agreed: boolean;
}

export default defineComponent({
	name: 'Login',
	setup(_, { slots }) {
		const route = useRoute();
		const router = useRouter();

		const { t } = useI18n({ useScope: 'global' });

		const formRef = ref();

		const formStateRef = reactive<FormState>({
			user: '',
			password: '',
			agreed: true,
		});

		const rulesRef = reactive({
			user: [
				{
					required: true,
					message: t('login.usernameTip'),
					trigger: 'blur',
				},
			],
			password: [
				{
					required: true,
					message: t('login.passwordTip'),
					trigger: 'blur',
				},
			],
		});

		// const { resetFields, validate, validateInfos } = useForm(formStateRef, rulesRef);

		async function handleSubmit() {
			try {
				await formRef.value.validate();
				console.log('values',toRaw(formStateRef));

				// @ts-ignore
				router.push(route.query?.redirect ?? '/home');

			} catch (error) {
				console.log('error', error);
			}
		}

		return () => (
			<LoginLayout>
				<div class={styles.outer}>
					<div class={styles.padding}>
						<h3>China 2021 plus</h3>
					</div>
					<div class={styles.form}>
						<h1>{t('login.loginForm')}</h1>
						<Form ref={formRef} model={formStateRef} rules={rulesRef}>
							<Form.Item name='user'>
								<Input
									v-model={[formStateRef.user, 'value']}
									placeholder={t('login.username')}
									v-slots={{
										prefix: () => <UserOutlined style='color: rgba(0, 0, 0, 0.25)' />,
									}}
								/>
							</Form.Item>
							<Form.Item name='password'>
								<Input
									type='password'
									v-model={[formStateRef.password, 'value']}
									placeholder={t('login.password')}
									v-slots={{
										prefix: () => <LockOutlined style='color: rgba(0, 0, 0, 0.25)' />,
									}}
								/>
							</Form.Item>
							<Form.Item name='agreed'>
								<Checkbox v-model={[formStateRef.agreed, 'checked']}>
									<RouterLink to='/agreement'>{t('login.agreeTip')}</RouterLink>
								</Checkbox>
							</Form.Item>
							<Form.Item>
								<Button
									type='primary'
									block
									disabled={!formStateRef.agreed}
									// @ts-ignore
									onClick={handleSubmit}
								>
									{t('login.login')}
								</Button>
							</Form.Item>
						</Form>
						<p class={styles.registTip}>
							<RouterLink to='/signUp'>{t('login.registTip')}</RouterLink>
						</p>
					</div>
					<div class={styles.padding}></div>
				</div>
			</LoginLayout>
		);
	},
});
