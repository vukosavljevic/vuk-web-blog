
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAJpf3a3ED3GZndBZh9Q7mW_vstMf-meoY",
  authDomain: "vue-vuk-blog.firebaseapp.com",
  databaseURL: "https://vue-vuk-blog-default-rtdb.firebaseio.com",
  projectId: "vue-vuk-blog",
  storageBucket: "vue-vuk-blog.appspot.com",
  messagingSenderId: "272273077056",
  appId: "1:272273077056:web:e2b85de9583cef794d40a5",
  measurementId: "G-XJ0ZQ2KWTL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)