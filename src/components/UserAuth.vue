<template>
  <button v-if="!userIsAuthenticated" @click="login">Login</button>
  <button v-else @click="logout">Logout</button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["login", "logout"]),
    // login() {
    //   this.$store.dispatch("login");
    // },
    // logout() {
    //   this.$store.dispatch("logout");
    // },
  },
  computed: {
    ...mapGetters(["userIsAuthenticated"]),
  },
};
</script>
