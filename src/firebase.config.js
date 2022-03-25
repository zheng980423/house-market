import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCgr42AP1N6HPuUJItPHLBQoI-dNs-vi5w',
  authDomain: 'house-markeplace-app-16218.firebaseapp.com',
  projectId: 'house-markeplace-app-16218',
  storageBucket: 'house-markeplace-app-16218.appspot.com',
  messagingSenderId: '546835150852',
  appId: '1:546835150852:web:86187969e9d3e8b4d1dd51',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
