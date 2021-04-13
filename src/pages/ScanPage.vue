<template>
  <h1 class="text-center text-4xl font-bold">Scan your qrcode</h1>
  <qr-stream
    @decode="onDecode"
  >
  </qr-stream>
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
