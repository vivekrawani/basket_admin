import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const env = import.meta.env;
const firebaseConfig = {
  apiKey: env.VITE_apiKey,
  authDomain: env.VITE_authDomain,
  projectId: env.VITE_projectId,
  storageBucket: env.VITE_storageBucket,
  messagingSenderId: env.VITE_messagingSenderId,
  appId: env.VITE_appId,
  measurementId: env.VITE_measurementId,
};

export const app = initializeApp(firebaseConfig);

// google signup
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
export const googleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const {email, phoneNumber, photoURL,displayName, } = result.user;
    const data = {email,displayName, phoneNumber, photoURL, }
    return data;
  } catch (error) {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(error);
    throw new Error(errorCode)

  }
};
