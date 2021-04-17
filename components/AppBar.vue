<template>
  <header class="w-full bg-white border-b-8 md:border-b-0 md:border-t-8 border-indigo-500 fixed md:relative bottom-0">
    <div
      class="nav flex justify-between"
    >
      <nuxt-link class="self-center font-bold md:text-2xl sm:py-2 leading-5 logo hidden sm:block" to="/">
        <!-- <img src="../assets/img/logo.svg" alt="QrCode Scanner" class="h-10" /> -->
        Qrcode <span class="text-indigo-500">Scanner</span>
      </nuxt-link>
      <nav class="self-center w-full sm:w-auto">
        <ul class="inline-flex justify-between align-middle w-full sm:w-auto">
          <li class="p-5">
            <nuxt-link to="/" class="flex flex-col items-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              scan</nuxt-link
            >
          </li>
          <li class="p-5">
            <nuxt-link :to="{name: 'upload'}" class="flex flex-col items-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
              upload</nuxt-link
            >
          </li>
          <li class="p-5">
            <nuxt-link :to="{name: 'history'}" class="flex flex-col items-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              history</nuxt-link
            >
          </li>
          <li class="p-5">
            <a href="https://qr.foxflue.com" class="flex flex-col items-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
              generate</a
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