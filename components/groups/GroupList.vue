<script setup lang="ts">
import {whatsappGroups, telegramGroups} from '~/data/mockGroups';
import GroupCard from "./GruopCard.vue"
</script>

<template>
  <section id="grupos" class="py-5 bg-gray-800 ">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-4 text-white">
        Nossos grupos exclusivos no WhatsApp
      </h2>
      <p class="text-gray-400 text-center max-w-2xl mx-auto mb-5">
        Escolha os grupos que mais combinam com o que você procura
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GroupCard
            v-for="group in whatsappGroups"
            :key="group.id"
            :group="group"
        />
      </div>
    </div>

<!--    <div class="container mx-auto px-4 mt-5">-->
<!--      <h2 class="text-3xl font-bold text-center mb-4 text-white">-->
<!--        Nosso grupo exclusivo no Telegram-->
<!--      </h2>-->
<!--      <div class="flex justify-center">-->
<!--        <GroupCard-->
<!--            v-for="group in telegramGroups"-->
<!--            :key="group.id"-->
<!--            :group="group"-->
<!--        />-->
<!--      </div>-->
<!--    </div>-->
  </section>
</template>