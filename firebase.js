// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDVTKqx8ieTXDm-1QwmPRAs3hRwttL5dBk',
  authDomain: 'instagram-clone-f3a66.firebaseapp.com',
  projectId: 'instagram-clone-f3a66',
  storageBucket: 'instagram-clone-f3a66.appspot.com',
  messagingSenderId: '394444139600',
  appId: '1:394444139600:web:269f4d02960314c3057555',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
