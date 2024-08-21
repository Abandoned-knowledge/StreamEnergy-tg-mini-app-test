<script setup lang="ts">
import { useLangStore } from "~/shared/store/language";
const { useWebApp } = await import("vue-tg");
const { initDataUnsafe } = useWebApp();
const langStore = useLangStore();
import zodiacs from "~/shared/api/zodiac";

function changeLang(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  langStore.changeLang(value);
}

onMounted(() => {
  if (initDataUnsafe.user?.language_code) langStore.changeLang(initDataUnsafe.user.language_code);
});
</script>

<template>
  <div>
    <p class="title" v-if="langStore.lang == 'en'">Daily Horoscope</p>
    <p class="title" v-else>Гороскоп на сегодня</p>
  </div>

  <div class="buttons">
    <ZodiacItem v-for="zodiac in zodiacs" :colors="zodiac.color" :icon="zodiac.icon" :name="zodiac.name" />
  </div>

  <select class="select" @change="changeLang($event)">
    <option value="en">en</option>
    <option value="ru">ru</option>
  </select>
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
