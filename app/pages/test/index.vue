<script setup lang="ts">
import { useBearStore } from "~/store/Bears.store";

const bearStore = useBearStore();
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-100 to-yellow-200"
  >
    <div
      class="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md text-center"
    >
      <h1 class="text-4xl font-extrabold mb-6 drop-shadow-sm">
        🐻 Bear Factory
      </h1>

      <!-- Action Buttons -->
      <div class="flex justify-center gap-4 mb-6">
        <button
          @click="bearStore.addBear"
          class="px-6 py-3 rounded-full bg-amber-500 text-white text-lg font-bold shadow-md hover:bg-amber-600 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          ➕ Spawn
        </button>

        <button
          v-if="bearStore.bears.length > 0"
          @click="bearStore.removeAllBears"
          class="px-6 py-3 rounded-full bg-red-400 text-white text-lg font-bold shadow-md hover:bg-red-500 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          🔄 Reset
        </button>
      </div>

      <!-- Bears -->
      <div
        class="relative min-h-20 flex flex-wrap justify-center gap-2 text-4xl"
      >
        <div
          v-if="bearStore.bears.length === 0"
          class="text-gray-400 italic text-base"
        >
          No bears yet… this place is sad 🥲
        </div>

        <span
          v-else
          v-for="(bear, i) in bearStore.bears"
          :key="i"
          class="animate-bounce hover:scale-125 transition-transform cursor-default"
          :style="{ animationDelay: `${i * 80}ms` }"
        >
          {{ bear }}
        </span>
      </div>

      <!-- Counter -->
      <p class="mt-4 text-sm text-gray-600">
        Total bears:
        <span class="font-extrabold text-amber-600">
          {{ bearStore.bears.length }}
        </span>
      </p>
    </div>
  </div>
</template>
