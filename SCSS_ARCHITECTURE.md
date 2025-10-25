# OCBscores Replica - Professional SCSS Architecture

## 🎨 Theme System & SCSS Organization

This project implements a professional, scalable SCSS architecture with comprehensive theme management for dark and light modes.

## 📁 SCSS File Structure

```
src/styles/
├── _variables.scss     # Global variables, colors, typography, spacing
├── _mixins.scss       # Reusable mixins and utility functions
├── _base.scss         # Base styles, CSS custom properties, theme management
├── _components.scss   # Component-specific styles
└── styles.scss        # Main stylesheet importing all modules
```

## 🎯 Key Features

### ✅ Professional SCSS Organization
- **Modular Architecture**: Separated concerns with dedicated files
- **Global Variables**: Centralized color, typography, and spacing management
- **Reusable Mixins**: Common patterns and utilities
- **Component Isolation**: Each component has its own SCSS file

### ✅ Dark/Light Theme System
- **CSS Custom Properties**: Dynamic theme switching
- **Theme Toggle**: User-controlled theme switching in header
- **System Preference Detection**: Automatic theme detection
- **Persistent Storage**: Theme preference saved in localStorage
- **Smooth Transitions**: Animated theme changes

### ✅ Responsive Design
- **Mobile-First Approach**: Responsive breakpoints
- **Flexible Grid System**: Bootstrap-like utilities
- **Component Adaptability**: All components are responsive

## 🎨 Theme Variables

### Color System
```scss
// Primary Colors
$primary-color: #ff6b35;
$primary-hover: #e55a2b;

// Theme Maps
$dark-theme: (
  'bg-primary': #1a1a1a,
  'bg-secondary': #2a2a2a,
  'text-primary': #ffffff,
  'text-secondary': #cccccc,
  // ... more colors
);

$light-theme: (
  'bg-primary': #ffffff,
  'bg-secondary': #f8f9fa,
  'text-primary': #212529,
  'text-secondary': #6c757d,
  // ... more colors
);
```

### Typography System
```scss
// Font Families
$font-family-primary: 'Roboto', sans-serif;
$font-family-secondary: 'Inter', sans-serif;

// Font Sizes
$font-size-xs: 0.75rem;    // 12px
$font-size-sm: 0.875rem;  // 14px
$font-size-base: 1rem;    // 16px
$font-size-lg: 1.125rem;  // 18px
// ... more sizes

// Font Weights
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
```

### Spacing System
```scss
$spacing-xs: 0.25rem;   // 4px
$spacing-sm: 0.5rem;   // 8px
$spacing-md: 1rem;     // 16px
$spacing-lg: 1.5rem;   // 24px
$spacing-xl: 2rem;     // 32px
// ... more spacing
```

## 🔧 Usage Examples

### Using Theme Colors
```scss
.my-component {
  background-color: theme-color('bg-primary');
  color: theme-color('text-primary');
  border: 1px solid theme-color('border-primary');
}
```

### Using Mixins
```scss
.button {
  @include button-base;
  @include button-variant(
    theme-color('btn-primary-bg'),
    theme-color('text-inverse'),
    theme-color('btn-primary-hover')
  );
}

.card {
  @include card-base;
}

.flex-container {
  @include flex-between;
}
```

### Using Responsive Mixins
```scss
.responsive-component {
  padding: var(--spacing-md);
  
  @include respond-below(md) {
    padding: var(--spacing-sm);
  }
}
```

## 🎛️ Theme Toggle Implementation

### Header Component Features
- **Theme Toggle Button**: Sun/Moon icon with smooth rotation
- **Accessibility**: ARIA labels and keyboard navigation
- **Visual Feedback**: Hover effects and animations
- **Persistent State**: Theme preference saved across sessions

### Theme Switching Logic
```typescript
toggleTheme() {
  this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
  this.applyTheme(this.currentTheme);
  localStorage.setItem('theme', this.currentTheme);
}

private applyTheme(theme: 'light' | 'dark') {
  document.documentElement.setAttribute('data-theme', theme);
  // Update meta theme-color for mobile browsers
}
```

## 📱 Responsive Breakpoints

```scss
$breakpoint-xs: 0;
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;
$breakpoint-2xl: 1400px;
```

### Usage
```scss
@include respond-below(md) {
  // Styles for screens smaller than 768px
}

@include respond-to(lg) {
  // Styles for screens 992px and larger
}
```

## 🎨 Component Styling Guidelines

### 1. Always Use Global Variables
```scss
// ✅ Good
.component {
  color: theme-color('text-primary');
  padding: var(--spacing-md);
  font-size: var(--font-size-base);
}

// ❌ Bad
.component {
  color: #ffffff;
  padding: 16px;
  font-size: 1rem;
}
```

### 2. Use Mixins for Common Patterns
```scss
// ✅ Good
.button {
  @include button-base;
  @include button-variant($primary-color, white, $primary-hover);
}

// ❌ Bad
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  // ... repetitive code
}
```

### 3. Follow Component Structure
```scss
// Component-specific styles
.component-name {
  // Base styles using global variables
  
  .sub-element {
    // Nested styles
  }
  
  // Responsive styles
  @include respond-below(md) {
    // Mobile styles
  }
}
```

## 🚀 Performance Optimizations

### CSS Custom Properties
- **Dynamic Theming**: No JavaScript required for theme switching
- **Smooth Transitions**: Hardware-accelerated animations
- **Reduced Bundle Size**: Shared variables across components

### SCSS Compilation
- **Modular Imports**: Only necessary styles are compiled
- **Optimized Output**: Minified CSS in production
- **Source Maps**: Easy debugging in development

## 🔍 Browser Support

- **Modern Browsers**: Chrome 88+, Firefox 78+, Safari 14+, Edge 88+
- **CSS Custom Properties**: Full support for theme switching
- **Flexbox**: Complete responsive layout support
- **CSS Grid**: Advanced layout capabilities

## 📋 Development Guidelines

### 1. Adding New Colors
```scss
// In _variables.scss
$new-color: #your-color;

// Add to theme maps
$dark-theme: (
  'new-color': $new-color,
  // ... existing colors
);
```

### 2. Creating New Mixins
```scss
// In _mixins.scss
@mixin new-mixin($param) {
  // Mixin implementation
}
```

### 3. Component Styling
```scss
// In component.scss
.component {
  // Use global variables
  // Use mixins for common patterns
  // Follow responsive design principles
}
```

## 🎯 Best Practices

1. **Consistency**: Always use global variables for colors, spacing, and typography
2. **Modularity**: Keep component styles isolated and focused
3. **Responsiveness**: Design mobile-first with progressive enhancement
4. **Accessibility**: Ensure proper contrast ratios and keyboard navigation
5. **Performance**: Use efficient selectors and avoid deep nesting
6. **Maintainability**: Write clear, documented SCSS code

## 🔧 Build Process

The SCSS files are automatically compiled by Angular CLI:
- **Development**: Source maps enabled for debugging
- **Production**: Minified and optimized CSS output
- **Hot Reload**: Instant style updates during development

## 📚 Additional Resources

- [SCSS Documentation](https://sass-lang.com/documentation)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Angular Styling Guide](https://angular.io/guide/component-styles)
- [Responsive Design Principles](https://web.dev/responsive-web-design-basics/)

---

This architecture provides a solid foundation for scalable, maintainable, and professional web applications with comprehensive theme management and responsive design capabilities.
