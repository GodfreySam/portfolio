import React from "react";

const Services = () => {
	return (
		<section className="colorlib-services" data-section="services">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div
						className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
						data-animate-effect="fadeInLeft"
					>
						<span className="heading-meta">What I do?</span>
						<h2 className="colorlib-heading">Here are some of my expertise</h2>
					</div>
				</div>
				<div className="row row-pt-md">
					<div className="col-md-4 text-center animate-box">
						<div className="services color-1">
							<span className="icon">
								<i className="icon-bulb"></i>
							</span>
							<div className="desc">
								<h3>Innovative Ideas</h3>
								<p>
									He has the ability to understand abstract concept and solve complex
									task through ideation.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 text-center animate-box">
						<div className="services color-2">
							<span className="icon">
								<i className="icon-data"></i>
							</span>
							<div className="desc">
								<h3>Development</h3>
								<p>
									Converts wireframe diagrams and protoytypes into realtime web and
									mobile application.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 text-center animate-box">
						<div className="services color-3">
							<span className="icon">
								<i className="icon-phone3"></i>
							</span>
							<div className="desc">
								<h3>Application</h3>
								<p>
									Developing application for startups, industries and enterprise.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
