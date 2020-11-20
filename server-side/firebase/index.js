const firebase = require('firebase-admin')
const credentials = require('./credentials.json')
firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL: 'https://fir-auth-server-2a5d4.firebaseio.com',
})
module.exports = firebase
