<template>
  <h1 class="text-center text-4xl font-bold">Scan your qrcode</h1>
  <div class="w-full md:w-96 h-auto overflow-hidden rounded-lg mx-auto my-10">
    <qr-stream @decode="onDecode"> </qr-stream>
  </div>
  {{ data }}
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    onDecode(data) {
      this.data = data;
      console.log(data);
    },
  },
};
</script>

<style></style>
