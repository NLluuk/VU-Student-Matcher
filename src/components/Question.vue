<template>
  <v-form>
    <!-- <v-card-title>{{ question.title }}</v-card-title>
    <v-card-text>{{ question.text }}</v-card-text> -->
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ text }}</v-card-text>
    <v-radio-group>
      <v-radio
        v-for="n in 4"
        :key="n"
        :label="`Option ${n}`"
        :value="n"
      ></v-radio>
    </v-radio-group>
  </v-form>
</template>

<script>
export default {
  // props: {
  //   question: Object
  // },
  props: ["title", "text"],
  data: () => ({

  })
};
</script>

<style>
</style>