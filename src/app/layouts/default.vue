<script setup lang="ts"></script>

<template>
  <main class="main">
    <ClientOnly>
      <slot />
    </ClientOnly>
  </main>
</template>

<style lang="scss" scoped>
.main {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  flex-direction: column;
  gap: 10px;
}
</style>
