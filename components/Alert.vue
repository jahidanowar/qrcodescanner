<template>
  <div
    class="alert bg-white alert rounded-xl border-l-4 p-3 inline-flex items-center fixed"
    :class="type == 'success' ? 'border-green-400' : 'border-red-400'"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    type: String,
  },
};
</script>

<style>
.alert {
  top: 15px;
  right: 15px;
  z-index: 111111111;
}
</style>