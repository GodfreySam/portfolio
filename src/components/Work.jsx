import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaCode, FaExternalLinkAlt, FaServer } from "react-icons/fa";

const Work = () => {
	const [activeFilter, setActiveFilter] = useState("all");

	const projects = [
		{
			id: 0,
			title: "Urbanwish",
			description:
				"Consulting CTO leading technical strategy for multi-provider booking platform serving lifestyle and urban services across Nigeria. Architected full-stack infrastructure supporting 500+ service providers and 10,000+ monthly bookings. Implemented workflow automation reducing deployment time by 80% and optimized GCP infrastructure achieving 50% cost reduction.",
			category: "leadership",
			technologies: [
				"Technical Strategy",
				"System Architecture",
				"Cloud Solutions (GCP)",
				"GitHub Actions",
				"Workflow Automation",
				"CI/CD",
				"DevOps",
				"Multi-provider Platform",
				"Real-time Systems",
			],
			github: "https://github.com/GodfreySam",
			live: "https://urbanwish.com",
			type: "leadership",
			period: "Jul 2025 - Present",
		},
		{
			id: 1,
			title: "Safegeeg (formerly Workdey)",
			description:
				"Lead Engineer architecting full-stack marketplace and fintech platform from the ground up. Led zero-downtime migration from Firebase to MongoDB+Node.js, enabling platform to scale from struggling marketplace to handling thousands of multi-currency transactions (NGN, USD, USDT/USDC). Built escrow system with zero financial discrepancies and designed gateway-agnostic payment abstraction reducing integration time from 4 weeks to 3 days.",
			category: "leadership",
			technologies: [
				"Node.js",
				"React",
				"TypeScript",
				"MongoDB",
				"Redis",
				"Firebase",
				"Multi-currency",
				"Cryptocurrency (USDT/USDC)",
				"Payment Gateways",
				"Escrow Systems",
				"CI/CD",
				"WebSocket",
			],
			github: "https://github.com/GodfreySam",
			live: "https://safegeeg.com",
			type: "leadership",
			period: "Sep 2024 - Present",
		},
		{
			id: 4,
			title: "WorkflowPadi",
			description:
				"A comprehensive workflow management platform developed to streamline business processes and enhance team collaboration, featuring human resource management, financial management, and project management.",
			category: "fullstack",
			technologies: [
				"React",
				"Node.js",
				"Typescript",
				"MongoDB",
				"Express",
				"Redux",
				"WebSocket",
				"DEXI",
				"Multi-tenant Architecture",
				"System Design",
			],
			github: "https://github.com/GodfreySam",
			live: "https://workflowpadi.com",
			type: "fullstack",
			period: "Feb 2025 - May 2025",
		},
		{
			id: 3,
			title: "PPDC Projects",
			description:
				"Software Developer at Public and Private Development Centre, building and maintaining four full-stack web applications serving over 10,000 daily users. Implemented scalable MVP multi-tenant architecture supporting 1,000 concurrent clients. Designed RESTful APIs handling 15,000+ requests per day with 200ms average response time. Achieved 266x performance improvement through strategic database indexing.",
			category: "fullstack",
			technologies: [
				"React",
				"Node.js",
				"Full-Stack Development",
				"Multi-tenant Architecture",
				"MongoDB",
				"Express",
				"Redux",
				"API Development",
				"Performance Optimization",
			],
			projects: [
				{
					name: "Boomerang HR",
					url: "https://boomeranghr.ppdc.org",
					description: "Human Resource Management System for PPDC",
				},
				{
					name: "Gwapp",
					url: "https://gwapp.ppdc.org",
					description: "Financial Management System for PPDC",
				},
				{
					name: "Amebo",
					url: "https://amebo.ppdc.org",
					description: "Project Management System for PPDC",
				},
			],
			type: "fullstack",
			period: "Aug 2022 - Apr 2025",
		},
		{
			id: 5,
			title: "Budeshi",
			description:
				"Developed a public procurement transparency platform enabling citizens to track government spending and contracts, featuring data visualization and real-time updates.",
			category: "fullstack",
			technologies: [
				"React",
				"Node.js",
				"Typescript",
				"MongoDB",
				"Express",
				"Redux",
				"OpenAI",
				"DEXI",
			],
			github: "https://github.com/GodfreySam",
			live: "https://budeshi.ng",
			type: "fullstack",
			period: "Sep 2022 - May 2025",
		},
		{
			id: 7,
			title: "WAAW Foundation",
			description:
				"Support Software Developer focused on API development and responsive web applications supporting educational programs reaching 100+ beneficiaries. Developed and tested RESTful APIs, built reusable custom modules reducing development time, and transformed wireframes into functional responsive websites. Achieved 90% code coverage and 99% bug detection rate before production.",
			category: "fullstack",
			technologies: [
				"REST API",
				"React",
				"Node.js",
				"Postman",
				"Responsive Design",
				"Testing",
				"Custom Modules",
				"Frontend Development",
			],
			type: "fullstack",
			period: "Mar 2021 - Apr 2022",
		},
		{
			id: 8,
			title: "Esty Business Solutions",
			description:
				"Chrome Extension Developer creating custom automation solutions. Developed browser extension automating utility bill operations, reducing processing time by 100%. Automated sorting and bulk printing processes handling 500 bills per day with 100% accuracy, successfully improving operational efficiency by 100%.",
			category: "frontend",
			technologies: [
				"Chrome Extension",
				"JavaScript",
				"Browser APIs",
				"Process Automation",
				"Business Solutions",
			],
			type: "frontend",
			period: "Jan 2019 - Oct 2020",
		},
	];

	const filters = [
		{ id: "all", label: "All Projects", icon: <FaCode /> },
		{ id: "leadership", label: "Leadership", icon: <FaCode /> },
		{ id: "fullstack", label: "Full Stack", icon: <FaCode /> },
		{ id: "backend", label: "Backend", icon: <FaServer /> },
		{ id: "frontend", label: "Frontend", icon: <FaCode /> },
	];

	const filteredProjects =
		activeFilter === "all"
			? projects
			: projects.filter((project) => project.type === activeFilter);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<section className="work-section" id="work">
			<div className="work-container">
				<motion.div
					className="work-header"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<span className="section-tag">Experience</span>
					<h2 className="section-title">Professional Journey</h2>
					<p className="section-description">
						Software Engineer with extensive professional experience building
						end-to-end digital solutions across fintech, ecommerce, logistics,
						healthcare, and government sectors. Expert in designing scalable
						APIs, implementing multi-tenant architectures, and driving digital
						transformation initiatives. Proven track record leading engineering
						teams and architecting robust solutions serving thousands of users.
					</p>
				</motion.div>

				<motion.div
					className="filter-buttons"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					{filters.map((filter) => (
						<motion.button
							key={filter.id}
							className={`filter-button ${
								activeFilter === filter.id ? "active" : ""
							}`}
							onClick={() => setActiveFilter(filter.id)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<span className="filter-icon">{filter.icon}</span>
							{filter.label}
						</motion.button>
					))}
				</motion.div>

				<motion.div
					className="projects-grid"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<AnimatePresence mode="wait">
						{filteredProjects.map((project) => (
							<motion.div
								key={project.id}
								className="project-card"
								variants={itemVariants}
								layout
								whileHover={{ y: -5 }}
							>
								<div className="project-content">
									<div className="project-header">
										<h3>{project.title}</h3>
										<span className="project-period">{project.period}</span>
									</div>
									<p>{project.description}</p>
									{project.projects && (
										<div className="sub-projects">
											{project.projects.map((subProject) => (
												<div key={subProject.name} className="sub-project">
													<h4>{subProject.name}</h4>
													<p>{subProject.description}</p>
													<a
														href={subProject.url}
														target="_blank"
														rel="noopener noreferrer"
														className="project-link"
													>
														<FaExternalLinkAlt />
														<span>View Project</span>
													</a>
												</div>
											))}
										</div>
									)}
									<div className="project-technologies">
										{project.technologies.map((tech) => (
											<span key={tech} className="tech-tag">
												{tech} &nbsp;
											</span>
										))}
									</div>
									{!project.projects && (
										<div className="project-links">
											<a
												href={project.live}
												target="_blank"
												rel="noopener noreferrer"
												className="project-link"
											>
												<FaExternalLinkAlt />
												<span>
													{project.id === 8 ? "Request Demo" : "Live Demo"}
												</span>
											</a>
										</div>
									)}
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>

				<motion.div
					className="cta-section"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}
				>
					<h3>Have a Project in Mind?</h3>
					<p>Let's work together to bring your ideas to life.</p>
					<a
						href="mailto:godfreysam09@gmail.com"
						className="btn btn-primary"
						target="_blank"
						rel="noopener noreferrer"
					>
						Start a Conversation
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M22 2L11 13" />
							<path d="M22 2L15 22L11 13L2 9L22 2Z" />
						</svg>
					</a>
				</motion.div>
			</div>

			<style jsx>{`
				.work-section {
					padding: var(--spacing-xl) 0;
					background: var(--background);
				}

				.work-container {
					max-width: 1200px;
					margin: 0 auto;
					padding: 0 var(--spacing-lg);
				}

				.work-header {
					text-align: center;
					margin-bottom: var(--spacing-xl);
				}

				.section-tag {
					display: inline-block;
					padding: 0.5rem 1rem;
					background: var(--primary);
					color: white;
					border-radius: 2rem;
					font-size: 1.1rem;
					font-weight: 500;
					margin-bottom: var(--spacing-sm);
				}

				.section-title {
					font-size: 3rem;
					font-weight: 700;
					color: var(--text);
					margin-bottom: var(--spacing-md);
				}

				.section-description {
					max-width: 600px;
					margin: 0 auto;
					color: var(--text-light);
					font-size: 1.4rem;
					line-height: 1.6;
				}

				.filter-buttons {
					display: flex;
					justify-content: center;
					gap: var(--spacing-sm);
					margin-bottom: var(--spacing-xl);
					flex-wrap: wrap;
				}

				.filter-button {
					display: flex;
					align-items: center;
					gap: 0.5rem;
					padding: 0.75rem 1.5rem;
					border: none;
					border-radius: 2rem;
					background: white;
					color: var(--text);
					font-size: 1.2rem;
					font-weight: 500;
					cursor: pointer;
					transition: all var(--transition-fast);
					box-shadow: 0 2px 4px rgb(0 0 0 / 0.1);
				}

				.filter-button:hover {
					background: var(--primary);
					color: white;
				}

				.filter-button.active {
					background: var(--primary);
					color: white;
				}

				.filter-icon {
					font-size: 1.3rem;
				}

				.projects-grid {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
					gap: var(--spacing-lg);
					margin-bottom: var(--spacing-xl);
				}

				.project-card {
					background: white;
					border-radius: 1rem;
					overflow: hidden;
					box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
						0 2px 4px -2px rgb(0 0 0 / 0.1);
					padding: var(--spacing-lg);
				}

				.project-content {
					display: flex;
					flex-direction: column;
					gap: var(--spacing-md);
				}

				.project-links {
					display: flex;
					gap: var(--spacing-md);
					margin-top: var(--spacing-sm);
				}

				.project-link {
					display: inline-flex;
					align-items: center;
					gap: 0.5rem;
					padding: 0.75rem 1.25rem;
					background: var(--primary);
					color: white;
					border-radius: 2rem;
					font-size: 1.1rem;
					font-weight: 500;
					transition: all var(--transition-fast);
				}

				.project-link:hover {
					background: var(--accent);
					transform: translateY(-2px);
				}

				.project-link span {
					font-size: 1rem;
				}

				.cta-section {
					text-align: center;
					padding: var(--spacing-xl);
					background: linear-gradient(
						120deg,
						var(--primary) 0%,
						var(--accent) 100%
					);
					border-radius: 1rem;
					color: white;
				}

				.cta-section h3 {
					font-size: 2rem;
					margin-bottom: var(--spacing-sm);
				}

				.cta-section p {
					font-size: 1.4rem;
					margin-bottom: var(--spacing-lg);
					opacity: 0.9;
				}

				.cta-section .btn {
					background: white;
					color: var(--primary);
					font-size: 1.2rem;
					font-weight: 600;
					padding: 1rem 2rem;
					border-radius: 2rem;
					display: inline-flex;
					align-items: center;
					gap: var(--spacing-sm);
					transition: transform var(--transition-fast);
				}

				.cta-section .btn:hover {
					transform: translateY(-2px);
				}

				@media (max-width: 768px) {
					.section-title {
						font-size: 2.5rem;
					}

					.section-description {
						font-size: 1.2rem;
					}

					.filter-buttons {
						flex-direction: column;
						align-items: stretch;
					}

					.filter-button {
						font-size: 1.1rem;
					}

					.filter-icon {
						font-size: 1.2rem;
					}

					.projects-grid {
						grid-template-columns: 1fr;
					}

					.cta-section {
						padding: var(--spacing-lg);
					}

					.cta-section h3 {
						font-size: 1.75rem;
					}

					.cta-section p {
						font-size: 1.2rem;
					}

					.cta-section .btn {
						font-size: 1.1rem;
					}
				}

				.project-header {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: var(--spacing-sm);
				}

				.project-period {
					font-size: 1.1rem;
					color: var(--text-light);
					font-weight: 500;
				}

				.sub-projects {
					display: flex;
					flex-direction: column;
					gap: var(--spacing-md);
					margin: var(--spacing-md) 0;
					padding: var(--spacing-md);
					background: rgba(37, 99, 235, 0.05);
					border-radius: 0.75rem;
				}

				.sub-project {
					padding: var(--spacing-md);
					background: white;
					border-radius: 0.5rem;
					box-shadow: 0 2px 4px rgb(0 0 0 / 0.05);
				}

				.sub-project h4 {
					font-size: 1.3rem;
					color: var(--text);
					margin-bottom: var(--spacing-xs);
				}

				.sub-project p {
					font-size: 1.1rem;
					color: var(--text-light);
					margin-bottom: var(--spacing-sm);
				}
			`}</style>
		</section>
	);
};

export default Work;
