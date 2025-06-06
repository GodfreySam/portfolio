import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import {
	FaBriefcase,
	FaCode,
	FaEnvelope,
	FaGithub,
	FaLinkedin,
	FaPhone,
	FaTwitter,
	FaUser,
} from "react-icons/fa";

const Sidebar = ({ isMobile, isOpen, onClose }) => {
	const menuItems = [
		{ id: "about", label: "About", icon: <FaUser /> },
		{ id: "services", label: "Services", icon: <FaCode /> },
		{ id: "work", label: "Work", icon: <FaBriefcase /> },
		{ id: "contact", label: "Contact", icon: <FaPhone /> },
	];

	const socialLinks = [
		{
			icon: <FaGithub />,
			href: "https://github.com/GodfreySam",
			label: "GitHub",
		},
		{
			icon: <FaLinkedin />,
			href: "https://www.linkedin.com/in/godfreysam/",
			label: "LinkedIn",
		},
		{
			icon: <FaEnvelope />,
			href: "mailto:godfreysam09@gmail.com",
			label: "Email",
		},
	];

	const sidebarVariants = {
		hidden: { x: "-100%" },
		visible: { x: 0 },
	};

	return (
		<>
			<AnimatePresence>
				{(isOpen || !isMobile) && (
					<motion.aside
						className="sidebar"
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={sidebarVariants}
						transition={{ type: "spring", damping: 25, stiffness: 200 }}
					>
						<div className="sidebar-content">
							<div className="sidebar-header">
								<h1 className="sidebar-title">Godfrey Samuel</h1>
								<p className="sidebar-subtitle">Software Developer</p>
							</div>

							<nav className="sidebar-nav">
								<ul>
									{menuItems.map((item) => (
										<motion.li
											key={item.id}
											whileHover={{ x: 10 }}
											transition={{
												type: "spring",
												stiffness: 400,
												damping: 10,
											}}
										>
											<a
												href={`#${item.id}`}
												onClick={() => isMobile && onClose()}
												className="nav-link"
											>
												<span className="nav-icon">{item.icon}</span>
												<span className="nav-label">{item.label}</span>
											</a>
										</motion.li>
									))}
								</ul>
							</nav>

							<div className="sidebar-footer">
								<div className="social-links">
									{socialLinks.map((link) => (
										<motion.a
											key={link.label}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="social-link"
											whileHover={{ y: -5 }}
											whileTap={{ scale: 0.95 }}
											aria-label={link.label}
										>
											{link.icon}
										</motion.a>
									))}
								</div>
							</div>
						</div>
					</motion.aside>
				)}
			</AnimatePresence>

			{isMobile && isOpen && (
				<motion.div
					className="sidebar-overlay"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={onClose}
				/>
			)}

			<style jsx>{`
				.sidebar {
					position: fixed;
					top: 0;
					left: 0;
					height: 100vh;
					width: 280px;
					background: linear-gradient(
						135deg,
						var(--background) 0%,
						var(--background-light) 100%
					);
					box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
					z-index: 1000;
					overflow-y: auto;
					scrollbar-width: thin;
					scrollbar-color: var(--primary) transparent;
				}

				.sidebar::-webkit-scrollbar {
					width: 6px;
				}

				.sidebar::-webkit-scrollbar-track {
					background: transparent;
				}

				.sidebar::-webkit-scrollbar-thumb {
					background-color: var(--primary);
					border-radius: 3px;
				}

				.sidebar-content {
					height: 100%;
					display: flex;
					flex-direction: column;
					padding: var(--spacing-xl) var(--spacing-lg);
				}

				.sidebar-header {
					text-align: center;
					margin-bottom: var(--spacing-xl);
					padding-bottom: var(--spacing-lg);
					border-bottom: 1px solid rgba(var(--primary-rgb), 0.1);
				}

				.sidebar-title {
					font-size: 1.8rem;
					font-weight: 700;
					background: linear-gradient(
						135deg,
						var(--text) 0%,
						var(--text-light) 100%
					);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					margin-bottom: var(--spacing-xs);
				}

				.sidebar-subtitle {
					font-size: 1.2rem;
					color: var(--text-light);
					font-weight: 500;
				}

				.sidebar-nav {
					flex: 1;
					margin: var(--spacing-lg) 0;
				}

				.sidebar-nav ul {
					list-style: none;
					padding: 0;
					margin: 0;
				}

				.nav-link {
					display: flex;
					align-items: center;
					padding: var(--spacing-md) var(--spacing-sm);
					color: var(--text);
					text-decoration: none;
					font-size: 1.2rem;
					font-weight: 500;
					border-radius: 0.75rem;
					transition: all var(--transition-fast);
					margin-bottom: var(--spacing-xs);
				}

				.nav-link:hover {
					background: rgba(var(--primary-rgb), 0.1);
					color: var(--primary);
				}

				.nav-icon {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 2.5rem;
					height: 2.5rem;
					margin-right: var(--spacing-sm);
					font-size: 1.3rem;
					background: rgba(var(--primary-rgb), 0.1);
					border-radius: 0.75rem;
					color: var(--primary);
				}

				.nav-label {
					flex: 1;
				}

				.sidebar-footer {
					margin-top: auto;
					padding-top: var(--spacing-lg);
					border-top: 1px solid rgba(var(--primary-rgb), 0.1);
				}

				.social-links {
					display: flex;
					justify-content: center;
					gap: var(--spacing-md);
				}

				.social-link {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 2.5rem;
					height: 2.5rem;
					background: white;
					color: var(--primary);
					border-radius: 0.75rem;
					font-size: 1.3rem;
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
					transition: all var(--transition-fast);
				}

				.social-link:hover {
					background: var(--primary);
					color: white;
					transform: translateY(-2px);
				}

				.sidebar-overlay {
					position: fixed;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					background: rgba(0, 0, 0, 0.5);
					backdrop-filter: blur(4px);
					z-index: 999;
				}

				@media (max-width: 768px) {
					.sidebar {
						width: 100%;
						max-width: 320px;
					}

					.sidebar-title {
						font-size: 1.6rem;
					}

					.sidebar-subtitle {
						font-size: 1.1rem;
					}

					.nav-link {
						font-size: 1.1rem;
						padding: var(--spacing-sm);
					}

					.nav-icon {
						width: 2.25rem;
						height: 2.25rem;
						font-size: 1.2rem;
					}

					.social-link {
						width: 2.25rem;
						height: 2.25rem;
						font-size: 1.2rem;
					}
				}
			`}</style>
		</>
	);
};

export default Sidebar;
