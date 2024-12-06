<script setup lang="ts"></script>

<template>
  <div class="bg-white rounded-3xl">
    <svg
      class="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use
          xlink:href="#gentle-wave"
          class="text-cyan-200 opacity-30"
          x="48"
          y="4"
          fill="currentColor"
        />
        <use
          xlink:href="#gentle-wave"
          class="text-cyan-300 opacity-50"
          x="48"
          y="6"
          fill="currentColor"
        />
        <use
          xlink:href="#gentle-wave"
          class="text-cyan-400 opacity-70"
          x="48"
          y="10"
          fill="currentColor"
        />
        <use
          xlink:href="#gentle-wave"
          x="48"
          y="7"
          fill="currentColor"
          class="text-cyan-400"
        />
      </g>
    </svg>
  </div>
</template>

<style>
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
</style>
