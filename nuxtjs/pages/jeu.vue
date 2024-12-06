<template>
  <div v-if="startgame==true" class="w-screen h-screen relative flex justify-center items-center bg-backgroundBG2 bg-cover bg-center bg-no-repeat">
    <div class="absolute inset-0 backdrop-blur-sm bg-black/40"></div>

    <div class="relative bg-white rounded-2xl shadow-lg w-[90%] max-w-3xl p-8 text-gray-800 z-10">

      <h2 class="text-2xl font-bold mb-4 text-center">Bienvenue dans <span class="text-blue-800">Ocean Harmony</span></h2>

      <div class="text-sm space-y-4">
        <p>
          <strong>Votre mission</strong> : Nettoyer l'océan en choisissant les bonnes améliorations pour réduire la pollution et restaurer l'équilibre écologique. Chaque action que vous sélectionnez aura un impact non seulement sur l'océan, mais aussi sur la santé humaine.
        </p>
        <p> <strong>Comment jouer</strong></p>
        <ul>
          <li> - Vous pouvez choisir différentes actions pour réduire la pollution plastique, lutter contre les rejets industriels, planter des récifs coralliens, etc.</li>
          <li> - Chaque amélioration affecte une partie spécifique du corps humain (poumons, cœur, foie, système immunitaire, cerveau) et améliore sa santé.</li>
          <li> - Votre objectif est de nettoyer l'océan tout en restaurant un équilibre sain pour le corps humain.</li>
        </ul>
      </div>

      <div class="flex justify-center mt-6">
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
            @click="start"
        >
          Commencer l'aventure
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const startgame = ref<boolean>(true)
const start = ()=>{
  startgame.value = false
}
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
}
</style>
