// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBl07bIu-ZW-iLqKn7-aY4q996AQY2H5vQ',
  authDomain: 'todo-app-8ea5d.firebaseapp.com',
  projectId: 'todo-app-8ea5d',
  storageBucket: 'todo-app-8ea5d.appspot.com',
  messagingSenderId: '155741538436',
  appId: '1:155741538436:web:f6bd93c41752be64b21ad1',
  measurementId: 'G-ND0VN6JCKR',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
