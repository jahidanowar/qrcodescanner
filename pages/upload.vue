<template>
  <div>
    <h1 class="text-center text-4xl font-bold">Upload qrcode image</h1>
    <!-- Input File  -->
    <div class="text-center my-10 w-full md:w-96 mx-auto">
      <label
        for="inputQr"
        class="bg-white hover:bg-indigo-500 focus:bg-indigo-500 focus:outline-none hover:text-white cursor-pointer p-5 rounded-xl border w-full flex flex-col items-center justify-center transition-colors duration-200"
      >
        <svg
          class="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          ></path>
        </svg>
        <span class="mt-2 text-base leading-normal">Upload your qr code</span>
        <client-only placeholder="Loading...">
            <qrcode-capture @decode="onDecode" class="hidden" id="inputQr"></qrcode-capture>
        </client-only>
      </label>
    </div>
    <!-- ./ Input File  -->
    <!-- Results  -->
    <div v-if="result" class="w-full md:w-96 mx-auto">
      <textarea
        type="text"
        class="w-full result rounded-lg border border-gray-300 p-2 bg-gray-200 max-h-40 focus:outline-none focus:border-indigo-500"
        v-model="result"
      ></textarea>
      <button
        class="bg-indigo-500 hover:bg-indigo-600 text-white p-2 w-full rounded-lg mt-3 flex align-middle justify-center"
        @click="copy"
      >
        <template v-if="!copied">
          <svg
            class="w-6 h-6 mr-2"
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
          copy
        </template>
        <template v-else>Copied</template>
      </button>
    </div>
    <!-- ./ Results -->
    <transition name="slide">
      <alert v-if="copied" type="success"
        >Scan content copied to clipboard 🎉</alert
      >
    </transition>
  </div>
</template>

<script>
import qrMixin from "@/mixins/qrMixin";
export default {
  mixins: [qrMixin],
  methods: {
    async copy() {
      await this.copyText(this.result).then((res) => {
        if (res) {
          this.copied = true;
          setTimeout(() => {
            this.copied = false;
          }, 3000);
        }
      });
    },
  },
};
</script>

<style></style>
