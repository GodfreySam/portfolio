import { motion } from "framer-motion";
import React from "react";
import {
	FaCloud,
	FaCode,
	FaDatabase,
	FaMobile,
	FaServer,
	FaTools,
} from "react-icons/fa";

const Services = () => {
	const services = [
		{
			icon: <FaCode />,
			title: "Frontend Development",
			description:
				"Building modern, responsive user interfaces with React, Vue, and other cutting-edge technologies.",
			skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"],
		},
		{
			icon: <FaServer />,
			title: "Backend Development",
			description:
				"Developing robust server-side applications and RESTful APIs with Node.js and Python.",
			skills: ["Node.js", "Python", "Express", "Django", "REST APIs"],
		},
		{
			icon: <FaMobile />,
			title: "Mobile Development",
			description:
				"Creating cross-platform mobile applications using React Native and Flutter.",
			skills: [
				"React Native",
				"Flutter",
				"Mobile UI/UX",
				"App Store",
				"Play Store",
			],
		},
		{
			icon: <FaDatabase />,
			title: "Database Design",
			description:
				"Designing and implementing efficient database solutions for optimal performance.",
			skills: [
				"PostgreSQL",
				"MongoDB",
				"MySQL",
				"Redis",
				"Database Optimization",
			],
		},
		{
			icon: <FaCloud />,
			title: "Cloud Solutions",
			description:
				"Deploying and managing applications on cloud platforms with best practices.",
			skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
		},
		{
			icon: <FaTools />,
			title: "DevOps & Tools",
			description:
				"Implementing automation and continuous integration for efficient development workflows.",
			skills: ["Git", "Jenkins", "GitHub Actions", "Docker", "Linux"],
		},
	];

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
		<section className="services-section" id="services">
			<div className="services-container">
				<motion.div
					className="services-header"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<span className="section-tag">Services</span>
					<h2 className="section-title">What I Do</h2>
					<p className="section-description">
						I offer a comprehensive range of development services to help bring
						your ideas to life. From frontend to backend, mobile to cloud, I've
						got you covered.
					</p>
				</motion.div>

				<motion.div
					className="services-grid"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					{services.map((service, index) => (
						<motion.div
							key={service.title}
							className="service-card"
							variants={itemVariants}
							whileHover={{ y: -5, transition: { duration: 0.2 } }}
						>
							<div className="service-icon">{service.icon}</div>
							<h3>{service.title}</h3>
							<p>{service.description}</p>
							<div className="skills-list">
								{service.skills.map((skill) => (
									<span key={skill} className="skill-tag">
										{skill}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className="cta-section"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}
				>
					<h3>Ready to Start Your Project?</h3>
					<p>Let's discuss how I can help bring your vision to life.</p>
					<a
						href="mailto:godfreysam09@gmail.com"
						className="btn btn-primary"
						target="_blank"
						rel="noopener noreferrer"
					>
						Get in Touch
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
				.services-section {
					padding: var(--spacing-xl) 0;
					background: var(--background);
				}

				.services-container {
					max-width: 1200px;
					margin: 0 auto;
					padding: 0 var(--spacing-lg);
				}

				.services-header {
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

				.services-grid {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
					gap: var(--spacing-lg);
					margin-bottom: var(--spacing-xl);
				}

				.service-card {
					background: white;
					padding: var(--spacing-lg);
					border-radius: 1rem;
					box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
						0 2px 4px -2px rgb(0 0 0 / 0.1);
					transition: transform var(--transition-fast);
				}

				.service-icon {
					width: 3rem;
					height: 3rem;
					background: var(--primary);
					color: white;
					border-radius: 0.75rem;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-bottom: var(--spacing-md);
					font-size: 1.5rem;
				}

				.service-card h3 {
					font-size: 1.4rem;
					color: var(--text);
					margin-bottom: var(--spacing-sm);
				}

				.service-card p {
					color: var(--text-light);
					font-size: 1.2rem;
					line-height: 1.6;
					margin-bottom: var(--spacing-md);
				}

				.skills-list {
					display: flex;
					flex-wrap: wrap;
					gap: 0.5rem;
				}

				.skill-tag {
					background: rgba(37, 99, 235, 0.1);
					color: var(--primary);
					padding: 0.25rem 0.75rem;
					border-radius: 1rem;
					font-size: 1.1rem;
					font-weight: 500;
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
					font-size: 1.2rem;
					font-weight: 600;
					padding: 1rem 2rem;
				}

				@media (max-width: 768px) {
					.section-title {
						font-size: 2.5rem;
					}

					.section-description {
						font-size: 1.2rem;
					}

					.service-card h3 {
						font-size: 1.3rem;
					}

					.service-card p {
						font-size: 1.1rem;
					}

					.skill-tag {
						font-size: 1rem;
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
			`}</style>
		</section>
	);
};

export default Services;
