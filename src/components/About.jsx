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
									<span className="heading-meta">About</span>
									<h2 className="colorlib-heading">Who Am I?</h2>
									<p>
										<strong>Hi I'm Godfrey Samuel,</strong> a full stack Developer, a
										highly motivated, result-oriented developer with creative
										problem-solving skills leveraging his technological and developer
										skills at industry and enterprise level helping local and
										international businesses come to terms with present day realities.
									</p>
									<p>
										Godfrey is the Co-founder of E-printing Software as a service (SaaS)
										product hosted at{" "}
										<a
											href="http://epinsorter.com/"
											target="_blank"
											rel="noopener noreferrer"
										>
											epinsorter.com
										</a>
										, a startup that helps make sorting and printing of telephone utility
										bill recharge cards for the distributors and dealers easily accessible
										on any device.
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
									<h3>UI/UX Design</h3>
								</div>
							</div>
							<div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
								<div className="services color-2">
									<span className="icon2">
										<i className="icon-globe-outline"></i>
									</span>
									<h3>Web Developer</h3>
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