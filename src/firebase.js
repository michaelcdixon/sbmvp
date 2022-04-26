// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAAzEfpZx0xRCGqN2N34O_VVH4Tinfa9Kw",
	authDomain: "sb-mvp2.firebaseapp.com",
	projectId: "sb-mvp2",
	storageBucket: "sb-mvp2.appspot.com",
	messagingSenderId: "970961045221",
	appId: "1:970961045221:web:90956fe346cc9a3576b60c",
	measurementId: "G-FRYWFXQRTW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

export default app;
