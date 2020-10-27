<template>
  <v-form>
    <v-card-title class="pa-0 ma-0" v-if="question.title">{{
      question.title
    }}</v-card-title>
    <v-card-text class="pa-0 ma-0" v-if="question.text">{{
      question.text
    }}</v-card-text>
    <v-radio-group v-model="choice">
      <v-radio v-if="question.option1" :label="question.option1"></v-radio>
      <v-radio v-if="question.option2" :label="question.option2"></v-radio>
      <v-radio v-if="question.option3" :label="question.option3"></v-radio>
      <v-radio v-if="question.option4" :label="question.option4"></v-radio>
    </v-radio-group>
  </v-form>
</template>

<script>
export default {
  props: {
    question: Object
  },
  data: () => ({
    choice: null
  })
};
</script>

<style></style>
