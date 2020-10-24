<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
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
        <question :question="question"></question>
      </v-stepper-content>
    </v-stepper-items>
    <v-btn color="primary" @click="nextStep">
      {{ buttonTitle }}
    </v-btn>
    <v-btn text @click="previousStep" :disabled="isDisabled">
      Back
    </v-btn>
  </v-stepper>
</template>

<script>
//import firebase from "@/firebase";
import Question from "@/components/Question.vue";
export default {
  components: { Question },
  data: () => ({
    e1: 1,
    isDisabled: true,
    buttonTitle: "Continue",
    questions: [
      {
        title: "Question 1",
        text: "The actual questing regarding the matching"
      },
      {
        title: "Question 2",
        text: "The actual questing regarding the matching"
      },
      {
        title: "Question 3",
        text: "The actual questing regarding the matching"
      },
      {
        title: "Question 4",
        text: "The actual questing regarding the matching"
      },
      {
        title: "Question 5",
        text: "The actual questing regarding the matching"
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
      } else if (this.e1 >= this.questions.length) {
        this.buttonTitle = "Submit";
        this.isDisabled = false;
      } else {
        this.isDisabled = false;
        this.buttonTitle = "Continue";
      }
    }
  }
  // firestore: {
  //   questions: firebase.firestore().collection("questions")
  // }
};
</script>

<style>
</style>