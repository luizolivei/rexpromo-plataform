<template>
  <UApp>
    <div class="min-h-screen flex flex-col">
      <Header />
      <main class="flex-grow">
        <NuxtPage />
      </main>
      <Footer />
    </div>
  </UApp>
</template>

<script setup lang="ts">
import Header from '~/components/layout/Header.vue'
import Footer from '~/components/layout/Footer.vue'
</script>