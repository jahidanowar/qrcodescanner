<template>
  <h1 class="text-center text-4xl font-bold">Drag and Drop your qrcode</h1>
  <qr-capture
    @decode="onDecode"
    class="w-full h-48 bg-gray-300 rounded-lg my-10 text-center grid place-content-center"
  >
  </qr-capture>
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
</template>

<script>
import qrMixin from "./../mixins/qrMixin";
export default {
  mixins: [qrMixin],
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    async copy() {
      await this.copyText(this.result).then((res) => {
        if (res) {
          this.copied = true;
        }
      });
    },
  },
};
</script>

<style></style>
