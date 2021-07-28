import { MyItbModule } from '@/common/MyItbModules';
import MyItb from '@/components/MyItb';
import { useAppStore } from '@/stores/AppStore';
import { Card } from 'ant-design-vue';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import styles from './index.module.scss';
import MyItbIcon from './MyItbIcon';

export default defineComponent({
	name: 'RightDock',
	setup() {
		const { t } = useI18n();
		const { appStore } = useAppStore();

		return () => (
			<>
				<Card title={t('common.myITB')} style={{ marginTop: '28px' }}>
					<div class={styles.wrapper}>
						<MyItbIcon
							iconSymbol='icon-comments'
							label={t('myItb.dockIcons.chat')}
							onClick={() => {
								appStore.myItbModule = MyItbModule.Chat;
							}}
						/>
						<MyItbIcon
							iconSymbol='icon-training'
							label={t('myItb.dockIcons.requests')}
							onClick={() => {
								appStore.myItbModule = MyItbModule.Meeting;
							}}
						/>
						<MyItbIcon
							iconSymbol='icon-tool'
							label={t('myItb.dockIcons.business')}
							onClick={() => {
								appStore.myItbModule = MyItbModule.Card;
							}}
						/>
						<MyItbIcon
							iconSymbol='icon-survey'
							label={t('myItb.dockIcons.help')}
							onClick={() => {
								appStore.myItbModule = MyItbModule.Help;
							}}
						/>
						<MyItbIcon
							iconSymbol='icon-collection'
							label={t('myItb.dockIcons.favourite')}
							onClick={() => {
								appStore.myItbModule = MyItbModule.Favourite;
							}}
						/>
						<MyItbIcon
							iconSymbol='icon-waihuishuju'
							label={t('myItb.dockIcons.coupon')}
							onClick={() => {
								appStore.myItbModule = MyItbModule.Coupon;
							}}
						/>
						<MyItbIcon
							iconSymbol='icon-remind'
							label={t('myItb.dockIcons.notification')}
							onClick={() => {
								appStore.myItbModule = MyItbModule.Notification;
							}}
						/>
						<MyItbIcon
							iconSymbol='icon-set'
							label={t('myItb.dockIcons.settings')}
							onClick={() => {
								appStore.myItbModule = MyItbModule.Settings;
							}}
						/>
					</div>
				</Card>

				<MyItb module={appStore.myItbModule} />
			</>
		);
	},
});
