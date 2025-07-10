<script setup lang="ts">
const productName = ref('');
const maxPrice = ref<number | null>(null);
const whatsappNumber = ref('');
const isSubmitting = ref(false);
const isSuccess = ref(false);

const submitForm = () => {
  isSubmitting.value = true;

  // Simulação de envio
  setTimeout(() => {
    console.log({
      product: productName.value,
      maxPrice: maxPrice.value,
      whatsapp: whatsappNumber.value
    });

    isSubmitting.value = false;
    isSuccess.value = true;
    resetForm();

    setTimeout(() => {
      isSuccess.value = false;
    }, 5000);
  }, 1500);
};

const resetForm = () => {
  productName.value = '';
  maxPrice.value = null;
  whatsappNumber.value = '';
};
</script>

<template>
  <section class="w-[600px] bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700">
    <div class="max-w-md mx-auto">
      <div class="text-center mb-8">
        <UIcon name="i-heroicons-bell-alert" class="text-primary-500 mx-auto mb-3" size="45"/>
        <h2 class="text-2xl font-bold text-white mb-2">
          Avise-me sobre promoções
        </h2>
        <p class="text-gray-400">
          Cadastre seu interesse e te avisaremos quando chegar no preço ideal
        </p>
      </div>

      <form @submit.prevent="submitForm" class="space-y-5">
        <!-- Produto -->
        <div>
          <label for="product" class="block text-sm font-medium text-gray-300 mb-2 ml-1">
            Qual produto você quer?
          </label>
          <UInput
              id="product"
              v-model="productName"
              placeholder="Ex: Iphone 16, Tv 70 polegadas..."
              required
              :ui="{
              rounded: 'rounded-xl',
              variant: {
                outline: 'bg-gray-800/50 border-gray-700 text-white hover:border-primary-500 focus:ring-2 focus:ring-primary-500/50'
              }
            }"
              variant="outline"
              size="lg"
              icon="i-heroicons-magnifying-glass"
              class="w-full"
          />
        </div>

        <!-- Valor Máximo -->
        <div>
          <label for="maxPrice" class="block text-sm font-medium text-gray-300 mb-2 ml-1">
            Valor máximo desejado (opcional)
          </label>
          <UInput
              id="maxPrice"
              v-model="maxPrice"
              type="number"
              placeholder="R$ 0,00"
              :ui="{
              rounded: 'rounded-xl',
              variant: {
                outline: 'bg-gray-800/50 border-gray-700 text-white hover:border-primary-500 focus:ring-2 focus:ring-primary-500/50'
              }
            }"
              variant="outline"
              size="lg"
              icon="i-heroicons-currency-dollar"
              class="w-full"
          >
            <template #trailing>
              <span class="text-gray-400 text-sm pr-2">R$</span>
            </template>
          </UInput>
        </div>

        <!-- WhatsApp -->
        <div>
          <label for="whatsapp" class="block text-sm font-medium text-gray-300 mb-2 ml-1">
            Seu WhatsApp
          </label>
          <UInput
              id="whatsapp"
              v-model="whatsappNumber"
              type="tel"
              placeholder="(00) 00000-0000"
              required
              :ui="{
              rounded: 'rounded-xl',
              variant: {
                outline: 'bg-gray-800/50 border-gray-700 text-white hover:border-primary-500 focus:ring-2 focus:ring-primary-500/50'
              }
            }"
              variant="outline"
              size="lg"
              icon="i-heroicons-chat-bubble-bottom-center-text"
              class="w-full"
          />
        </div>

        <!-- Botão de Submit -->
        <div class="pt-2">
          <UButton
              type="submit"
              size="lg"
              :loading="isSubmitting"
              class="w-full justify-center bg-primary-900 text-amber-50"
          >
            <template #leading>
              <UIcon name="i-heroicons-paper-airplane" class="w-5 h-5" />
            </template>
            Avise-me
          </UButton>
        </div>

        <!-- Mensagem de sucesso -->
        <Transition name="fade">
          <div v-if="isSuccess" class="mt-4 p-3 bg-green-900/30 border border-green-800 text-green-400 rounded-xl text-center flex items-center justify-center gap-2">
            <UIcon name="i-heroicons-check-circle" class="w-5 h-5 flex-shrink-0" />
            <span>Cadastrado com sucesso! Te avisaremos por WhatsApp.</span>
          </div>
        </Transition>
      </form>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>