import { defineStore } from "pinia";

export const useBearStore = defineStore("bears", {
  state: () => ({
    bears: [] as string[],
  }),

  actions: {
    addBear() {
      this.bears.push("🐻");
    },
    removeAllBears() {
      this.bears = [];
    },
  },
});
