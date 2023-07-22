// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js'
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
firebase.initializeApp(firebaseConfig)

var database = firebase.database()
var dataRef1 = database.ref('Celsius')
var dataRef2 = database.ref('Fahrenheit')
var dataRef3 = database.ref('TemperatureStatus')

dataRef1.on('value', function (getdata1) {
  var cel = getdata1.val()
  document.getElementById('Celsius').innerHTML = cel
})
dataRef2.on('value', function (getdata2) {
  var fah = getdata2.val()
  document.getElementById('Fahrenheit').innerHTML = fah
})
dataRef3.on('value', function (getdata3) {
  var sta = getdata3.val()
  document.getElementById('TemperatureStatus').innerHTML = sta
})