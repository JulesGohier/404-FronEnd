<script setup lang="ts">
const props = defineProps({
  actions: Array,
  selectedId: {
    type: Number,
    required: false,
  },
});
const action1id = ref<number>();
const action2id = ref<number>();
const action3id = ref<number>();

const actions1 = computed((): any => {
  return props.actions?.filter(
    (action: any) => action.categorie === "Protection_de_l'environnement_marin"
  );
});
const actions2 = computed((): any => {
  return props.actions?.filter(
    (action: any) =>
      action.categorie === "Restauration_de_la_biodiversite_marine"
  );
});
const actions3 = computed((): any => {
  return props.actions?.filter(
    (action: any) => action.categorie === "Sensibilisation_et_education"
  );
});

onMounted(() => {
  const actions1Elmt = document.getElementById("actions1");
  const action1Spans = actions1Elmt?.querySelectorAll(".action");

  action1Spans?.forEach((span, index) => {
    if (index < action1Spans.length - 1) {
      const separator = document.createElement("span");
      separator.classList.add("separator");
      span.insertAdjacentElement("afterend", separator);
    }
  });

  const actions2Elmt = document.getElementById("actions2");
  const action2Spans = actions2Elmt?.querySelectorAll(".action");

  action2Spans?.forEach((span, index) => {
    if (index < action2Spans.length - 1) {
      const separator = document.createElement("span");
      separator.classList.add("separator");
      span.insertAdjacentElement("afterend", separator);
    }
  });

  const actions3Elmt = document.getElementById("actions3");
  const action3Spans = actions3Elmt?.querySelectorAll(".action");

  action3Spans?.forEach((span, index) => {
    if (index < action3Spans.length - 1) {
      const separator = document.createElement("span");
      separator.classList.add("separator");
      span.insertAdjacentElement("afterend", separator);
    }
  });
});
const clicked = (action: any) => {
  if (action.canBuy) emits("select", action);
};
const emits = defineEmits<{
  (event: "select", data: any): void;
}>();
</script>

<template>
  <div class="size-full rounded-3xl ml-2" id="backgroundAction">
    <div class="grid h-[100%] w-[100%]" id="actions">
      <div id="actions1" class="grid grid-cols-11">
        <div></div>
        <span
          v-for="action in actions1"
          @click="clicked(action)"
          class="action"
          :class="
            action.buyed
              ? 'cursor-default'
              : action.canBuy
              ? 'cursor-pointer'
              : 'disabled opacity-50 cursor-not-allowed	'
          "
        >
          <div
            :class="
              selectedId === action.id
                ? 'text-cyan-300'
                : action.buyed
                ? 'text-green-500'
                : action.canBuy
                ? 'text-slate-100'
                : 'text-red-400'
            "
            v-html="action.svg"
          ></div>
        </span>
        <div></div>
      </div>
      <div id="actions2" class="grid grid-cols-11">
        <div></div>
        <span
          v-for="action in actions2"
          @click="clicked(action)"
          class="action"
          :class="
            action.buyed
              ? 'cursor-default'
              : action.canBuy
              ? 'cursor-pointer'
              : 'disabled opacity-50 cursor-not-allowed	'
          "
        >
          <div
            :class="
              selectedId === action.id
                ? 'text-cyan-300'
                : action.buyed
                ? 'text-green-500'
                : action.canBuy
                ? 'text-slate-100'
                : 'text-red-400'
            "
            v-html="action.svg"
          ></div>
        </span>
        <div></div>
      </div>
      <div id="actions3" class="grid grid-cols-11">
        <div></div>
        <span
          v-for="action in actions3"
          @click="clicked(action)"
          class="action"
          :class="
            action.buyed
              ? 'cursor-default'
              : action.canBuy
              ? 'cursor-pointer'
              : 'disabled opacity-50 cursor-not-allowed	'
          "
        >
          <div
            :class="
              selectedId === action.id
                ? 'text-cyan-300'
                : action.buyed
                ? 'text-green-500'
                : action.canBuy
                ? 'text-slate-100'
                : 'text-red-400'
            "
            v-html="action.svg"
          ></div>
        </span>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style>
#actions1,
#actions2,
#actions3 {
  height: 80%;
  width: 100%;

  @apply place-items-center;
}
#actions1 span:not(.separator) {
  @apply bg-slate-500 text-white items-center w-[100%] h-[50%] justify-center flex text-2xl mask mask-square;
}

#actions2 span:not(.separator) {
  @apply bg-slate-500 text-white items-center w-[100%] h-[50%] justify-center flex text-2xl mask mask-hexagon-2;
}

#actions3 span:not(.separator) {
  @apply bg-slate-500 text-white items-center w-[100%] h-[50%] justify-center flex text-2xl mask mask-circle;
}

#actions svg {
  @apply size-10;
}

span.separator {
  @apply w-[90%] h-1 border-b-2 border-black;
}

#backgroundAction {
  @apply bg-slate-600 shadow-lg shadow-black;
}
</style>
