export const useLangStore = defineStore("lang", () => {
  const lang = ref("en");

  function changeLang(langCode: string) {
    return (lang.value = langCode);
  }
  return { lang, changeLang };
});
