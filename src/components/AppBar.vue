<template>
  <header class="bg-white border-b-8 md:border-b-0 md:border-t-8 border-indigo-500 fixed md:relative bottom-0">
    <div
      class="container mx-auto md:py-5 sm:py-0 flex justify-between"
    >
      <router-link class="block self-center font-bold md:text-2xl sm:py-2 leading-5" to="/">
        <!-- <img src="../assets/img/logo.svg" alt="QrCode Scanner" class="h-10" /> -->
        Qrcode <span class="text-indigo-500">Scanner</span>
      </router-link>
      <nav class="self-center">
        <ul class="inline-flex justify-between align-middle">
          <li class="p-5">
            <router-link to="/" class="flex  align-middle">
              /scan</router-link
            >
          </li>
          <li class="p-5">
            <router-link to="/drop" class="flex  align-middle">
              /upload</router-link
            >
          </li>
          <li class="p-5">
            <a href="https://qr.foxflue.com" class="flex  align-middle">
              /generate</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppBar",
};
</script>

<style></style>
