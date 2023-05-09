// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJQrWArDx2Tg0GtOVTAv521VqmtnLClM8",
  authDomain: "todoapp-e95fb.firebaseapp.com",
  projectId: "todoapp-e95fb",
  storageBucket: "todoapp-e95fb.appspot.com",
  messagingSenderId: "712886372751",
  appId: "1:712886372751:web:9944224ccb189096aae3fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
