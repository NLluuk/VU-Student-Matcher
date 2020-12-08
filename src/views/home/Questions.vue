<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        v-for="question in questions"
        :key="question.title"
        :step="questions.indexOf(question) + 1"
        :complete="e1 > questions.indexOf(question) + 1"
        editable
      >
        Question {{ questions.indexOf(question) + 1 }}
      </v-stepper-step>
    </v-stepper-header>
    <v-stepper-items v-for="question in questions" :key="question.title">
      <v-stepper-content :step="questions.indexOf(question) + 1">
        <question :question="question"></question>
      </v-stepper-content>
    </v-stepper-items>
    <v-row class="mx-auto pa-2">
      <v-btn color="primary" @click="nextStep">
        {{ buttonTitle }}
      </v-btn>
      <v-btn text @click="previousStep" :disabled="isDisabled"> Back </v-btn>
    </v-row>
  </v-stepper>
</template>

<script>
//import firebase from "@/firebase";
import Question from "@/components/Question.vue";
export default {
  components: { Question },
  name: "questions",
  data: () => ({
    e1: 1,
    isDisabled: true,
    buttonTitle: "Continue",
    questions: [
      {
        title:
          "Question #1: How much effort would you like to put into your project? ",
        text: "Please choose one:",
        option1: "As little as possible",
        option2: "minimun input, maximum output!",
        option3: "Just enough for a 6",
        option4: "Going for that 10!",
      },
      {
        title:
          "Question #2: Would you prefer to work with people of the oposite gender?",
        text: "Please choose one:",
        option1: "I does not matter with who I work",
        option2: "I only prefer to work with people of the same gender",
        option3: "I only prefer to work with people of the oposite gender",
      },
      {
        title:
          "Question #3: Lorem ipsum dolor sit amet, consectetuer adipiscing elit?",
        text: "Please choose one:",
        option1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        option2: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        option3: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        option4: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      },
    ],
  }),
  methods: {
    submit() {
      console.log("Form has been submitted!");
    },
    nextStep() {
      if (this.e1 >= this.questions.length) {
        this.submit();
      } else {
        this.e1 == this.e1++;
        this.checkButtonStatus();
      }
    },
    previousStep() {
      this.e1 == this.e1--;
      this.checkButtonStatus();
    },
    checkButtonStatus() {
      if (this.e1 <= 1) {
        this.isDisabled = true;
        this.buttonTitle = "Continue";
      } else if (this.e1 == this.questions.length) {
        this.buttonTitle = "Submit";
        this.isDisabled = false;
      } else {
        this.isDisabled = false;
        this.buttonTitle = "Continue";
      }
    },
  },
  // firestore: {
  //   questions: firebase.firestore().collection("questions"),
  // },
};
</script>

<style>
html {
  overflow: hidden;
}
</style>
