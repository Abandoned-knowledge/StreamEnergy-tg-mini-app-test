<script setup lang="ts">
const horoscopeStore = useHoroscopeStore();
const { BackButton, useWebApp } = await import("vue-tg");
const { close: closeTg } = useWebApp();

function handleBUtton() {
  !horoscopeStore.isOpen ? closeTg() : horoscopeStore.close();
}
</script>

<template>
  <dialog id="myDialog" class="dialog">
    <p class="dialog__text">{{ horoscopeStore.text }}</p>

    <button @click="horoscopeStore.close" class="dialog__button">{{ $t("button_close") }}</button>
  </dialog>

  <BackButton @click="handleBUtton" />
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
</style>
