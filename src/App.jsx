import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Analytics from "./components/Analytics";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Sidebar from "./components/Sidebar";
import Work from "./components/Work";

const App = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024);
			if (window.innerWidth > 1024) {
				setIsSidebarOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

	return (
		<BrowserRouter>
			<div className="app-container">
				<Analytics />
				<Sidebar
					isMobile={isMobile}
					isOpen={isSidebarOpen}
					onClose={() => setIsSidebarOpen(false)}
				/>

				{isMobile && (
					<header className="mobile-header">
						<button className="menu-button" onClick={toggleSidebar}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="3" y1="12" x2="21" y2="12" />
								<line x1="3" y1="6" x2="21" y2="6" />
								<line x1="3" y1="18" x2="21" y2="18" />
							</svg>
						</button>
						<h1 className="mobile-title">Godfrey Samuel</h1>
					</header>
				)}

				<main className="main-content">
					<AnimatePresence mode="wait">
						<motion.div
							key="content"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<Hero />
							<About />
							<Services />
							<Work />
							<Contact />
						</motion.div>
					</AnimatePresence>
				</main>

				<style jsx>{`
					.menu-button {
						background: none;
						border: none;
						color: var(--text);
						cursor: pointer;
						padding: 0.5rem;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 0.5rem;
						transition: background-color var(--transition-fast);
					}

					.menu-button:hover {
						background: var(--background-light);
					}

					.mobile-title {
						font-size: 1.5rem;
						font-weight: 700;
						background: linear-gradient(
							to right,
							var(--primary),
							var(--accent)
						);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				`}</style>

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
		</BrowserRouter>
	);
};

export default App;
