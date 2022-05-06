// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCDg-diFBGwnHrBlBntvfdUAJ5AA4i_4Gg',
  authDomain: 'todo-app-2-95fee.firebaseapp.com',
  projectId: 'todo-app-2-95fee',
  storageBucket: 'todo-app-2-95fee.appspot.com',
  messagingSenderId: '822105635235',
  appId: '1:822105635235:web:65912ff8be1c3d480d8216',
  measurementId: 'G-25XZ18KG8S',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
