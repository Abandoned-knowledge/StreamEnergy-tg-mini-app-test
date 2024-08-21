import { useI18n } from "#imports";

export const useLangStore = defineStore("lang", () => {
  const { locale } = useI18n();
  const lang = ref(locale);

  function changeLang(langCode: string) {
    return (lang.value = langCode);
  }
  return { lang, changeLang };
});
