import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
 

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [captcha, setCaptcha] = useState("");

	const contactMessageHandler = async (e) => {
		e.preventDefault();
		if (name === "") return toast.error("Please enter your name");
		if (email === "") return toast.error("Email is required");
		if (subject === "") return toast.error("You should write a subject");
		if (message === "") return toast.error("Message can not be empty");

		const newMessage = {
			name,
			email,
			subject,
			message,
			captcha
		};

		console.log(newMessage);
		try {
			let res = await axios.post(
				"https://contact-mailer-api.herokuapp.com/api/v1/contact",
				newMessage,
			);
			console.log(res);
			if (res.data.success) toast.success(res.data.msg);
			setMessage("")
			setSubject("");
			setEmail("");
			setName("");
		} catch (err) {
			if (!err.response.data.success) return toast.error(err.response.data.msg);
		}
	};

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
					<div className="col-md-5">
						<div
							className="colorlib-feature colorlib-feature-sm animate-box"
							data-animate-effect="fadeInLeft"
						>
							<div className="colorlib-icon">
								<i className="icon-mail"></i>
							</div>
							<div className="colorlib-text">
								<p>
									<a href="mailto:godfreysam09@gmail.com">godfreysam09@gmail.com</a>
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
									<a href="tel://">+234 808 235 8376</a>
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-7 col-md-push-1">
						<div className="row">
							<div
								className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box"
								data-animate-effect="fadeInRight"
							>
								<form onSubmit={contactMessageHandler}>
									<div className="form-group">
										<input
											value={name}
											onChange={(e) => setName(e.target.value)}
											type="text"
											className="form-control"
											placeholder="Name"
										/>
									</div>
									<div className="form-group">
										<input
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											type="email"
											className="form-control"
											placeholder="Email"
										/>
									</div>
									<div className="form-group">
										<input
											value={subject}
											onChange={(e) => setSubject(e.target.value)}
											type="text"
											className="form-control"
											placeholder="Subject"
										/>
									</div>
									<div className="form-group">
										<textarea
											value={message}
											onChange={(e) => setMessage(e.target.value)}
											name=""
											id="message"
											cols="30"
											rows="7"
											className="form-control"
											placeholder="Message"
										/>
									</div>
									<div className="form-group">
										<ReCAPTCHA
											className="g-recaptcha"
											sitekey="6Ldj2lsbAAAAAD5NXrObnRX3ElSvKiDtq15skBvx"
											onChange={(val)=> setCaptcha(val) }
										/>
									</div>
									<div className="form-group">
										<input
											type="submit"
											className="btn btn-primary btn-send-message"
											value="Send Message"
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
