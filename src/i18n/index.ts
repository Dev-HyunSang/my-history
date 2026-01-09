import { createI18n } from 'vue-i18n';
import ko from './locales/ko';
import en from './locales/en';

const messages = {
  ko,
  en,
};

// 브라우저 언어 감지 또는 localStorage에서 저장된 언어 가져오기
const getBrowserLanguage = (): string => {
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
    return savedLanguage;
  }

  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith('ko')) {
    return 'ko';
  }
  return 'en';
};

const i18n = createI18n({
  legacy: false, // Composition API 모드 사용
  locale: getBrowserLanguage(),
  fallbackLocale: 'en',
  messages,
});

export default i18n;
