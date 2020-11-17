/**
 * src/Login.js
 */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { auth, firebase } from '../firebase'
export default function Login() {
  const history = useHistory()
  const googleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(provider).then(
      async (result) => {
        const token = await auth.currentUser.getIdToken(true)
        if (token) {
          localStorage.setItem('@token', token)
          history.push('/book-list')
        }
      },
      function (error) {
        console.log(error)
      }
    )
  }
  console.log('Login')
  return (
    <div>
      <button onClick={googleLogin} className='login-button'>
        GOOGLE
      </button>
    </div>
  )
}
