<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <TheCounter />
    <FavoriteValue />
    <ChangeCounter />
    <button @click="increase">Add 10</button>
  </base-container>
  <base-container title="Auth">
    <UserAuth />
  </base-container>
</template>

<script>
import { mapGetters } from "vuex";
import BaseContainer from "./components/BaseContainer.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";
import TheCounter from "./components/TheCounter.vue";
import UserAuth from "./components/UserAuth.vue";

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  methods: {
    increase() {
      this.$store.dispatch("numbers/increase", { value: 10 });
    },
  },
  computed: {
    ...mapGetters(["userIsAuthenticated"]),
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
