<template>
  <h1 class="text-center text-4xl font-bold">Drag and Drop your qrcode</h1>
  <qr-dropzone
    @decode="onDecode"
    class="w-full h-48 bg-gray-300 rounded-lg my-10 text-center grid place-content-center"
  >
    Drop your qrcode here
  </qr-dropzone>
  {{data}}
</template>

<script>
export default {
  data(){
    return{
      data: null
    }
  },
  methods: {
    onDecode(data) {
      this.data = data
      console.log(data);
    },
  },
};
</script>

<style></style>
