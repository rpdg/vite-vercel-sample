import { MyItbModule } from '@/common/MyItbModules';
import { USER_LANGUAGE } from '@/common/StorageKeys';
import { i18n, Locales, userSelectedLanguage } from '@/locales';
import JsonStorage from '@/utils/JsonStorage';
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import moment from 'moment';
// import 'moment/dist/locale/en-us';
import 'moment/dist/locale/zh-cn';
import { reactive } from 'vue';
class AppStore {
	isEn: boolean;

	antdLocale;

	leftSideCollapsed: boolean;

	rightSideCollapsed: boolean;

	myItbModule: keyof typeof MyItbModule;

	constructor() {
		this.isEn = userSelectedLanguage === Locales.EN;
		this.antdLocale = this.isEn ? enUS : zhCN;

		this.leftSideCollapsed = false;
		this.rightSideCollapsed = false;

		this.myItbModule = MyItbModule.Chat;

		return reactive(this);
	}

	switchLanguage = () => {
		this.antdLocale = this.isEn ? enUS : zhCN;
		moment.locale(this.antdLocale.locale);//.replace(/-/, '_')

		i18n.global.locale = this.isEn ? Locales.EN : Locales.CN;
		JsonStorage.set(USER_LANGUAGE, this.isEn ? Locales.EN : Locales.CN);
	};
}

const appStore = new AppStore();

function toggleRightSide() {
	appStore.rightSideCollapsed = !appStore.rightSideCollapsed;
}

export const useAppStore = function () {
	return { appStore, toggleRightSide };
};
