<template>
  <app-bar />
  <div class="container py-10 min-h-screen">
    <router-view />
  </div>
</template>

<script>
import AppBar from "./components/AppBar.vue";
export default {
  components: {
    AppBar,
  },
};
</script>

<style></style>
