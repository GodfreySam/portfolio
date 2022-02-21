import React from "react";

const Sidebar = () => {
	return (
		<>
			<span
				className="js-colorlib-nav-toggle colorlib-nav-toggle"
				data-toggle="collapse"
				data-target="#navbar"
				aria-expanded="false"
				aria-controls="navbar"
			>
				<i></i>
			</span>
			<aside
				id="colorlib-aside"
				role="complementary"
				className="border js-fullheight"
			>
				<div className="text-center">
					<div
						className="author-img"
						style={{ backgroundImage: "url(images/about.jpg)" }}
					></div>
					<h1 id="colorlib-logo">
						<a href="index.html">Godfrey Samuel</a>
					</h1>
					<span className="position">
						<a href="">Full Stack Developer</a>
					</span>
				</div>
				<nav
					id="colorlib-main-menu"
					role="navigation"
					className="navbar"
					style={{ marginTop: "30px" }}
				>
					<div id="navbar" className="collapse">
						<ul>
							<li className="active">
								<a href="" data-nav-section="home">
									Home
								</a>
							</li>
							<li>
								<a href="#" data-nav-section="about">
									About
								</a>
							</li>
							<li>
								<a href="#" data-nav-section="services">
									Services
								</a>
							</li>
							<li>
								<a href="#" data-nav-section="work">
									Work
								</a>
							</li>
							<li>
								<a href="#" data-nav-section="contact">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</nav>
				<div className="colorlib-footer">
					<div>
						<ul className="">
							<li>
								<a
									href="https://github.com/GodfreySam"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="icon-github" style={{ color: "black" }}></i>
								</a>
							</li>
							<li>
								<a
									href="https://linkedin.com/in/godfrey--samuel"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="icon-linkedin2 text-primary"></i>
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/freyyo"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="icon-twitter2 text-primary"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
