import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Initialize Google Analytics
const GA_MEASUREMENT_ID = "G-5VBSJ9TQ1Y";

// Initialize GA4
const initializeGA = () => {
	// Load the Google Analytics script
	const script1 = document.createElement("script");
	script1.async = true;
	script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

	const script2 = document.createElement("script");
	script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_path: window.location.pathname,
    });
  `;

	document.head.appendChild(script1);
	document.head.appendChild(script2);
};

// Track page views
const trackPageView = (path) => {
	if (typeof window.gtag === "function") {
		window.gtag("config", GA_MEASUREMENT_ID, {
			page_path: path,
		});
	}
};

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
	if (typeof window.gtag === "function") {
		window.gtag("event", eventName, eventParams);
	}
};

const Analytics = () => {
	const location = useLocation();

	useEffect(() => {
		// Initialize GA on component mount
		initializeGA();
	}, []);

	useEffect(() => {
		// Track page views when location changes
		trackPageView(location.pathname);
	}, [location]);

	return null; // This component doesn't render anything
};

export default Analytics;
