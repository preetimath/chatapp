import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    

    apiKey: "AIzaSyDDiHaWv8BwmSJtIarGIEypcmEnEdCO7Fg",
    authDomain: "chat-app-fe412.firebaseapp.com",
    projectId: "chat-app-fe412",
    storageBucket: "chat-app-fe412.appspot.com",
    messagingSenderId: "146546826485",
    appId: "1:146546826485:web:d3021495afa2fb339b39bc"


})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }