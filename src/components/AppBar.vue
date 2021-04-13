<template>
  <header class="bg-white border-t-8 border-indigo-500">
    <div
      class="container mx-auto py-5 sm:py-0 flex flex-wrap justify-center sm:justify-between"
    >
      <router-link class="block self-center font-bold text-2xl sm:py-2" to="/">
        <img src="../assets/img/logo.svg" alt="QrCode Scanner" class="h-10" />
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
              /generator</a
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
