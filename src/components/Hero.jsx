import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
	return (
		<section className="hero-section">
			<div className="hero-container">
				<div className="hero-content">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="hero-text"
					>
						<h1 className="hero-title">
							<span className="greeting">Hi, I'm</span>
							<span className="name">Godfrey Samuel</span>
						</h1>
						<h2 className="hero-subtitle">Software Developer</h2>
						<p className="hero-description">
							I build modern, responsive web applications with a focus on system
							scalability and user experience.
						</p>
					</motion.div>
					<div className="hero-image-container">
						<motion.img
							src="/images/frey.png"
							alt="Godfrey Samuel"
							className="hero-image"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.5,
								delay: 0.2,
								ease: [0.4, 0, 0.2, 1],
							}}
						/>
					</div>
				</div>
			</div>
			<style jsx>{`
				.hero-section {
					min-height: 100vh;
					display: flex;
					align-items: center;
					padding: var(--spacing-xl) 0;
					position: relative;
					overflow: hidden;
				}

				.hero-container {
					width: 100%;
					max-width: 1200px;
					margin: 0 auto;
					padding: 0 var(--spacing-lg);
				}

				.hero-content {
					display: grid;
					grid-template-columns: 1fr 1fr;
					gap: var(--spacing-xl);
					align-items: center;
				}

				.hero-text {
					max-width: 600px;
				}

				.hero-title {
					margin-bottom: var(--spacing-md);
				}

				.greeting {
					display: block;
					font-size: 2rem;
					color: var(--text-light);
					margin-bottom: var(--spacing-xs);
				}

				.name {
					display: block;
					font-size: 5rem;
					font-weight: 700;
					line-height: 1.1;
					background: linear-gradient(to right, var(--primary), var(--accent));
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					margin-bottom: var(--spacing-sm);
				}

				.hero-subtitle {
					font-size: 2rem;
					color: var(--text-light);
					margin-bottom: var(--spacing-md);
				}

				.hero-description {
					font-size: 1.4rem;
					color: var(--text);
					margin-bottom: var(--spacing-lg);
					max-width: 600px;
					line-height: 1.6;
				}

				.hero-image-container {
					position: relative;
					padding: 1rem;
					border-radius: 2.5rem;
					background: linear-gradient(
						135deg,
						rgba(37, 99, 235, 0.1),
						rgba(79, 70, 229, 0.1)
					);
					backdrop-filter: blur(10px);
					box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.1),
						0 0 30px rgba(37, 99, 235, 0.1);
					width: 100%;
					height: 100%;
					min-height: 400px;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.hero-image {
					width: 100%;
					height: 100%;
					object-fit: cover;
					object-position: center 30%;
					border-radius: 2rem;
					box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
					transition: transform var(--transition-fast),
						filter var(--transition-fast);
					filter: contrast(1.05) brightness(1.02) blur(1px);
					border: 4px solid rgba(255, 255, 255, 0.1);
					backdrop-filter: blur(10px);
					background: linear-gradient(
						45deg,
						rgba(255, 255, 255, 0.1),
						rgba(255, 255, 255, 0.05)
					);
				}

				.hero-image:hover {
					transform: translateY(-5px) scale(1.02);
					box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
					filter: contrast(1.1) brightness(1.05) blur(0.5px);
				}

				@media (max-width: 768px) {
					.hero-content {
						grid-template-columns: 1fr;
						text-align: center;
					}

					.hero-text {
						margin: 0 auto;
					}

					.greeting {
						font-size: 1.5rem;
					}

					.name {
						font-size: 3.5rem;
					}

					.hero-subtitle {
						font-size: 1.75rem;
					}

					.hero-description {
						font-size: 1.2rem;
					}

					.hero-image {
						max-width: 300px;
					}

					.hero-image-container {
						min-height: 300px;
					}
				}
			`}</style>
		</section>
	);
};

export default Hero;
