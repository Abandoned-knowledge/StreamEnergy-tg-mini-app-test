<script setup lang="ts">
import LanguageSwitcher from "./languageSwitcher.vue";
const { useWebApp } = await import("vue-tg");
const { initDataUnsafe } = useWebApp();
const { setLocale } = useI18n();

setLocale(initDataUnsafe.user?.language_code == "ru" ? "ru" : "en");

</script>

<template>
  <PopupsHoroscope />
  <div>
    <p class="title">{{ $t("daily_text") }}</p>
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
