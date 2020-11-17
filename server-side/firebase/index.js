const firebase = require('firebase-admin')
const credentials = require('./fir-auth-server-2a5d4-firebase-adminsdk-6g7rk-17fdbdf11c.json')
firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL: 'https://fir-auth-server-2a5d4.firebaseio.com',
})
module.exports = firebase
