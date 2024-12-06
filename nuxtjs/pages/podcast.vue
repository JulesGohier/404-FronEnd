<template>
  <div>
    <div class="h-screen flex items-center justify-center bg-blue-700 gap-36">
      <div class="bg-blue-900 h-[350px] text-white p-6 rounded-lg shadow-lg w-96">
        <audio
            ref="audio1"
            :src="audioSource1"
            @play="onPlay(1)"
            @pause="onPause(1)"
            @ended="onEnded(1)"
            class="hidden"
        ></audio>
        <div class="mb-4 flex justify-center">
          <img src="https://via.placeholder.com/150" alt="Album Art" class="rounded-full w-32 h-32 object-cover" />
        </div>
        <div class="text-center mb-6">
          <h3 class="text-xl font-bold">Podcast 1</h3>
          <p class="text-sm text-gray-400">Frederic LeMoigne</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex items-center space-x-6 mb-4">
            <button @click="rewind(1)" class="text-2xl hover:text-green-500">⏪</button>
            <button @click="togglePlay(1)" class="text-3xl hover:text-green-500">
              {{ isPlaying1 ? "⏸️" : "▶️" }}
            </button>
            <button @click="forward(1)" class="text-2xl hover:text-green-500">⏩</button>
          </div>
          <div class="flex flex-col items-center mx-4 w-full">
            <input
                type="range"
                min="0"
                :max="duration1"
                :value="currentTime1"
                @input="seekAudio(1, $event)"
                class="w-full bg-gray-600 rounded-lg h-1 cursor-pointer"
            />
            <div class="flex justify-between w-full text-xs mt-1">
              <span>{{ formatTime(currentTime1) }}</span>
              <span>{{ formatTime(duration1) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-blue-900 h-[350px] text-white p-6 rounded-lg shadow-lg w-96">
        <audio
            ref="audio2"
            :src="audioSource2"
            @play="onPlay(2)"
            @pause="onPause(2)"
            @ended="onEnded(2)"
            class="hidden"
        ></audio>
        <div class="mb-4 flex justify-center">
          <img src="https://via.placeholder.com/150" alt="Album Art" class="rounded-full w-32 h-32 object-cover" />
        </div>
        <div class="text-center mb-6">
          <h3 class="text-xl font-bold">Podcast 2</h3>
          <p class="text-sm text-gray-400">Florian Sevellec</p>
        </div>
        <div class="flex flex-col items-center">
          <div class="flex items-center space-x-6 mb-4">
            <button @click="rewind(2)" class="text-2xl hover:text-green-500">⏪</button>
            <button @click="togglePlay(2)" class="text-3xl hover:text-green-500">
              {{ isPlaying2 ? "⏸️" : "▶️" }}
            </button>
            <button @click="forward(2)" class="text-2xl hover:text-green-500">⏩</button>
          </div>
          <div class="flex flex-col items-center mx-4 w-full">
            <input
                type="range"
                min="0"
                :max="duration2"
                :value="currentTime2"
                @input="seekAudio(2, $event)"
                class="w-full bg-gray-600 rounded-lg h-1 cursor-pointer"
            />
            <div class="flex justify-between w-full text-xs mt-1">
              <span>{{ formatTime(currentTime2) }}</span>
              <span>{{ formatTime(duration2) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <bottom-bar class="absolute left-0 bottom-0 w-full" />
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";

const audioSource1 = ref("/audio/podcast1.mp3");
const audioSource2 = ref("/audio/podcast2.mp3");

const isPlaying1 = ref(false);
const isPlaying2 = ref(false);

const currentTime1 = ref(0);
const currentTime2 = ref(0);

const duration1 = ref(0);
const duration2 = ref(0);

const audio1 = ref(null);
const audio2 = ref(null);

onMounted(() => {
  setupAudio(audio1.value, 1);
  setupAudio(audio2.value, 2);
});

const setupAudio = (audio, playerNumber) => {
  if (audio) {
    audio.addEventListener("loadedmetadata", () => {
      if (playerNumber === 1) duration1.value = audio.duration;
      else if (playerNumber === 2) duration2.value = audio.duration;
    });

    audio.addEventListener("timeupdate", () => {
      if (playerNumber === 1) currentTime1.value = audio.currentTime;
      else if (playerNumber === 2) currentTime2.value = audio.currentTime;
    });

    audio.addEventListener("ended", () => {
      if (playerNumber === 1) {
        currentTime1.value = 0;
        isPlaying1.value = false;
      } else if (playerNumber === 2) {
        currentTime2.value = 0;
        isPlaying2.value = false;
      }
    });
  }
};

const togglePlay = (playerNumber) => {
  const audio = playerNumber === 1 ? audio1.value : audio2.value;
  if (audio) {
    if (audio.paused) audio.play();
    else audio.pause();
  }
};

const rewind = (playerNumber) => {
  const audio = playerNumber === 1 ? audio1.value : audio2.value;
  if (audio) audio.currentTime -= 10;
};

const forward = (playerNumber) => {
  const audio = playerNumber === 1 ? audio1.value : audio2.value;
  if (audio) audio.currentTime += 10;
};

const seekAudio = (playerNumber, event) => {
  const audio = playerNumber === 1 ? audio1.value : audio2.value;
  if (audio) {
    const time = parseFloat(event.target.value);
    audio.currentTime = time;
    if (playerNumber === 1) currentTime1.value = time;
    else if (playerNumber === 2) currentTime2.value = time;
  }
};

const onPlay = (playerNumber) => {
  if (playerNumber === 1) isPlaying1.value = true;
  else if (playerNumber === 2) isPlaying2.value = true;
};

const onPause = (playerNumber) => {
  if (playerNumber === 1) isPlaying1.value = false;
  else if (playerNumber === 2) isPlaying2.value = false;
};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};
</script>
