<template>
  <button @click="increment">Add 1</button>
  <button @click="increase({ value: 20 })">Add 20</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("numbers", ["increment", "increase"]),
    // ...mapActions({
    //   inc1: "increment",
    //   incX: "increase",
    // }),
    // addOne() {
    //   this.$store.dispatch("increment");
    // },
  },
};
</script>
