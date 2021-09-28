import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyDbV5pXHNVuEr7qbKDzf1h4T2BW_IKAYvs',
	authDomain: 'signcounter-c438b.firebaseapp.com',
	projectId: 'signcounter-c438b',
	storageBucket: 'signcounter-c438b.appspot.com',
	messagingSenderId: '3152192996',
	appId: '1:3152192996:web:49462db0d0d1d89d3293f1',
	measurementId: 'G-RGQS4KQZN9'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.firestore(app);
const auth = firebase.auth();

export { db, auth };
