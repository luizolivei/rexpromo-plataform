<script setup lang="ts">
import logo from '@/assets/images/logo-no-bg.png'
import ArgbEffect from "~/components/layout/argbEffect.vue";

interface Route {
  name: string;
  path: string;
}

const searchQuery = ref('');
const isSearchFocused = ref(false);

const routes: Route[] = [
  {name: 'Promoções ao vivo', path: '/promocoes'},
  {name: 'Cupons', path: '/cupons'}
];
</script>

<template>
  <header
      class="sticky top-0 z-50 border-b backdrop-blur-md classic-theme">
    <div class="container mx-auto px-4">
      <div class="flex h-16 items-center justify-between gap-6">
        <NuxtLink to="/" class="flex items-center gap-2">
          <img :src="logo" alt="Logo" class="h-10 w-auto"/>
          <span class="text-xl font-bold text-white">RexPromo</span>
        </NuxtLink>

        <div class="hidden lg:flex flex-1 max-w-xl justify-center align-middle">
          <UInput
              style="width: 400px; border-radius: 22px; height: 40px"
              v-model="searchQuery"
              placeholder="Buscar ofertas..."
              icon="i-heroicons-magnifying-glass"
              :autofocus="isSearchFocused"
              @focus="isSearchFocused = true"
              @blur="isSearchFocused = false"
          ></UInput>
        </div>

        <div class="hidden items-center gap-4 md:flex">
          <UButton
              v-for="route in routes"
              :key="route.path"
              :to="route.path"
              variant="ghost"
              class="group relative text-gray-300 hover:text-white"
          >
            <span>{{ route.name }}</span>
            <span
                class="absolute bottom-0 left-0 h-0.5 w-0 bg-primary-500 transition-all duration-300 group-hover:w-full"
            ></span>
          </UButton>
        </div>

<!--        <div class="flex items-center gap-2 md:hidden">-->
<!--          <UButton-->
<!--              icon="i-heroicons-magnifying-glass"-->
<!--              color="gray"-->
<!--              variant="ghost"-->
<!--              @click="isSearchFocused = true"-->
<!--          />-->

<!--          <UDropdown :items="routes.map(r => ({ label: r.name, click: () => navigateTo(r.path) }))">-->
<!--            <UButton-->
<!--                icon="i-heroicons-bars-3"-->
<!--                color="gray"-->
<!--                variant="ghost"-->
<!--            />-->
<!--          </UDropdown>-->
<!--        </div>-->
      </div>

<!--      <div v-if="isSearchFocused" class="pb-4 lg:hidden">-->
<!--        <UInput-->
<!--            v-model="searchQuery"-->
<!--            placeholder="Buscar ofertas..."-->
<!--            icon="i-heroicons-magnifying-glass"-->
<!--            size="md"-->
<!--            color="white"-->
<!--            :ui="{-->
<!--            color: {-->
<!--              white: {-->
<!--                outline: 'bg-gray-800 text-white ring-gray-700 focus:ring-primary-500'-->
<!--              }-->
<!--            }-->
<!--          }"-->
<!--            autofocus-->
<!--            @blur="isSearchFocused = false"-->
<!--        />-->
<!--      </div>-->
    </div>

<!--    gradiente quase argb em dev-->
    <ArgbEffect/>
  </header>
</template>

<style scoped>
header {
  transition: all 0.3s ease;
}

.bg-gray-900\/90 {
  background-color: rgba(17, 24, 39, 0.9);
}

.backdrop-blur-md {
  backdrop-filter: blur(12px);
}
</style>