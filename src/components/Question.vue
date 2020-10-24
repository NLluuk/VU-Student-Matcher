<template>
  <v-form>
    <v-card-title v-if="question.title">{{ question.title }}</v-card-title>
    <v-card-text v-if="question.text">{{ question.text }}</v-card-text>
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
  props: {
    question: Object
  },
  data: () => ({})
};
</script>

<style>
</style>