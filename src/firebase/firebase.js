import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzQpEe5nN7VKH6igExuZPUOsMKJxYxQa4",
  authDomain: "kobeiganehealth-d3607.firebaseapp.com",
  projectId: "kobeiganehealth-d3607",
  storageBucket: "kobeiganehealth-d3607.appspot.com",
  messagingSenderId: "460204243055",
  appId: "1:460204243055:web:db5932c1fadaa2c779759a"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };