<script setup lang="ts">
import { promotions } from '~/data/mockPromotions';
import PromotionCard from "~/components/promotions/PromotionCard.vue";

// Filtros (opcional)
const selectedCategory = ref('Todos');
</script>

<template>
  <section class="py-4">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold text-white mb-8">Promoções em Destaque</h2>

      <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <PromotionCard
            v-for="promotion in promotions"
            :key="promotion.id"
            :promotion="promotion"
        />
      </div>

      <div class="mt-8 text-center">
        <UButton
            color="gray"
            variant="outline"
            label="Carregar mais promoções"
            icon="i-heroicons-arrow-down"
        />
      </div>
    </div>
  </section>
</template>