<script setup lang="ts">
import logo from '@/assets/images/logo-no-bg.png'

interface SocialLink {
  label: string;
  icon: string;
  color: string;
  href: string;
}

interface FooterLink {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

const socialLinks: SocialLink[] = [
  {
    label: 'Instagram',
    icon: 'i-simple-icons-instagram',
    color: 'bg-gradient-to-br from-purple-500 to-pink-600 text-white',
    href: '#'
  },
  {
    label: 'TikTok',
    icon: 'i-simple-icons-tiktok',
    color: 'bg-white text-gray-900',
    href: '#'
  },
  {
    label: 'WhatsApp',
    icon: 'i-simple-icons-whatsapp',
    color: 'bg-green-500 text-white',
    href: '#'
  },
  {
    label: 'Telegram',
    icon: 'i-simple-icons-telegram',
    color: 'bg-blue-500 text-white',
    href: '#'
  }
];

const footerLinks: FooterLink[] = [
  {
    title: 'Institucional',
    links: [
      { label: 'Sobre nós', href: '/sobre' },
      { label: 'Termos de uso', href: '/termos' }
    ]
  },
  {
    title: 'Ajuda',
    links: [
      { label: 'Fale conosco', href: '/contato' },
      { label: 'Perguntas frequentes', href: '/faq' }
    ]
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Blog de ofertas', href: '/blog' },
      { label: 'Como funciona', href: '/como-funciona' }
    ]
  }
];
</script>

<template>
  <footer class="classic-theme">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div class="space-y-6">
          <NuxtLink to="/" class="flex items-center gap-2">
            <img :src="logo" alt="Logo" class="h-8 w-auto" />
            <span class="text-xl font-bold text-white">RexPromo</span>
          </NuxtLink>

          <p class="text-gray-400">
            Encontre as melhores ofertas e cupons para economizar em suas compras.
          </p>

          <div class="flex items-center gap-4">
            <UButton
                v-for="social in socialLinks"
                :key="social.label"
                :to="social.href"
                :ui="{ rounded: 'rounded-full' }"
                size="lg"
                :class="social.color"
                :aria-label="social.label"
            >
              <UIcon :name="social.icon" class="h-7 w-7" />
            </UButton>
          </div>
        </div>

        <!-- Links do footer -->
        <div v-for="(section, index) in footerLinks" :key="index">
          <h3 class="text-lg font-semibold text-white mb-4">
            {{ section.title }}
          </h3>
          <ul class="space-y-3">
            <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
              <ULink
                  :to="link.href"
                  class="text-gray-400 hover:text-primary-400 transition-colors"
              >
                {{ link.label }}
              </ULink>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">
            Receba ofertas exclusivas
          </h3>
          <p class="text-gray-400 mb-4">
            Cadastre-se o seu WhatsApp e receba um convite para nossos grupos.
          </p>
          <div class="flex gap-2">
            <UInput
                placeholder="Seu numero com DDD"
                type="email"
                size="md"
                class="flex-1"
            />
            <UButton
                label="Enviar"
                color="primary"
                size="md"
            />
          </div>
        </div>
      </div>

      <!-- Divisor -->
      <div class="border-t border-gray-800 my-8"></div>

      <!-- Seção inferior -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <div class="flex items-center gap-6">
          <ULink
              to="/politica-de-privacidade"
              class="text-gray-400 hover:text-gray-300 text-sm transition-colors"
          >
            Política de Privacidade
          </ULink>
          <ULink
              to="/termos-de-servico"
              class="text-gray-400 hover:text-gray-300 text-sm transition-colors"
          >
            Termos de Serviço
          </ULink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  transition: all 0.3s ease;
}

.u-button {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.u-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

@media (max-width: 768px) {
  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid-cols-4 {
    grid-template-columns: 1fr;
  }
}
</style>