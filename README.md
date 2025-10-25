# Cricbuzzind - Cricket Betting Platform

A modern Angular application for cricket betting tips, predictions, and bookmaker recommendations.

## Features

- 🌓 **Dark/Light Theme** - Automatic theme management with localStorage persistence
- 📱 **Responsive Design** - Mobile-first approach with modern UI/UX
- ⚡ **Performance Optimized** - Production-ready build configuration
- 🎨 **Modern UI** - Clean and intuitive interface
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and Twitter Cards
- ♿ **Accessible** - WCAG compliant components

## Theme Management

The application includes an intelligent theme management system:

- **Default Theme**: Dark theme on first load
- **Persistence**: Theme preference saved in localStorage
- **No Flash**: Prevents flash of unstyled content (FOUC) on load
- **Toggle**: Easy theme switching via header button

### How It Works

1. On first visit, the app loads with dark theme
2. User's theme preference is saved to localStorage
3. On subsequent visits, the last selected theme is applied
4. The theme toggle button allows switching between light/dark modes

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Angular CLI 19+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will be available at `http://localhost:4200`

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for development
- `npm run build:prod` - Build for production
- `npm run watch` - Build and watch for changes
- `npm run preview` - Preview production build
- `npm test` - Run tests

## Production Build

### Build Configuration

The production build includes:
- Code minification and optimization
- Tree-shaking for unused code
- AOT compilation
- Source map generation (disabled for security)
- Asset optimization
- Bundle size limits (500kb initial, 1mb max)

### Building for Production

```bash
# Build the application
npm run build:prod

# Output will be in dist/cribuzzind directory
```

### Production Optimizations

- **Optimization**: Scripts, styles, and fonts are optimized
- **Source Maps**: Disabled for security
- **Bundle Chunks**: Disabled for smaller bundles
- **Build Optimizer**: Enabled for enhanced performance
- **Output Hashing**: All assets are hashed for cache busting
- **Extract Licenses**: Third-party licenses are extracted

## Deployment

### Static Hosting (Recommended)

The application can be deployed to any static hosting service:

1. **Build the application**:
   ```bash
   npm run build:prod
   ```

2. **Deploy the `dist/cribuzzind` folder** to your hosting service

### Popular Hosting Options

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `dist/cribuzzind` folder
- **Firebase Hosting**: `firebase deploy`
- **GitHub Pages**: Follow Angular deployment guide
- **AWS S3**: Upload dist folder to S3 bucket

### Environment Configuration

For different environments, update the base href in `angular.json`:

```json
"baseHref": "/your-app-path/"
```

## Project Structure

```
src/
├── app/
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   └── app.component.*   # Root component
├── assets/
│   ├── data/            # JSON data files
│   └── images/          # Image assets
└── styles/              # Global styles and theme
    ├── _variables.scss  # SCSS variables
    ├── _mixins.scss     # SCSS mixins
    ├── _base.scss       # Base styles
    └── _components.scss # Component styles
```

## Theme Architecture

### CSS Variables System

The application uses CSS custom properties for theming:

```scss
// Dark theme colors
--bg-primary: #1a1a1a;
--text-primary: #ffffff;
--link-primary: #ff6b35;

// Light theme colors (when data-theme="light")
--bg-primary: #ffffff;
--text-primary: #212529;
```

### Adding Theme Colors

Edit `src/styles/_variables.scss` to add new theme variables.

## Performance Guidelines

- **Bundle Size**: Keep initial bundle under 500kb
- **Lazy Loading**: Use Angular lazy loading for routes
- **Image Optimization**: Optimize images before adding
- **Font Loading**: Fonts are preloaded for performance
- **Tree Shaking**: Import only necessary modules

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email info@cricbuzzind.com or create an issue in the repository.
