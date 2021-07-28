import MainSectionHead from '@/components/Texts/MainSectionHead';
import { Alert, Badge, Calendar, Collapse } from 'ant-design-vue';
import moment from 'moment';
import { defineComponent, reactive } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
	setup() {
		const { t } = useI18n();

		let paramRef = reactive({
			month: moment(),
		});

		function renderCell({ current }: { current: moment.Moment }) {
			// console.log(current);
			if (current.date() === 10) {
				return (
					<>
						<Badge color='#AB2B2F' />
						<Badge color='#F0AE1C' />
						<Badge color='#000000' />
					</>
				);
			}
		}

		return () => (
			<>
				<MainSectionHead redLead={false}>{t('menu.calendar')}</MainSectionHead>
				<Alert message='Warning Text' type='error' />

				<Collapse expandIconPosition='right' style={{ margin: '20px 0' }}>
					<Collapse.Panel
						v-slots={{
							header: () => (
								<MainSectionHead redLead={true} style={{ margin: '0' }}>
									{t('calendar.virtual_platform_calendar')}
								</MainSectionHead>
							),
						}}
					>
						<Calendar
							fullscreen={false}
							v-model={[paramRef.month, 'value']}
							v-slots={{
								dateCellRender: renderCell,
							}}
						/>

						<div style={{ padding: '20px' }}>
                            <Badge  color='#AB2B2F' text={t('calendar.my_selected_speech')} />
                        </div>
					</Collapse.Panel>
				</Collapse>

				<Collapse expandIconPosition='right'>
					<Collapse.Panel
						v-slots={{
							header: () => (
								<MainSectionHead redLead={true} style={{ margin: '0' }}>
									{t('calendar.physical_exhibition_calendar')}
								</MainSectionHead>
							),
						}}
					>
						bbb
					</Collapse.Panel>
				</Collapse>
			</>
		);
	},
});
