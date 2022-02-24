import React from "react";

const Hero = () => {
	return (
		<section id="colorlib-hero" className="js-fullheight" data-section="home">
			<div className="flexslider js-fullheight">
				<ul className="slides">
					<li>
						<div className="slide-overlay"></div>
						<div className="overlay"></div>
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
									<div className="slider-text-inner js-fullheight">
										<div className="info-desc">
											<h1>
												Hi! <br />
												I'm Godfrey
											</h1>
											<p>
												<a
													href="https://drive.google.com/file/d/1pk4oJX5Td1Nnin3nrWl7A4b9jjuhY4DJ/view?usp=sharing"
													target="_blank"
													rel="noopener noreferrer"
													className="btn btn-primary btn-learn"
												>
													Download CV <i className="icon-download4"></i>
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div className="overlay"></div>
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
									<div className="slider-text-inner">
										<div className="info-desc">
											<h1>
												I am a <br />
												Full Stack Developer
											</h1>
											<p>
												<a className="btn btn-primary btn-learn" href="#work">
													View Portfolio <i className="icon-briefcase3"></i>
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<div className="hero-img">
					<img src="images/godfrey.png" alt="Picture of Godfrey" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
