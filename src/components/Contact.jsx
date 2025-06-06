import { motion } from "framer-motion";
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
	const contactInfo = [
		{
			icon: <FaEnvelope />,
			title: "Email",
			content: "Click to send me an email",
			href: "mailto:godfreysam09@gmail.com",
		},
		{
			icon: <FaMapMarkerAlt />,
			title: "Location",
			content: "Abuja, Nigeria",
		},
		{
			icon: <FaPhone />,
			title: "Phone",
			content: "Click to call me",
			href: "tel:+2348082358376",
		},
	];

	return (
		<section id="contact" className="contact-section">
			<div className="contact-container">
				<motion.div
					className="contact-header"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<span className="section-tag">Contact</span>
					<h2 className="section-title">Get in Touch</h2>
					<p className="section-description">
						Let's discuss how we can work together to bring your ideas to life.
					</p>
				</motion.div>

				<div className="contact-content">
					<div className="contact-info">
						{contactInfo.map((info, index) => (
							<motion.a
								key={info.title}
								href={info.href || "#"}
								className="contact-card"
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
								whileHover={{ y: -5 }}
								target={info.href ? "_blank" : undefined}
								rel={info.href ? "noopener noreferrer" : undefined}
							>
								<div className="contact-icon">{info.icon}</div>
								<div className="contact-text">
									<h3>{info.title}</h3>
									<p>{info.content}</p>
								</div>
							</motion.a>
						))}
					</div>
				</div>
			</div>

			<style jsx>{`
				.contact-section {
					padding: var(--spacing-xl) 0;
					background: var(--background);
				}

				.contact-container {
					max-width: 1200px;
					margin: 0 auto;
					padding: 0 var(--spacing-lg);
				}

				.contact-header {
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

				.contact-content {
					display: grid;
					grid-template-columns: 1fr;
					gap: var(--spacing-xl);
				}

				.contact-info {
					display: grid;
					grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
					gap: var(--spacing-lg);
					width: 100%;
				}

				.contact-card {
					background: white;
					padding: var(--spacing-xl);
					border-radius: 1rem;
					box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
						0 2px 4px -2px rgba(0, 0, 0, 0.1);
					display: flex;
					align-items: center;
					gap: var(--spacing-lg);
					transition: all var(--transition-fast);
					text-decoration: none;
					cursor: pointer;
					height: 100%;
					min-height: 120px;
				}

				.contact-card:hover {
					transform: translateY(-5px);
					box-shadow: 0 8px 12px -1px rgba(0, 0, 0, 0.1),
						0 4px 6px -2px rgba(0, 0, 0, 0.1);
					background: var(--primary);
				}

				.contact-card:hover .contact-text h3,
				.contact-card:hover .contact-text p {
					color: white;
				}

				.contact-icon {
					width: 3.5rem;
					height: 3.5rem;
					background: var(--primary);
					color: white;
					border-radius: 1rem;
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 1.5rem;
					transition: all var(--transition-fast);
					flex-shrink: 0;
				}

				.contact-card:hover .contact-icon {
					transform: scale(1.1);
					background: white;
					color: var(--primary);
				}

				.contact-text {
					flex: 1;
				}

				.contact-text h3 {
					font-size: 1.4rem;
					color: var(--text);
					margin-bottom: var(--spacing-xs);
					transition: color var(--transition-fast);
				}

				.contact-text p {
					font-size: 1.2rem;
					color: var(--text-light);
					transition: color var(--transition-fast);
				}

				@media (max-width: 768px) {
					.section-title {
						font-size: 2.5rem;
					}

					.section-description {
						font-size: 1.2rem;
					}

					.contact-info {
						grid-template-columns: 1fr;
						gap: var(--spacing-md);
					}

					.contact-card {
						padding: var(--spacing-lg);
						min-height: 100px;
					}

					.contact-text h3 {
						font-size: 1.3rem;
					}

					.contact-text p {
						font-size: 1.1rem;
					}

					.contact-icon {
						width: 3rem;
						height: 3rem;
						font-size: 1.3rem;
					}
				}
			`}</style>
		</section>
	);
};

export default Contact;
