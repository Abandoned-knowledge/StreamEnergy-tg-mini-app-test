export async function fetchSignData(sign: string) {
  const langStore = useLangStore();
  return await $fetch<response>("https://poker247tech.ru/get_horoscope/", {
    method: "post",
    body: {
      sign: sign.toLowerCase(),
      period: "today",
      language: langStore.lang == "en" ? "translated" : "original",
    },
  });
}
