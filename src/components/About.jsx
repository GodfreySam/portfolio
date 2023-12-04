import React from "react";

const About = () => {
	return (
		<section className="colorlib-about" data-section="about">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-12">
						<div
							className="row row-bottom-padded-sm animate-box"
							data-animate-effect="fadeInLeft"
						>
							<div className="col-md-12">
								<div className="about-desc">
									<h1 className="heading-meta">About</h1>
									<h2 className="colorlib-heading">Who Am I?</h2>
									<p>
										<strong>Godfrey Samuel</strong> is a highly motivated, result-oriented
										full stack developer with over five years of experience working in the
										tech industry.
									</p>
									<p>
										He has worked in various capacities as a front-end developer, and a
										back-end developer leveraging his knowledge of various technologies to
										build scalable and robust applications at industry and enterprise
										level; helping local and international businesses come to terms with
										present day realities.
									</p>
									<p>
										He is a team player with creative problem-solving skills and a strong
										desire to learn and improve his skills.
									</p>
									<p>
										Currently, he is a Software Developer at{" "}
										<a
											href="https://www.ppdc.org/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Public and Private Development Centre (PPDC)
										</a>
										; a civil society organization that promotes transparency and
										accountability in public contracting through data analysis and civic
										engagement. His role at PPDC involves building and maintaining the
										organization's web applications and in-house software.
									</p>
									<p>
										He is also the lead developer at{" "}
										<a
											href="https://www.alanturingcodes.com/"
											target="_blank"
											rel="noopener noreferrer"
										>
											Alan Turing Codes
										</a>
										; a software development company that builds software solutions for
										businesses and organizations.
									</p>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
								<div className="services color-1">
									<span className="icon2">
										<i className="icon-bulb"></i>
									</span>
									<h3>Full Stack Developer</h3>
								</div>
							</div>
							<div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
								<div className="services color-2">
									<span className="icon2">
										<i className="icon-globe-outline"></i>
									</span>
									<h3>Software Developer</h3>
								</div>
							</div>
							<div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
								<div className="services color-3">
									<span className="icon2">
										<i className="icon-data"></i>
									</span>
									<h3>Software Designer</h3>
								</div>
							</div>
							<div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
								<div className="services color-4">
									<span className="icon2">
										<i className="icon-phone3"></i>
									</span>
									<h3>Mobile Developer</h3>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
								<div className="hire">
									<h2>
										I am happy to know you are here. <br />
										Let's get building!
									</h2>
									<a href="#contact" className="btn-hire">
										Hire me
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
