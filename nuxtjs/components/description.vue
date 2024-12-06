<script setup lang="ts"></script>

<template>
  <div
    class="size-full rounded-3xl ml-2 text-slate-900 bg-slate-500 relative"
    id="background"
  >
    <p class="text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend
      lacus et metus ultrices, sollicitudin faucibus orci elementum. Donec
      laoreet enim eu ligula sodales posuere. Pellentesque vitae fermentum nibh.
      Sed viverra mollis libero, vitae hendrerit ligula bibendum eu. Integer
      volutpat ligula eget lacinia venenatis. Proin tempus lacinia eros, vel
      feugiat.
    </p>
    <button class="selectBtn">Séléctionner</button>
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
