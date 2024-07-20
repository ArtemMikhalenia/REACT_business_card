import React from "react";
import "./App.css";
import Info from "./components/Info/Info";
import About from "./components/About/About";
import Interests from "./components/Interests/Interests";
import Links from "./components/Links/Links";

function App() {
	return (
		<div className="card">
			<Info />
			<About />
			<Interests />
			<Links />
		</div>
	);
}

export default App;
