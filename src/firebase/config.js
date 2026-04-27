import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAP-yusb9jR4ftlvEwYUh5S27Xeu9tJoyw",
  authDomain: "odyssey-a05b2.firebaseapp.com",
  projectId: "odyssey-a05b2",
  storageBucket: "odyssey-a05b2.firebasestorage.app",
  messagingSenderId: "853904456011",
  appId: "1:853904456011:web:124cf778d992ac11da90ce",
  measurementId: "G-FFZ6FTQS02",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
