import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCw_serwp4nP-gbh5f3gjZttgHiLTbEuCM",
    authDomain: "vue-student-matcher.firebaseapp.com",
    databaseURL: "https://vue-student-matcher.firebaseio.com",
    projectId: "vue-student-matcher",
    storageBucket: "vue-student-matcher.appspot.com",
    messagingSenderId: "530114052145",
    appId: "1:530114052145:web:60d5c9ebcc6df68de2d510"
};

firebase.initializeApp(config);

export default firebase;