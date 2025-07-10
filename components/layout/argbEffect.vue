<template>
  <div class="relative w-full h-1 overflow-hidden">
    <div
        class="absolute inset-0 animate-pulse-gradient bg-gradient-to-r from-transparent via-green-900/80 to-transparent"
    ></div>
  </div>
</template>

<style scoped>
@keyframes pulse-gradient {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.animate-pulse-gradient {
  background-size: 400% 100%;
  animation: pulse-gradient 15s linear infinite;
}
</style>
