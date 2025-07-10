<script setup>
import CtaSection from "~/components/home/CtaSection.vue";
import GroupList from "~/components/groups/GroupList.vue";
import PromotionList from "~/components/promotions/PromotionList.vue";
import ProductAlertForm from "~/components/home/ProductAlertForm.vue";
import ArgbEffect from "~/components/layout/argbEffect.vue";

useHead({
  title: 'RexPromo – Grupos Exclusivos de Promoções no WhatsApp',
  meta: [
    {
      name: 'description',
      content: 'Entre para os grupos RexPromo no WhatsApp e receba as melhores ofertas em tecnologia, eletrônicos, móveis e mais. Economize até 90%!'
    },
    {
      name: 'keywords',
      content: 'grupos whatsapp promoções, descontos reais, ofertas tecnologia, promoções móveis, cupons desconto'
    },
    {
      property: 'og:title',
      content: 'RexPromo – Os Melhores Grupos de Promoções no WhatsApp'
    },
    {
      property: 'og:description',
      content: 'Acesso VIP a promoções reais antes de esgotarem. Junte-se a milhares de economizadores!'
    },
    {property: 'og:url', content: 'https://rexpromo.com'},
    {
      property: 'og:image',
      content: 'https://rexpromo.com/images/og-rexpromo.jpg'
    },
    {property: 'og:type', content: 'website'},
    {name: 'twitter:card', content: 'summary_large_image'}
  ],
  link: [
    {rel: 'canonical', href: 'https://rexpromo.com'}
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "RexPromo",
        "url": "https://rexpromo.com",
        "logo": "https://rexpromo.com/images/logo.png",
        "description": "Grupos exclusivos de promoções no WhatsApp com descontos reais",
        "sameAs": [
          "https://www.facebook.com/rexpromo",
          "https://www.instagram.com/rexpromo",
          "https://t.me/rexpromo"
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "RexPromo",
        "url": "https://rexpromo.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://rexpromo.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    }
  ]
})
</script>

<template>
  <div>
    <GroupList/>
    <PromotionList/>
    <div class="container mx-auto px-4 py-8">
      <hr class="mb-10 text-gray-700"/>
      <div class="flex justify-center">
        <ProductAlertForm/>
      </div>
      <hr class="my-10 text-gray-700"/>
      <CtaSection/>
    </div>
  </div>
</template>