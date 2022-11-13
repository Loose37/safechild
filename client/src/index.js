import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {getAuth, onAuthStateChanged,signInWithEmailAndPassword,connectAuthEmulator} from "firebase/auth";
import {getFirestore, collection,getDocs,getDoc} from "firebase/firestore";

// const firebaseApp = initializeApp ({
//   apiKey: "AIzaSyBrBg457P_Yqxsk35v9dSQRv5HGtAHLQU8",
//   authDomain: "safechild-92ef7.firebaseapp.com",
//   projectId: "safechild-92ef7",
//   storageBucket: "safechild-92ef7.appspot.com",
//   messagingSenderId: "533823021156",
//   appId: "1:533823021156:web:2788f1a3ca579eb8e83f71",
//   measurementId: "G-XV60BP32MQ"


// });

// Initialize Firebase
// const app = initializeApp(firebaseApp);
// const analytics = getAnalytics(app);
// const auth = getAuth(firebaseApp);
// const db = getFirestore (firebaseApp);
// db.collection("todos").getDocs();
// const todosCol = collection(db,"todos");
// const snapshot = await getDocs(todosCol)

// Detect auth state

// connectAuthEmulator(auth,"http://localhost:9099");





// onAuthStateChanged (auth,user => {
//   if (user != null) {
//     console.log ("logged in!");
//   } else {
//     console.log ("No user")
//   }
// });



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
