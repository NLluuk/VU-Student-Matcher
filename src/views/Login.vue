<template>
  <div class="fill-height">
    <Navbar />
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Email"
                  v-model="email"
                  prepend-icon="mdi-email"
                  type="text"
                ></v-text-field>

                <v-text-field
                  label="Password"
                  v-model="password"
                  prepend-icon="mdi-lock"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="signIn">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar },
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    signIn() {
      this.$router.push({ name: "Home" });
    },
    resetPassword() {}
  }
};
</script>