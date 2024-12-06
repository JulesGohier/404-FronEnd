<template>
  <div class="h-[100vh]">
    <div class="bg-backgroundBG bg-no-repeat bg-cover h-[80%] flex flex-col gap-20 justify-center items-center">
      <h1 class="font-Silkscreen text-7xl text-white">
        <span v-if="hoveredButton === 'Jeu'">></span>
        Jeu
        <span v-if="hoveredButton === 'Jeu'"><</span>
      </h1>
      <h1 class="font-Silkscreen text-7xl text-white">
        <span v-if="hoveredButton === 'Podcast'" class="text-white">></span>
        Podcast
        <span v-if="hoveredButton === 'Podcast'" class="text-white"><</span>
      </h1>
      <h1 class="font-Silkscreen text-7xl text-white">
        <span v-if="hoveredButton === 'Reseaux'" class="text-white">></span>
        Reseaux
        <span v-if="hoveredButton === 'Reseaux'" class="text-white"><</span>
      </h1>
    </div>
    <bottom-bar @over="handleHover"></bottom-bar>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import RetroButton from "~/components/RetroButton.vue";
  import BottomBar from "~/components/bottomBar.vue";
  const options = ['Jeu','Podcast','Reseaux'];
  const hoveredButton = ref<string | null>(options[0]);

  const handleHover = (button: string | null) => {
    hoveredButton.value = button;
  };

  const navigate = (target: string) => {
    console.log(`Navigating to: ${target}`);
    if (target == 'jeu'){
      navigateTo('jeu');
    } else if (target == 'podcast'){
      navigateTo('podcast');
    } else if (target == 'reseaux'){
      navigateTo("https://404-snf.fr",{
        external: true
      });
    }
  };

  const handleKeydown = (event: KeyboardEvent) => {
    const currentIndex = options.indexOf(hoveredButton.value || '');

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      const nextIndex = (currentIndex + 1) % options.length;
      hoveredButton.value = options[nextIndex];
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      const prevIndex = (currentIndex - 1 + options.length) % options.length;
      hoveredButton.value = options[prevIndex];
    } else if (event.key === "Enter" && hoveredButton.value) {
      navigate(hoveredButton.value.toLowerCase());
    }
  };

  onMounted(() => {
    window.addEventListener("keydown", handleKeydown);
  });

  onUnmounted(() => {
    window.removeEventListener("keydown", handleKeydown);
  });
</script>