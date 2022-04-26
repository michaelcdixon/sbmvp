import "./App.css";
import "./firebase.js";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Events from "./pages/Events";
import Annual from "./pages/Annual";
import Contact from "./pages/Contact";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
	return (
		<Router>
			<Navbar />
			<AuthContextProvider>
				<Routes>
					<Route path="/" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route
						path="/account"
						element={
							<ProtectedRoute>
								<Account />
							</ProtectedRoute>
						}
					/>
					<Route path="/about" element={About} />
					<Route path="/events" element={Events} />
					<Route path="/annual" element={Annual} />
					<Route path="/contact" element={Contact} />
				</Routes>
			</AuthContextProvider>
		</Router>
	);
}

export default App;
