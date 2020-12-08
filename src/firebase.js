import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/performance";

// const config = {
//   apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
//   authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.VUE_APP_FIREBASE_APP_ID,
//   measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
// };

const config = {
  apiKey: "AIzaSyCw_serwp4nP-gbh5f3gjZttgHiLTbEuCM",
  authDomain: "vue-student-matcher.firebaseapp.com",
  databaseURL: "https://vue-student-matcher.firebaseio.com",
  projectId: "vue-student-matcher",
  storageBucket: "vue-student-matcher.appspot.com",
  messagingSenderId: "530114052145",
  appId: "1:530114052145:web:60d5c9ebcc6df68de2d510",
  measurementId: "G-5SJ3WRGLBL"
};

firebase.initializeApp(config);
firebase.analytics();
firebase.performance();

export default firebase;
