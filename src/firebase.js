
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCtwMAIZgjcCoxszRSl9vA3gvVXYAcstgo",
  authDomain: "react-auth-2cdd7.firebaseapp.com",
  projectId: "react-auth-2cdd7",
  storageBucket: "react-auth-2cdd7.appspot.com",
  messagingSenderId: "567708149342",
  appId: "1:567708149342:web:0eabf1465e308a5dd8f6cf",
  measurementId: "G-SRFJGVDDT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
