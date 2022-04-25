// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB18mSzky5MA5OFy42IT6jjgdLbqyYpb7Q",
	authDomain: "sbmvp-f5201.firebaseapp.com",
	projectId: "sbmvp-f5201",
	storageBucket: "sbmvp-f5201.appspot.com",
	messagingSenderId: "441906366145",
	appId: "1:441906366145:web:acda503427a488af0bf640",
	measurementId: "G-4MPEDJ8Q9P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
