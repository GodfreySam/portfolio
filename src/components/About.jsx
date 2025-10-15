import { motion } from "framer-motion";
import {
	FaCloud,
	FaCode,
	FaDatabase,
	FaEnvelope,
	FaGlobe,
	FaLaptopCode,
	FaMapMarkerAlt,
	FaPhone,
	FaServer,
} from "react-icons/fa";

const About = () => {
	const fadeInUp = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.5 },
	};

	const staggerContainer = {
		animate: {
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const skills = [
		{
			icon: <FaCode className="w-8 h-8" />,
			title: "Algorithm & Software Development",
			description:
				"Expert in developing efficient algorithms and robust software solutions",
		},
		{
			icon: <FaServer className="w-8 h-8" />,
			title: "APIs Development",
			description: "Designing and implementing scalable RESTful APIs",
		},
		{
			icon: <FaLaptopCode className="w-8 h-8" />,
			title: "System Architecture",
			description: "Creating scalable and maintainable system architectures",
		},
		{
			icon: <FaDatabase className="w-8 h-8" />,
			title: "Database Modeling",
			description: "Expert in data modeling and database optimization",
		},
		{
			icon: <FaCloud className="w-8 h-8" />,
			title: "Cloud Services",
			description: "Implementing and managing cloud infrastructure",
		},
		{
			icon: <FaGlobe className="w-8 h-8" />,
			title: "System Automation",
			description: "Developing automated solutions for business processes",
		},
	];

	const contactInfo = [
		{
			icon: <FaMapMarkerAlt />,
			label: "Location",
			content: "Abuja, Nigeria",
		},
		{
			icon: <FaEnvelope />,
			label: "Email",
			content: "Click to send me an email",
			href: "mailto:godfreysam09@gmail.com",
		},
		{
			icon: <FaPhone />,
			label: "Phone",
			content: "Click to call me",
			href: "tel:+2348082358376",
		},
	];

	return (
		<section className="about-section" id="about">
			<div className="about-container">
				<motion.div
					className="about-header"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<span className="section-tag">About</span>
					<h2 className="section-title">Professional Profile</h2>
				</motion.div>

				<motion.div
					className="about-content"
					variants={staggerContainer}
					initial="initial"
					animate="animate"
				>
					<motion.div className="about-text" variants={fadeInUp}>
						<p className="lead">
							<strong>Godfrey Samuel</strong> is a highly motivated and
							results-oriented Lead Backend Engineer with over five years of
							professional experience, passionately driven by technology and
							innovation.
						</p>
						<p>
							Proven expertise in backend architecture, system design, and
							technical leadership, consistently delivering scalable and robust
							applications for industry-leading businesses and enterprises
							across local and international markets. Known for strategic
							technical direction and collaborative leadership in
							cross-functional team environments.
						</p>
						<div className="contact-info">
							{contactInfo.map((info) => (
								<motion.a
									key={info.label}
									href={info.href || "#"}
									className="contact-item"
									whileHover={{ x: 10, y: -5 }}
									transition={{
										type: "spring",
										stiffness: 400,
										damping: 10,
									}}
									target={info.href ? "_blank" : undefined}
									rel={info.href ? "noopener noreferrer" : undefined}
								>
									<div className="contact-icon">{info.icon}</div>
									<div className="contact-text">
										<span className="contact-label">{info.label}:</span>
										<span className="contact-content">{info.content}</span>
									</div>
								</motion.a>
							))}
						</div>
					</motion.div>

					<motion.div className="about-experience" variants={fadeInUp}>
						<div className="experience-card">
							<h3>Current Role</h3>
							<div className="role-item">
								<h4>
									Lead Backend Engineer at{" "}
									<a
										href="https://safegeeg.com"
										target="_blank"
										rel="noopener noreferrer"
										className="link-highlight"
									>
										Safegeeg (formerly Workdey)
									</a>
								</h4>
								<p className="role-period">Sep 2024 - Present</p>
								<ul className="role-description">
									<li>
										Develop and implement strategic technical direction aligned
										with organizational goals
									</li>
									<li>
										Design and guide architectural decisions for scalable
										backend systems
									</li>
									<li>
										Establish and enforce engineering best practices across
										development teams
									</li>
									<li>
										Make critical technical decisions balancing performance,
										scalability, and maintainability
									</li>
									<li>
										Design and implement CI/CD pipeline architecture and
										deployment strategies
									</li>
								</ul>
							</div>
						</div>

						<div className="experience-card">
							<h3>Previous Experience</h3>
							<div className="role-item">
								<h4>
									Software Developer at{" "}
									<a
										href="https://www.ppdc.org/"
										target="_blank"
										rel="noopener noreferrer"
										className="link-highlight"
									>
										Public and Private Development Centre
									</a>
								</h4>
								<p className="role-period">Aug 2022 - Apr 2025</p>
								<ul className="role-description">
									<li>
										Built and maintained complete web applications with focus on
										backend architecture
									</li>
									<li>
										Implemented scalable multi-tenant systems supporting
										multiple clients
									</li>
									<li>
										Designed and developed scalable REST APIs and data models
									</li>
									<li>
										Gathered requirements and collaborated with cross-functional
										teams
									</li>
									<li>
										Integrated frontend and backend components for seamless user
										experience
									</li>
								</ul>
							</div>
							<div className="role-item">
								<h4>
									Lead Backend Developer at{" "}
									<a
										href="https://alivee.co"
										target="_blank"
										rel="noopener noreferrer"
										className="link-highlight"
									>
										Alivee
									</a>
								</h4>
								<p className="role-period">Jun 2023 - Jun 2024</p>
								<ul className="role-description">
									<li>Designed and built APIs for e-health platform</li>
									<li>
										Created comprehensive data models for healthcare
										applications
									</li>
									<li>
										Integrated external services for enhanced system
										functionality
									</li>
									<li>Optimized system performance and ensured scalability</li>
									<li>
										Managed deployment processes and development operations
									</li>
								</ul>
							</div>
							<div className="role-item">
								<h4>
									Full Stack Developer at{" "}
									<a
										href="https://www.alanturingcodes.com/"
										target="_blank"
										rel="noopener noreferrer"
										className="link-highlight"
									>
										Alan Turing-Code
									</a>
								</h4>
								<p className="role-period">Dec 2020 - Jul 2022</p>
								<ul className="role-description">
									<li>Developed robust backend systems and integrations</li>
									<li>Ensured optimal system performance and reliability</li>
									<li>Delivered complete web application solutions</li>
									<li>Implemented seamless frontend-backend integration</li>
								</ul>
							</div>
							<div className="role-item">
								<h4>
									Support Software Developer at{" "}
									<a
										href="https://waawfoundation.org/"
										target="_blank"
										rel="noopener noreferrer"
										className="link-highlight"
									>
										WAAW Foundation
									</a>
								</h4>
								<p className="role-period">Mar 2021 - Sep 2021</p>
								<ul className="role-description">
									<li>Developed and tested RESTful APIs</li>
									<li>Built reusable custom software modules</li>
									<li>
										Transformed wireframes into fully functional responsive
										websites
									</li>
									<li>Conducted thorough testing of developed applications</li>
								</ul>
							</div>
							<div className="role-item">
								<h4>
									Chrome Extension Developer at{" "}
									<span className="link-highlight">
										Esty Business Solutions
									</span>
								</h4>
								<p className="role-period">Jan 2019 - Oct 2020</p>
								<ul className="role-description">
									<li>
										Developed custom Chrome extension for business automation
									</li>
									<li>
										Automated sorting and bulk printing processes for utility
										bill operations
									</li>
									<li>
										Successfully deployed solution for small-scale business
										operations
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</motion.div>

				<motion.div
					className="skills-grid"
					variants={staggerContainer}
					initial="initial"
					animate="animate"
				>
					{skills.map((skill) => (
						<motion.div
							key={skill.title}
							className="skill-card"
							variants={fadeInUp}
						>
							<div className="skill-icon">{skill.icon}</div>
							<h3>{skill.title}</h3>
							<p>{skill.description}</p>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className="education-section"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<h3>Education & Certifications</h3>
					<div className="education-content">
						<div className="education-item">
							<h4>Bachelor of Science, Engineering Physics</h4>
							<p>Obafemi Awolowo University Ile-Ife, Osun State, Nigeria</p>
							<p className="education-period">2012 - 2016</p>
						</div>
						<div className="certifications">
							<h4>Certifications</h4>
							<ul>
								<li>Responsive Web Design (2019)</li>
								<li>JavaScript Algorithm and Data Structures (2020)</li>
								<li>Front End Libraries (2020)</li>
								<li>Google Cloud (2021)</li>
								<li>IBM Design Thinking (2021)</li>
							</ul>
						</div>
					</div>
				</motion.div>

				<style jsx>{`
					.about-section {
						padding: var(--spacing-xl) 0;
						background: linear-gradient(
							135deg,
							var(--background) 0%,
							var(--background-light) 50%,
							var(--background) 100%
						);
						position: relative;
						overflow: hidden;
					}

					.about-section::before {
						content: "";
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background: radial-gradient(
								circle at 20% 20%,
								rgba(var(--primary-rgb), 0.05) 0%,
								transparent 50%
							),
							radial-gradient(
								circle at 80% 80%,
								rgba(var(--accent-rgb), 0.05) 0%,
								transparent 50%
							);
						pointer-events: none;
					}

					.about-container {
						max-width: 1200px;
						margin: 0 auto;
						padding: 0 var(--spacing-lg);
						position: relative;
						z-index: 1;
					}

					.about-header {
						text-align: center;
						margin-bottom: var(--spacing-xl);
					}

					.section-tag {
						display: inline-block;
						padding: 0.5rem 1rem;
						background: linear-gradient(
							135deg,
							var(--primary) 0%,
							var(--accent) 100%
						);
						color: white;
						border-radius: 2rem;
						font-size: 1.1rem;
						font-weight: 500;
						margin-bottom: var(--spacing-sm);
						box-shadow: 0 4px 6px -1px rgba(var(--primary-rgb), 0.2);
					}

					.section-title {
						font-size: 3rem;
						font-weight: 700;
						background: linear-gradient(
							135deg,
							var(--text) 0%,
							var(--text-light) 100%
						);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						margin-bottom: var(--spacing-lg);
					}

					.about-content {
						display: grid;
						grid-template-columns: 1fr 1fr;
						gap: var(--spacing-xl);
						margin-bottom: var(--spacing-xl);
					}

					.about-text {
						font-size: 1.4rem;
						line-height: 1.8;
						color: var(--text);
					}

					.lead {
						font-size: 1.6rem;
						font-weight: 500;
						margin-bottom: var(--spacing-md);
					}

					.contact-info {
						margin-top: var(--spacing-lg);
						padding: var(--spacing-lg);
						background: rgba(255, 255, 255, 0.9);
						backdrop-filter: blur(10px);
						border-radius: 1rem;
						box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
							0 2px 4px -2px rgba(0, 0, 0, 0.1),
							0 0 0 1px rgba(var(--primary-rgb), 0.05);
						display: grid;
						grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
						gap: var(--spacing-md);
					}

					.contact-item {
						display: flex;
						align-items: center;
						gap: var(--spacing-lg);
						padding: var(--spacing-md);
						border-radius: 0.75rem;
						transition: all var(--transition-fast);
						text-decoration: none;
						cursor: pointer;
						height: 100%;
						min-height: 80px;
					}

					.contact-item:hover {
						background: var(--primary);
						transform: translateY(-5px);
					}

					.contact-item:hover .contact-label,
					.contact-item:hover .contact-content {
						color: white;
					}

					.contact-icon {
						width: 2.5rem;
						height: 2.5rem;
						background: rgba(var(--primary-rgb), 0.1);
						color: var(--primary);
						border-radius: 0.75rem;
						display: flex;
						align-items: center;
						justify-content: center;
						font-size: 1.3rem;
						transition: all var(--transition-fast);
						flex-shrink: 0;
					}

					.contact-item:hover .contact-icon {
						background: white;
						color: var(--primary);
						transform: scale(1.1);
					}

					.contact-text {
						display: flex;
						align-items: center;
						gap: var(--spacing-xs);
						font-size: 1.2rem;
						flex: 1;
					}

					.contact-label {
						color: var(--text);
						font-weight: 500;
						transition: color var(--transition-fast);
					}

					.contact-content {
						color: var(--text-light);
						transition: color var(--transition-fast);
					}

					.about-experience {
						display: flex;
						flex-direction: column;
						gap: var(--spacing-md);
					}

					.experience-card {
						background: rgba(255, 255, 255, 0.9);
						backdrop-filter: blur(10px);
						padding: var(--spacing-lg);
						border-radius: 1rem;
						box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
							0 2px 4px -2px rgba(0, 0, 0, 0.1),
							0 0 0 1px rgba(var(--primary-rgb), 0.05);
						transition: transform 0.3s ease, box-shadow 0.3s ease;
					}

					.experience-card:hover {
						transform: translateY(-2px);
						box-shadow: 0 8px 12px -1px rgba(0, 0, 0, 0.1),
							0 4px 6px -2px rgba(0, 0, 0, 0.1),
							0 0 0 1px rgba(var(--primary-rgb), 0.1);
					}

					.experience-card h3 {
						color: var(--primary);
						font-size: 1.75rem;
						margin-bottom: var(--spacing-md);
					}

					.role-item {
						margin-bottom: var(--spacing-lg);
					}

					.role-item:last-child {
						margin-bottom: 0;
					}

					.role-item h4 {
						color: var(--text);
						font-size: 1.4rem;
						margin-bottom: var(--spacing-xs);
					}

					.role-period {
						color: var(--text-light);
						font-size: 1.1rem;
						margin-bottom: var(--spacing-sm);
					}

					.role-description {
						color: var(--text-light);
						font-size: 1.2rem;
						margin-top: var(--spacing-sm);
						padding-left: var(--spacing-md);
					}

					.role-description li {
						margin-bottom: var(--spacing-xs);
					}

					.link-highlight {
						color: var(--primary);
						text-decoration: none;
						font-weight: 500;
						transition: color var(--transition-fast);
					}

					.link-highlight:hover {
						color: var(--primary-dark);
					}

					.skills-grid {
						display: grid;
						grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
						gap: var(--spacing-lg);
						margin-bottom: var(--spacing-xl);
					}

					.skill-card {
						background: rgba(255, 255, 255, 0.9);
						backdrop-filter: blur(10px);
						padding: var(--spacing-lg);
						border-radius: 1rem;
						box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
							0 2px 4px -2px rgba(0, 0, 0, 0.1),
							0 0 0 1px rgba(var(--primary-rgb), 0.05);
						transition: all 0.3s ease;
					}

					.skill-card:hover {
						transform: translateY(-5px);
						box-shadow: 0 8px 12px -1px rgba(0, 0, 0, 0.1),
							0 4px 6px -2px rgba(0, 0, 0, 0.1),
							0 0 0 1px rgba(var(--primary-rgb), 0.1);
					}

					.skill-icon {
						width: 4rem;
						height: 4rem;
						margin: 0 auto var(--spacing-md);
						display: flex;
						align-items: center;
						justify-content: center;
						background: linear-gradient(
							135deg,
							var(--primary) 0%,
							var(--accent) 100%
						);
						color: white;
						border-radius: 1rem;
						box-shadow: 0 4px 6px -1px rgba(var(--primary-rgb), 0.2);
					}

					.skill-card h3 {
						color: var(--text);
						font-size: 1.4rem;
						margin-bottom: var(--spacing-sm);
					}

					.skill-card p {
						color: var(--text-light);
						font-size: 1.2rem;
					}

					.education-section {
						background: rgba(255, 255, 255, 0.9);
						backdrop-filter: blur(10px);
						padding: var(--spacing-xl);
						border-radius: 1rem;
						box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
							0 2px 4px -2px rgba(0, 0, 0, 0.1),
							0 0 0 1px rgba(var(--primary-rgb), 0.05);
					}

					.education-section h3 {
						color: var(--primary);
						font-size: 1.75rem;
						margin-bottom: var(--spacing-lg);
					}

					.education-content {
						display: grid;
						grid-template-columns: 1fr 1fr;
						gap: var(--spacing-xl);
					}

					.education-item h4 {
						color: var(--text);
						font-size: 1.4rem;
						margin-bottom: var(--spacing-xs);
					}

					.education-period {
						color: var(--text-light);
						font-size: 1.1rem;
						margin-top: var(--spacing-xs);
					}

					.certifications ul {
						list-style: none;
						padding: 0;
					}

					.certifications li {
						color: var(--text-light);
						font-size: 1.2rem;
						margin-bottom: var(--spacing-xs);
						padding-left: var(--spacing-md);
						position: relative;
					}

					.certifications li::before {
						content: "•";
						color: var(--primary);
						position: absolute;
						left: 0;
					}

					@media (max-width: 768px) {
						.about-content {
							grid-template-columns: 1fr;
						}

						.education-content {
							grid-template-columns: 1fr;
						}

						.skills-grid {
							grid-template-columns: 1fr;
						}

						.section-title {
							font-size: 2.5rem;
						}

						.about-text {
							font-size: 1.2rem;
						}

						.lead {
							font-size: 1.4rem;
						}

						.contact-text {
							font-size: 1.1rem;
						}

						.contact-icon {
							width: 2.25rem;
							height: 2.25rem;
							font-size: 1.2rem;
						}

						.experience-card h3 {
							font-size: 1.5rem;
						}

						.role-item h4 {
							font-size: 1.3rem;
						}

						.role-period {
							font-size: 1rem;
						}

						.role-description {
							font-size: 1.1rem;
						}

						.skill-card h3 {
							font-size: 1.3rem;
						}

						.skill-card p {
							font-size: 1.1rem;
						}

						.education-section h3 {
							font-size: 1.5rem;
						}

						.education-item h4 {
							font-size: 1.3rem;
						}

						.education-period {
							font-size: 1rem;
						}

						.certifications li {
							font-size: 1.1rem;
						}

						.contact-info {
							grid-template-columns: 1fr;
							padding: var(--spacing-md);
							gap: var(--spacing-sm);
						}

						.contact-item {
							padding: var(--spacing-sm);
							min-height: 70px;
							gap: var(--spacing-md);
						}
					}
				`}</style>
			</div>
		</section>
	);
};

export default About;
