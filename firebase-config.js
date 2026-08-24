import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAcjwzfF1qwTilmhDcKc1WU2DCJqtNWprE",
  authDomain: "digital-equb-9f71e.firebaseapp.com",
  projectId: "digital-equb-9f71e",
  storageBucket: "digital-equb-9f71e.firebasestorage.app",
  messagingSenderId: "973949186370",
  appId: "1:973949186370:web:825cc92317f8d97a2998db"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };
