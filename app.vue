<script setup lang="ts">
const { setLocale } = useI18n();
const { useWebApp } = await import("vue-tg");
const { initDataUnsafe } = useWebApp();

onMounted(() => {
  const language_code = initDataUnsafe.user.language_code;
  setLocale(language_code == "en" || "ru" ? language_code : "en");
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
