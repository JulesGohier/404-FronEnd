<script setup lang="ts">
const props = defineProps({
  obj: {
    type: Object as PropType<any>,
    required: true,
  },
});

const emits = defineEmits<{
  (event: "buy"): void;
}>();
</script>

<template>
  <div
    class="size-full rounded-3xl ml-2 text-slate-900 bg-slate-500 relative"
    id="background"
  >
    <p v-if="obj" class="text">
      {{ obj.description }}
    </p>
    <button class="selectBtn" @click="emits('buy')">Séléctionner</button>
  </div>
</template>

<style>
.text {
  @apply text-lg font-semibold flex justify-center items-center self-center justify-self-center size-full px-5;
}

.selectBtn {
  @apply bg-cyan-600 text-white rounded-lg p-2 m-2 absolute bottom-2 right-2;
}
</style>
