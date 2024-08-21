<script setup lang="ts">
const { setLocale, locale } = useI18n();
const store = useLangStore();

function handleInput(code: string) {
  setLocale(code);
  store.lang = code;
}

const languages = [
  {
    code: "en",
    isSelect: locale.value == "en" ? true : false,
  },
  {
    code: "ru",
    isSelect: locale.value == "ru" ? true : false,
  },
];
</script>

<template>
  <div class="inputs">
    <div class="input" v-for="lang in languages">
      <input :checked="lang.isSelect" class="input__field" type="radio" :id="lang.code" name="language" />
      <label class="input__button" @click="handleInput(lang.code)" :for="lang.code">{{ lang.code }}</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inputs {
  display: flex;
  gap: 5px;
  margin-top: 15px;
}
.input {
  &__field {
    display: none;
  }
  &__button {
    padding: 5px 10px;
    border: 1px solid #000000;
    color: #000000;
    background-color: transparent;
    border-radius: 5px;
  }
  &__field:checked + &__button {
    color: #ffffff;
    background-color: #000000;
  }
}
</style>
