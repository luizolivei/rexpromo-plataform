<script setup lang="ts">
import type {Group} from '~/data/mockGroups';

defineProps<{
  group: Group;
}>();
</script>

<template>
  <a
      :href="group.url"
      target="_blank"
      class="group border-2 border-gray-700 hover:border-primary-500 rounded-xl p-6 transition-all duration-300 hover:shadow-lg bg-gray-900 block"
  >
    <div class="flex items-start gap-4">
      <div class="p-3 bg-gray-700 rounded-lg text-primary-500 group-hover:bg-primary-900 transition-colors">
        <UIcon :name="group.icon" class="w-6 h-6"/>
      </div>
      <div>
        <h3 class="font-bold text-lg text-white">{{ group.title }}</h3>
        <p class="text-gray-400">{{ group.description }}</p>
      </div>
    </div>
    <div class="mt-4 flex justify-between items-center">
      <span class="text-sm text-gray-500">{{ group.members }} membros</span>
      <span class="px-3 py-1 bg-primary-900 text-primary-500 rounded-full text-sm font-medium">
        <UIcon name="i-simple-icons-whatsapp" class="h-5 w-5"/>
        Entrar
      </span>
    </div>
  </a>
</template>