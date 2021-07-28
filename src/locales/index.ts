import { USER_LANGUAGE } from '@/common/StorageKeys';
import JsonStorage from '@/utils/JsonStorage';
import { createI18n } from 'vue-i18n';
import enUS from './en-US';
import zhCN from './zh-CN';


const userBrowserLanguage = window.navigator.languages ? window.navigator.languages[0] : window.navigator.language;

export const userSelectedLanguage = JsonStorage.get<string>(USER_LANGUAGE, userBrowserLanguage);

export enum Locales {
	EN = 'en-US',
	CN = 'zh-CN',
}

const LanguagePackages = {
	'en-US': enUS,
	'zh-CN': zhCN,
};


export default LanguagePackages;

export const i18n = createI18n({
	// legacy: false,
	// useScope: 'global',
	locale: userSelectedLanguage === Locales.CN ? Locales.CN : Locales.EN,
	fallbackLocale: Locales.EN,
	messages: LanguagePackages,
});