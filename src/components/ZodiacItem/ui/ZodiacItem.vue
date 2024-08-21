<script setup lang="ts">
interface props {
  name: name;
  colors: colors;
  icon: Component;
}
const props = defineProps<props>();

const horoscopeStore = useHoroscopeStore();
const langStore = useLangStore();

const style = { background: `linear-gradient(to right bottom, ${props.colors.light}, ${props.colors.dark})` };

const zodiacName = computed(() => (langStore.lang == "en" ? props.name.en : props.name.ru));
</script>

<template>
  <button @click="horoscopeStore.open(props.name.en)" class="button" :style="style">
    <component class="button__icon" :is="props.icon" />
    <span class="button__text">{{ zodiacName }}</span>
  </button>
</template>

<style lang="scss" scoped>
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
