<script setup lang="ts">
import { fetchSignData } from "~/shared/api/sign";
import { useLangStore } from "~/shared/store/language";
import type { colors, name } from "~/shared/types";
const { BackButton } = await import("vue-tg");

interface props {
  name: name;
  colors: colors;
  icon: Component;
}

const props = defineProps<props>();

const style = {
  background: `linear-gradient(to right bottom, ${props.colors.light}, ${props.colors.dark})`,
};

const dialog = ref<HTMLDialogElement>();
const horoscope = ref<string>("");

async function openModal(sign: string) {
  const data = await fetchSignData(sign);
  horoscope.value = data.horoscope;

  if (dialog.value) {
    dialog.value.showModal();
  }
}

function handleBackButton() {
  if (dialog.value) dialog.value.close();
}
const langStore = useLangStore();
const zodiacName = computed(() => (langStore.lang == "en" ? props.name.en : props.name.ru));
</script>

<template>
  <button @click="openModal(props.name.en)" class="button" :style="style">
    <component class="button__icon" :is="props.icon" />
    <span class="button__text">{{ zodiacName }}</span>
  </button>

  <dialog ref="dialog" class="dialog">
    <p class="dialog__text">{{ horoscope }}</p>
  </dialog>

  <BackButton @click="handleBackButton" />
</template>

<style lang="scss" scoped>
.dialog {
  width: 70%;
  border: 1px solid #888888;
  border-radius: 10px;

  &__text {
    word-spacing: 110%;
    line-height: 150%;
    letter-spacing: 120%;
    height: 300px;
    overflow: scroll;
  }

  &__button {
    padding: 10px 25px;
    border: 1px solid black;
    border-radius: 10px;
    color: white;
    background-color: black;
    cursor: pointer;
    transition: all 0.2s ease;
    width: 100%;

    &:hover {
      background-color: transparent;
      color: black;
    }
  }
}

.button {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;

  &__icon {
    height: 24px;
    width: 24px;
  }
}
</style>
