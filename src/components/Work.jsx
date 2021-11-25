import React from "react";
import { data } from "../projectData";

const Work = () => {
	return (
		<section id="work" className="colorlib-work" data-section="work">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div
						className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
						data-animate-effect="fadeInLeft"
					>
						<span className="heading-meta">My Work</span>
						<h2 className="colorlib-heading animate-box">Recent Work</h2>
					</div>
				</div>
				<div
					className="row row-bottom-padded-sm animate-box"
					data-animate-effect="fadeInLeft"
				></div>
				<div className="row">
					{data.map((item, index) => {
						return (
							<div
								key={index + 1}
								className="col-md-6 animate-box"
								data-animate-effect="fadeInLeft"
							>
								<div
									className="project"
									style={{ backgroundImage: `url(${item.path})` }}
								>
									<div className="desc">
										<div className="con">
											<h3>
												<a href="work.html">Work 0{index + 1}</a>
											</h3>
											<span>{item.type}</span>
											<p className="icon">
												<span>
													<a href={item.url} target="_blank">
														<i className="icon-eye"></i>
													</a>
												</span>
												<span>
													<a href={item.git}>
														<i className="icon-github"></i>
													</a>
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className="row">
					<div className="col-md-12 animate-box">
						<p>
							<a
								href="https://github.com/GodfreySam"
								target="_blank"
								className="btn btn-primary btn-lg btn-load-more"
							>
								See more
							</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Work;
