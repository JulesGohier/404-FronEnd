<template>
  <div class="h-screen flex items-center justify-center bg-blue-700">
    <!-- Card container -->
    <div class="bg-blue-900 text-white p-6 rounded-lg shadow-lg w-96">
      <!-- Audio Player (invisible) -->
      <audio
          ref="audio"
          :src="audioSource"
          @play="onPlay"
          @pause="onPause"
          @ended="onEnded"
          class="hidden"
      ></audio>

      <!-- Title or Album Art -->
      <div class="mb-4 flex justify-center">
        <img src="https://via.placeholder.com/150" alt="Album Art" class="rounded-full w-32 h-32 object-cover" />
      </div>

      <div class="text-center mb-6">
        <h3 class="text-xl font-bold">Podcast Name</h3>
        <p class="text-sm text-gray-400">Artist Name</p>
      </div>

      <!-- Controls and Timeline -->
      <div class="flex flex-col items-center">
        <div class="flex items-center space-x-6 mb-4">
          <button @click="rewind" class="text-2xl hover:text-green-500">
            ⏪
          </button>
          <button @click="togglePlay" class="text-3xl hover:text-green-500">
            {{ isPlaying ? "⏸️" : "▶️" }}
          </button>
          <button @click="forward" class="text-2xl hover:text-green-500">
            ⏩
          </button>
        </div>

        <!-- Timeline / Progress Bar -->
        <div class="flex flex-col items-center mx-4 w-full">
          <input
              type="range"
              min="0"
              :max="duration"
              v-model="currentTime"
              class="w-full bg-gray-600 rounded-lg h-1 cursor-pointer"
              @input="seekAudio"
          />
          <div class="flex justify-between w-full text-xs mt-1">
            <span>{{ formatTime(currentTime) }}</span>
            <span>{{ formatTime(duration) }}</span>
          </div>
        </div>
      </div>
    </div>
    <bottom-bar class=" absolute left-0 bottom-0 w-full"/>
  </div>

</template>

<script setup>
import { ref, onMounted, nextTick, watch } from "vue";

const audioSource = ref("/audio/podcast.mp3");
const isPlaying = ref(false);
const currentTime = ref(0);  // Initial position
const duration = ref(0);

const audio = ref(null);

onMounted(() => {
  nextTick(() => {
    // Set the initial duration once the audio is loaded
    audio.value = document.querySelector("audio");

    // Ensure localStorage is accessed only on the client
    if (typeof window !== "undefined" && window.localStorage) {
      const savedTime = localStorage.getItem("audioPosition");
      if (savedTime) {
        currentTime.value = parseFloat(savedTime);
      }

      audio.value.currentTime = currentTime.value;

      // Set audio duration when metadata is loaded
      audio.value.addEventListener("loadedmetadata", () => {
        duration.value = audio.value.duration;
      });

      // Update currentTime and save it to localStorage on timeupdate
      audio.value.addEventListener("timeupdate", () => {
        currentTime.value = audio.value.currentTime;
        localStorage.setItem("audioPosition", currentTime.value);
      });

      // If the audio ends, reset the time
      audio.value.addEventListener("ended", () => {
        currentTime.value = 0;
      });
    }
  });
});

// Play or Pause Audio
const togglePlay = () => {
  if (isPlaying.value) {
    audio.value.pause();
  } else {
    audio.value.play();
  }
};

// Handle play event
const onPlay = () => {
  isPlaying.value = true;
};

// Handle pause event
const onPause = () => {
  isPlaying.value = false;
};

// Handle audio end event
const onEnded = () => {
  isPlaying.value = false;
  currentTime.value = 0;
};

// Rewind the audio by 10 seconds
const rewind = () => {
  audio.value.currentTime -= 10;
};

// Fast forward the audio by 10 seconds
const forward = () => {
  audio.value.currentTime += 10;
};

// Seek the audio to the currentTime position
const seekAudio = () => {
  audio.value.currentTime = currentTime.value;
};

// Format the time for display
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};
</script>

<style scoped>
/* Custom Styles for the Audio Player */
input[type="range"] {
  appearance: none;
  background: #535353;
  border-radius: 10px;
  height: 5px;
  outline: none;
  transition: background 0.3s;
}

input[type="range"]:hover {
  background: #1db954;
}

input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  background: #1db954;
  border-radius: 50%;
  height: 16px;
  width: 16px;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  background: #1db954;
  border-radius: 50%;
  height: 16px;
  width: 16px;
  cursor: pointer;
}
</style>
