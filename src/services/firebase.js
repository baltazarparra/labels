import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA9oSHLoOHOFtydQtMEd2rYo4xYo0VVwhE",
  authDomain: "labels-b0476.firebaseapp.com",
  databaseURL: "https://labels-b0476.firebaseio.com",
  projectId: "labels-b0476",
  storageBucket: "labels-b0476.appspot.com",
  messagingSenderId: "937230223574"
}

firebase.initializeApp(config)

export default firebase
