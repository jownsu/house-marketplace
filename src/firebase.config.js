import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBkostt-glsahOKRHqOsQjcF2EmCme8vOA',
  authDomain: 'house-marketplace-94718.firebaseapp.com',
  projectId: 'house-marketplace-94718',
  storageBucket: 'house-marketplace-94718.appspot.com',
  messagingSenderId: '657153333362',
  appId: '1:657153333362:web:2285a04f095a3fe51c4aeb',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
