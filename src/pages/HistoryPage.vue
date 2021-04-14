<template>
  <h1 class="text-center text-4xl font-bold mb-10">Scan History</h1>
  <div v-if="getQrData.length >= 1" class="conatiner mb-20">
    <div
      v-for="(scan, i) in getQrData"
      :key="i"
      class="inline-flex items-center w-full rounded-xl border bg-white p-3 justify-between mb-5"
    >
      <p>{{ scan.content }}</p>
      <p>{{ new Date(scan.time).toDateString() }}</p>
      <button class="bg-red-400 text-white p-2 rounded-full" @click="remove(i)">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
      </button>
    </div>
  </div>
  <div v-else class="container text-center">
    <p class="text-xl">Scan data not found 🤥</p>
    <p>
      Start scanning now 👉
      <router-link :to="{ name: 'Home' }" class="text-indigo-500 underline">Scan Qr Code</router-link>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getQrData"]),
  },
  methods: {
    addQrData() {
      this.$store.dispatch("addData", {
        id: Math.floor(Math.random() * 100),
        time: Date.now(),
        content: "https://dadofcad.com",
      });
    },
    remove(index) {
      this.$store.dispatch("removeData", index);
    },
  },
  mounted() {
    this.$store.dispatch("getData");
  },
};
</script>

<style></style>
