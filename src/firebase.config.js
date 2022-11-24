import { getApp, getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDXzbZkRkw1lhqxreIyjBfC_7UwrHhV7zc",
  authDomain: "snscanteen.firebaseapp.com",
  databaseURL: "https://snscanteen-default-rtdb.firebaseio.com",
  projectId: "snscanteen",
  storageBucket: "snscanteen.appspot.com",
  messagingSenderId: "162402544741",
  appId: "1:162402544741:web:9ae1678347aa5d79efea8c",
  measurementId: "G-S8Y38NR4Y2"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
