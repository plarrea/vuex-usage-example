<template>
  <base-container title="Vuex">
    <TheCounter />
    <ChangeCounter />
    <button @click="increase">Add 10</button>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import TheCounter from "./components/TheCounter.vue";

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
  },
  methods: {
    increase() {
      this.$store.commit("increase", { value: 10 });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
