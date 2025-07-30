my portfolio website: hosted at: [http://godfreyo.link](http://godfreyo.link)

# Godfrey Samuel Portfolio

A modern, responsive portfolio website built with React, showcasing software development and integration engineering expertise.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast performance with React 18
- 📱 Mobile-first approach
- 🎭 Smooth animations with Framer Motion
- 📊 Google Analytics integration
- 📧 Contact form with reCAPTCHA
- 🔍 SEO optimized

## Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: CSS-in-JS with styled-jsx
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Forms**: React Hook Form with validation
- **Notifications**: React Hot Toast
- **Analytics**: Google Analytics

## Getting Started

### Prerequisites

- Node.js (version 20 or higher recommended, minimum 18)
- Yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
yarn build
```

This creates a `build` folder with the production-ready files.

## Deployment on Netlify

### Automatic Deployment

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the build settings from `netlify.toml`
3. Deploy with the following settings:
   - **Build command**: `yarn run build`
   - **Publish directory**: `build`
   - **Node version**: 20

### Manual Deployment

1. Build the project:

```bash
yarn build
```

2. Upload the `build` folder to Netlify

### Environment Variables

If you need to add environment variables for production:

1. Go to your Netlify dashboard
2. Navigate to Site settings > Environment variables
3. Add any required environment variables

## Project Structure

```
src/
├── components/          # React components
│   ├── About.jsx       # About section
│   ├── Analytics.jsx   # Google Analytics
│   ├── Contact.jsx     # Contact form
│   ├── Hero.jsx        # Hero section
│   ├── Services.jsx    # Services section
│   ├── Sidebar.jsx     # Navigation sidebar
│   └── Work.jsx        # Portfolio work
├── App.jsx             # Main app component
├── index.js            # App entry point
└── index.css           # Global styles
```

## Configuration Files

- `netlify.toml` - Netlify deployment configuration
- `public/_redirects` - URL redirects for SPA routing
- `public/index.html` - HTML template
- `package.json` - Dependencies and scripts

## Customization

### Updating Personal Information

Edit the following files to update your information:

- `src/components/Sidebar.jsx` - Update name and social links
- `src/components/Hero.jsx` - Update hero content
- `src/components/About.jsx` - Update about section
- `src/components/Services.jsx` - Update services
- `src/components/Work.jsx` - Update portfolio projects
- `src/components/Contact.jsx` - Update contact information

### Styling

The app uses CSS-in-JS with styled-jsx. Each component contains its own styles. To modify the design:

1. Update the CSS variables in `src/index.css`
2. Modify the styled-jsx blocks in each component

## Performance Optimization

- Images are optimized and lazy-loaded
- Code splitting with React Router
- Minified production builds
- Optimized bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, contact Godfrey Samuel at godfreysam09@gmail.com
