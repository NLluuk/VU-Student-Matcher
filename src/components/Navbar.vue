<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>VU Student Matcher</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-title>{{ username }}</v-toolbar-title>
    <v-btn icon @click="signOut">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "navbar",
  data: () => ({
    username: "Luuk Wagenaar"
  }),
  methods: {
    signOut() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>
