<script setup lang="ts">
import type { Promotion } from '~/data/mockPromotions';

defineProps<{
  promotion: Promotion;
}>();
</script>

<template>
  <article class="relative bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-primary-500 transition-all duration-300 group">
    <div class="aspect-square bg-gray-700 overflow-hidden">
      <img
          :src="promotion.imageUrl"
          :alt="promotion.title"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div v-if="promotion.hasCoupon" class="absolute top-2 left-2 bg-green-900 text-green-400 text-xs font-bold px-2 py-1 rounded">
      TEM CUPOM
    </div>

    <div class="p-4">
      <div class="flex justify-between">
        <div>
          <span v-if="promotion.category" class="text-xs text-primary-500 font-medium">
            {{ promotion.category }}
          </span>

          <h3 class="text-white font-bold mt-1">
            {{ promotion.title }}
          </h3>
        </div>

        <div class="text-right flex flex-col">
          <span class="text-xs text-gray-500">{{ promotion.time }}</span>
          <span class="text-xs text-gray-400">{{ promotion.store }}</span>
        </div>
      </div>

      <div class="mt-3 flex items-end gap-2">
        <span class="text-xl font-bold text-white">
          R$ {{ promotion.currentPrice.toFixed(2).replace('.', ',') }}
        </span>

        <div v-if="promotion.originalPrice" class="text-xs text-gray-400">
          <span class="line-through block">
            R$ {{ promotion.originalPrice.toFixed(2).replace('.', ',') }}
          </span>
          <span v-if="promotion.discountPercentage" class="text-red-400">
            {{ promotion.discountPercentage }}% OFF
          </span>
        </div>
      </div>

      <div class="mt-2">
        <UButton
            block
            color="primary"
            variant="solid"
            label="Ver oferta"
            :to="promotion.url"
        />
      </div>
    </div>
  </article>
</template>