<template>
  <div class="home">
    <Navbar />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "home",
  components: { Navbar }
};
</script>
