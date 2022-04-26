import "./App.css";
import "./config.js";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Annual from "./pages/Annual";
import Contact from "./pages/Contact";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={Home} />
				<Route path="/about" element={About} />
				<Route path="/events" element={Events} />
				<Route path="/annual" element={Annual} />
				<Route path="/contact" element={Contact} />
			</Routes>
			<div>Hello World</div>
		</Router>
	);
}

export default App;
