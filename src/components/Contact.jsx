import React from "react";

const Contact = () => {
	return (
		<section id="contact" className="colorlib-contact" data-section="contact">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div
						className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
						data-animate-effect="fadeInLeft"
					>
						<span className="heading-meta">Get in Touch</span>
						<h2 className="colorlib-heading">Contact</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<div
							className="colorlib-feature colorlib-feature-sm animate-box"
							data-animate-effect="fadeInLeft"
						>
							<div className="colorlib-icon">
								<i className="icon-mail"></i>
							</div>
							<div className="colorlib-text">
								<p>
									<a href="mailto:godfreysam09@gmail.com">Click to email me</a>
								</p>
							</div>
						</div>

						<div
							className="colorlib-feature colorlib-feature-sm animate-box"
							data-animate-effect="fadeInLeft"
						>
							<div className="colorlib-icon">
								<i className="icon-map"></i>
							</div>
							<div className="colorlib-text">
								<p>
									Gwarinpa, Abuja Nigeria <span>&#9679;</span> 900108
								</p>
							</div>
						</div>

						<div
							className="colorlib-feature colorlib-feature-sm animate-box"
							data-animate-effect="fadeInLeft"
						>
							<div className="colorlib-icon">
								<i className="icon-phone3"></i>
							</div>
							<div className="colorlib-text">
								<p>
									<a href="tel:+2348164815637">Click to call me</a>
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-8">
						{/* Replace this with your image */}
						<img
							src="images/lightbulb.jpg"
							alt="Lightbulb"
							className="img-responsive"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
