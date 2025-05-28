// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { createContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';

const firebaseConfig = {
  apiKey: "AIzaSyA3jM7daTGdW6deAdCzrNemdp4d9JwUOrY",
  authDomain: "delivery-app-89061.firebaseapp.com",
  projectId: "delivery-app-89061",
  appId: "delivery-app-89061",
  // Add other keys as needed
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const AuthContext = createContext();
