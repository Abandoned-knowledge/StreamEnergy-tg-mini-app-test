export const useHoroscopeStore = defineStore("horoscope", () => {
  const text = ref<string>("");
  const isOpen = ref<boolean>(false);

  async function open(sign: string) {
    isOpen.value = true;
    const data = await fetchSignData(sign);
    text.value = data.horoscope;
    window.myDialog.showModal();
  }

  function close() {
    isOpen.value = false;
    window.myDialog.close();
  }

  return { text, isOpen, open, close };
});
