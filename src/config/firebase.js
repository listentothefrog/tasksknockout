import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB-cc9a8rbcXe6_HvJi_JKs4ylsKxVAlGM",
    authDomain: "tasksknockout.firebaseapp.com",
    projectId: "tasksknockout",
    storageBucket: "tasksknockout.appspot.com",
    messagingSenderId: "207432997257",
    appId: "1:207432997257:web:3218062878028d99f92958",
    measurementId: "G-NMEWX1G5HB"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics()

export default firebase