import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyClb9PtM7kAhUUloRbLJTXQCpsHDCQ8OR0",
  authDomain: "shop-art-project.firebaseapp.com",
  databaseURL:
    "https://shop-art-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shop-art-project",
  storageBucket: "shop-art-project.appspot.com",
  messagingSenderId: "792012933655",
  appId: "1:792012933655:web:a29ee226f1eb512d462a52",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
