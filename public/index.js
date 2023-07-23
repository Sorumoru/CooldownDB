// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js'
import {
  getDatabase,
  ref,
  onValue
} from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA4s_pniwW5D00trlaAyBRNSPPWPI6kGHE',
  authDomain: 'cooldown-database.firebaseapp.com',
  databaseURL:
    'https://cooldown-database-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'cooldown-database',
  storageBucket: 'cooldown-database.appspot.com',
  messagingSenderId: '310169287732',
  appId: '1:310169287732:web:7a1a669bbdadb226ea1e61',
  measurementId: 'G-H96NER6R23'
}

// Initialize Firebase
initializeApp(firebaseConfig)

// Initialize Database
const db = getDatabase()

onValue(ref(db, 'Celsius'), snapshot => {
  var data = snapshot.val()
  document.getElementById('Celsius').innerHTML = data
  setTemperatureBackground(data)
})

onValue(ref(db, 'Fahrenheit'), snapshot => {
  var data = snapshot.val()
  document.getElementById('Fahrenheit').innerHTML = data
})

onValue(ref(db, 'TemperatureStatus'), snapshot => {
  var data = snapshot.val()
  document.getElementById('TemperatureStatus').innerHTML = data
})

function setTemperatureBackground (temperature) {
  const body = document.body

  if (temperature <= 10) {
    body.style.backgroundColor = 'rgb(163, 221, 203)'
  } else if (temperature > 10 && temperature <= 17) {
    body.style.backgroundColor = 'rgb(203, 255, 169)'
  } else if (temperature > 18 && temperature <= 30) {
    body.style.backgroundColor = 'rgb(255, 214, 165)'
  } else {
    body.style.backgroundColor = 'rgb(255, 155, 155)'
  }
}
