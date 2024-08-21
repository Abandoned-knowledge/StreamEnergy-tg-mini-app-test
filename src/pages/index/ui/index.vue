<script setup lang="ts">
import LanguageSwitcher from "./languageSwitcher.vue";

const { useWebApp } = await import("vue-tg");
const { initDataUnsafe } = useWebApp();
const langStore = useLangStore();

onMounted(() => {
  if (initDataUnsafe.user?.language_code) langStore.changeLang(initDataUnsafe.user.language_code);
});
</script>

<template>

  <PopupsHoroscope />
  <div>
    <p class="title" v-if="langStore.lang == 'en'">Daily Horoscope</p>
    <p class="title" v-else>Гороскоп на сегодня</p>
  </div>

  <div class="buttons">
    <ZodiacItem v-for="zodiac in zodiacs" :colors="zodiac.color" :icon="zodiac.icon" :name="zodiac.name" />
  </div>

  <LanguageSwitcher />
</template>

<style lang="scss" scoped>
.buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 96%;
}

.select {
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
