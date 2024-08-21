export const useHoroscopeStore = defineStore("horoscope", () => {
  const text = ref<string>("");

  async function open(sign: string) {
    const data = await fetchSignData(sign);
    text.value = data.horoscope;
    window.myDialog.showModal();
  }

  function close() {
    window.myDialog.close();
  }

  return { text, open, close };
});
