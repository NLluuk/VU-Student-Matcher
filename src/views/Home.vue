<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step v-for="n in 7" :key="n" :step="n" :complete="e1 > n">
        Question {{ n }}
      </v-stepper-step>
    </v-stepper-header>
    <v-stepper-items v-for="n in 7" :key="n">
      <v-stepper-content :step="n">
        <question title="Question #1" text="test1"></question>
      </v-stepper-content>
    </v-stepper-items>
    <v-btn color="primary" @click="nextStep">
      Continue
    </v-btn>
    <v-btn text @click="previousStep">
      Cancel
    </v-btn>
  </v-stepper>
</template>

<script>
import Question from "@/components/Question.vue";
export default {
  components: { Question },
  data: () => ({
    e1: 1,
    show: true,
    currentStep: 1,
    questions: [
      {
        title: "This is  test question #1, just fill in the blanks?",
        text: "This is a not so short test description"
      },
      {
        title: "This is  test question #2, just fill in the blanks?",
        text: "This is a not so short test description"
      },
      {
        title: "This is  test question #3, just fill in the blanks?",
        text: "This is a not so short test description"
      },
      {
        title: "This is  test question #4, just fill in the blanks?",
        text: "This is a not so short test description"
      },
      {
        title: "This is  test question #5, just fill in the blanks?",
        text: "This is a not so short test description"
      },
      {
        title: "This is  test question #6, just fill in the blanks?",
        text: "This is a not so short test description"
      },
      {
        title: "This is  test question #7, just fill in the blanks?",
        text: "This is a not so short test description"
      }
    ]
  }),
  methods: {
    nextStep() {
      this.e1 == this.e1++;
      this.currentStep = this.currentStep++;
    },

    previousStep() {
      this.e1 == this.e1--;
      this.currentStep = this.currentStep--;
    }
  }
};
</script>

<style>
</style>