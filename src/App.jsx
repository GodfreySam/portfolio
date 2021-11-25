import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";


const App = () => {
	return (
		<div id="colorlib-page">
			<div id="container-wrap">
				<Sidebar />
				<div id="colorlib-main">
					<Hero />
					<About />
					<Services />
					<Work />
					<Contact />
				</div>
			</div>

			<Toaster
				position="top-right"
				toastOptions={{
					className: "",
					duration: 7000,
					style: {
						color: "#fff",
					},
					success: {
						style: {
							background: "green",
						},
					},
					error: {
						style: {
							background: "red",
						},
					},
				}}
			/>
		</div>
	);
};

export default App;
