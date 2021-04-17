<template>
  <div>
    <h1 class="text-center text-4xl font-bold mb-10">Scan History</h1>

    <div v-if="getQrData.length >= 1" class="conatiner mb-20">
      <div
        v-for="(scan, i) in getQrData"
        :key="i"
        class="flex items-center w-full rounded-xl border bg-white p-3 justify-between mb-5"
      >
        <div>
          <p>
            {{
              scan.content.length > 20
                ? scan.content.slice(0, 20)
                : scan.content
            }}...
          </p>
          <p class="text-xs">{{ new Date(scan.time).toDateString() }}</p>
        </div>
        <div class="inline-flex">
          <button
            class="bg-indigo-500 text-white p-2 rounded-full mr-2 focus:outline-none"
            @click="copy(scan.content)"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              ></path>
            </svg>
          </button>
          <button
            class="bg-red-400 text-white p-2 rounded-full focus:outline-none"
            @click="remove(i)"
          >
            <svg
              class="w-5 h-5"
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
    </div>
    <div v-else class="container text-center">
      <p class="text-xl">Scan data not found 🤥</p>
      <p>
        Start scanning now 👇 <br />
        <router-link :to="{ name: 'Home' }" class="text-indigo-500 underline"
          >Scan Qr Code</router-link
        >
      </p>
    </div>
    <transition name="slide">
      <alert v-if="copied" type="success"
        >Scan content copied to clipboard 🎉</alert
      >
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import qrMixin from "@/mixins/qrMixin";

export default {
  mixins: [qrMixin],
  computed: {
    ...mapGetters(["getQrData"]),
  },
  methods: {
    remove(index) {
      this.$store.dispatch("removeData", index);
    },
    copy(content) {
      this.copyText(content)
        .then((done) => {
          this.copied = true;
          setTimeout(() => {
            this.copied = false;
          }, 1000);
        })
        .catch((e) => {
          lert("Unable to copy");
        });
    },
  },
  mounted() {
    this.$store.dispatch("getData");
  },
};
</script>

<style></style>
