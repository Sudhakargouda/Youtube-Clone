import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "process.env.FIREBASE_KEY",
  authDomain: "video-77907.firebaseapp.com",
  projectId: "video-77907",
  storageBucket: "video-77907.appspot.com",
  messagingSenderId: "661112649446",
  appId: "1:661112649446:web:1c383410d586eefc3ded27"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
