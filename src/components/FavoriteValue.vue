<template>
  <h3>Normalized: {{ normalizedCounter }}</h3>
  <p>we do more here...</p>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["normalizedCounter"]),
    // counter() {
    //   return this.$store.getters.normalizedCounter;
    // },
  },
};
</script>
