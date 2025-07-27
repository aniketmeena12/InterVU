import {getApp,getApps,initializeApp} from "firebase/app";
import{ getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSendersId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDERS_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const App = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(App);

export{db};