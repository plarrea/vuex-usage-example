<template>
  <h3>Normalized: {{ normalizedCounter }}</h3>
  <p>we do more here...</p>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("numbers", ["normalizedCounter"]),
    // counter() {
    //   return this.$store.getters.normalizedCounter;
    //   return this.$store.getters['numbers/normalizedCounter'];
    // },
  },
};
</script>
