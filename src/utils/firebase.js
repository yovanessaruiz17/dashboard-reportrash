
import { initializeApp } from "firebase/app";
/* importar la authentication de firebase */
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAel2O0IaWOXOVc0j1XVJzZl-Ked6qd2bo",
  authDomain: "reportrashv2.firebaseapp.com",
  projectId: "reportrashv2",
  storageBucket: "reportrashv2.appspot.com",
  messagingSenderId: "186044340160",
  appId: "1:186044340160:web:fd819fa994bcaefbc3da25"
};


const app = initializeApp(firebaseConfig);

const auth = firebase.auth();

/* exportar la autenticación de firebase */
export { auth };