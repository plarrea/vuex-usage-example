<template>
  <h3>{{ counter }}</h3>
  <h3>Final Counter: {{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("numbers", ["counter", "finalCounter"]),
    // counter() {
    //   return this.$store.state.numbers.counter;
    // },
  },
};
</script>
