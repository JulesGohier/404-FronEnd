<script setup lang="ts">
  defineProps<{
    colorMain: string,
    colorShadow: string,
    text: string
  }>()
</script>

<template>
  <div class="flex flex-col justify-center items-center space-y-2">
    <!-- Bouton -->
    <div
        class="flex justify-center items-center aspect-square h-24 w-[180px] rounded-[50%] border-[2px] border-slate-700 shadow-custom hover:shadow-none transform transition-all hover:translate-y-2"
        :class="[colorMain, colorShadow]"
    >
      <slot></slot>
    </div>
    <p class="text-1xl font-bold text-gray-700 p-3 font-Silkscreen">{{ text }}</p>
  </div>
</template>