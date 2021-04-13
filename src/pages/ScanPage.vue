<template>
  <h1 class="text-center text-4xl font-bold">Scan your qrcode</h1>
  <div class="w-full md:w-96 h-auto overflow-hidden rounded-lg mx-auto my-10">
    <qr-stream :camera="camera" @decode="onDecode">
      <div
        v-if="camera === 'off'"
        class="absolute w-full h-full grid justify-items-center items-center bg-gray-600 bg-opacity-70"
      >
        <button @click="turnCameraOn" class="bg-white rounded-full p-5">
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
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
        </button>
      </div>
    </qr-stream>
  </div>
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
      camera: "auto",
      copied: false,
    };
  },
  methods: {
    onDecode(data) {
      this.result = data;
      this.turnCameraOff();
    },
    turnCameraOff() {
      this.camera = "off";
    },
    turnCameraOn() {
      this.camera = "auto";
    },
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
