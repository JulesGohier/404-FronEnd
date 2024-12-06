<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-6 h-[100vh] w-[100vw] gap-14">
    <div id="body" class="grid col-span-6 h-[80vh] w-full gap-4">
      <div id="header" class="grid col-span-6 grid-cols-6 h-[10vh] gap-4">
        <div class="col-span-5 w-full flex items-center justify-center">
          <titre/>
        </div>
        <div class="col-span-1"></div>
      </div>
      <div id="game" class="grid col-span-6 grid-cols-6 h-[70vh] gap-4">
        <div class="grid col-span-4 w-full h-[70vh] gap-4">
          <div class="w-full h-[55vh]">
            <action/>
          </div>
          <div class="w-full h-[15vh]"><description/></div>
        </div>
        <div class="grid col-span-2 h-[70vh] gap-4">
          <div class="w-[99%] h-[35vh] bg-cyan-400 rounded-[1.75rem] mr-2"><ocean/></div>
          <div class="w-[99%] h-[35vh] bg-slate-200 rounded-[1.75rem]"><parts/></div>
        </div>
      </div>
    </div>
    <div id="nav" class="grid col-span-6 h-[15vh] gap-4">
      <div class="bg-indigo-400 w-full">Footer/navbar</div>
    </div>
  </div>
</template>

<style></style>
