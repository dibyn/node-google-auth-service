import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyAxWSoYettYzddbkiKop2CDuWBAIRF7Kro',
  authDomain: 'fir-auth-server-2a5d4.firebaseapp.com',
  databaseURL: 'https://fir-auth-server-2a5d4.firebaseio.com',
  projectId: 'fir-auth-server-2a5d4',
  storageBucket: 'fir-auth-server-2a5d4.appspot.com',
  messagingSenderId: '502000844533',
  appId: '1:502000844533:web:cc51e2cd65b9ac1d380fbc',
  measurementId: 'G-6F6C25Z4MM',
}
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
export { auth, firebase }
