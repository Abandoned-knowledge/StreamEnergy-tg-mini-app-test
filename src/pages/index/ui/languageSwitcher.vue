<script setup lang="ts">
function changeLang(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  langStore.changeLang(value);
}
const langStore = useLangStore();
</script>

<template>
  <select class="select" @change="changeLang($event)">
    <option value="en">en</option>
    <option value="ru">ru</option>
  </select>
</template>

<style lang="scss" scoped></style>
