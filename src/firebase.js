import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, setDoc, increment } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcwMFlb-5eGP716RXDOQBK5YasMd6FEeg",
  authDomain: "geisila-portifolio.firebaseapp.com",
  projectId: "geisila-portifolio",
  storageBucket: "geisila-portifolio.appspot.com",
  messagingSenderId: "1081594911062",
  appId: "1:1081594911062:web:319319c20540b50abe9ef7",
  measurementId: "G-70GKQ3MPGZ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, doc, getDoc, setDoc, increment, auth };
