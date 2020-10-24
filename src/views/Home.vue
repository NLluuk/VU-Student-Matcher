<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <!-- <v-stepper-step v-for="n in 4" :key="n" :step="n" :complete="e1 > n">
        Question {{ n }}
      </v-stepper-step> -->
      <v-stepper-step
        v-for="question in questions"
        :key="question.title"
        :step="questions.indexOf(question) + 1"
        :complete="e1 > questions.indexOf(question) + 1"
      >
        Question {{ questions.indexOf(question) + 1 }}
      </v-stepper-step>
    </v-stepper-header>
    <v-stepper-items v-for="question in questions" :key="question.title">
      <v-stepper-content :step="questions.indexOf(question) + 1">
        <question :title="question.title" :text="question.text"></question>
      </v-stepper-content>
    </v-stepper-items>
    <v-btn color="primary" @click="nextStep">
      Continue
    </v-btn>
    <v-btn text @click="previousStep" :disabled="isDisabled">
      Back
    </v-btn>
  </v-stepper>
</template>

<script>
import Question from "@/components/Question.vue";
export default {
  components: { Question },
  data: () => ({
    e1: 1,
    isDisabled: true,
    questions: [
      {
        title: "This is test question #1, just fill in the blanks?",
        text: "This is a not so short test description"
      },
      {
        title: "This is test question #2, just fill in the blanks?",
        text: "This is a not so short test description"
      },
      {
        title: "This is test question #3, just fill in the blanks?",
        text: "This is a not so short test description"
      },
      {
        title: "This is test question #4, just fill in the blanks?",
        text: "This is a not so short test description"
      }
    ]
  }),
  methods: {
    nextStep() {
      this.e1 == this.e1++;
      this.checkButtonStatus();
    },
    previousStep() {
      this.e1 == this.e1--;
      this.checkButtonStatus();
    },
    checkButtonStatus() {
      if (this.e1 <= 1) {
        this.isDisabled = true;
      } else {
        this.isDisabled = false;
      }
    }
  }
};
</script>

<style>
</style>