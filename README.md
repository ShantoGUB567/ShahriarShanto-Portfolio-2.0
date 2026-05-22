# Modern Angular Portfolio

A professional, responsive portfolio website built with **Angular 18** featuring a clean dark theme and smooth animations.

## 🚀 Features

- ✅ **Fully Responsive** - Works on all devices
- ✅ **Modern Design** - Clean dark theme with teal accents
- ✅ **Component-Based** - Reusable, modular components
- ✅ **Easy to Customize** - Single configuration file
- ✅ **Smooth Animations** - Professional transitions
- ✅ **TypeScript** - Type-safe development
- ✅ **Standalone Components** - Latest Angular architecture

## 📦 What's Included

### Components
- **Header** - Sticky navigation with mobile menu
- **Hero** - Profile section with social links
- **About** - Professional bio
- **Experience** - Timeline of work history
- **Education** - Academic background
- **Projects** - Showcased work with images
- **Tech Stack** - Skills and technologies
- **Achievements** - Leadership and accomplishments
- **Contact** - Contact information

## 🛠️ Installation

```bash
# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Run development server
npm start
```

Visit `http://localhost:4200` in your browser.

## ⚙️ Customization

All portfolio data is centralized in **ONE FILE** for easy customization:

**`src/app/data/portfolio.config.ts`**

### Update Your Information

```typescript
export const PORTFOLIO_DATA: PortfolioData = {
  personalInfo: {
    name: 'Your Name',
    title: 'Your Title',
    subtitle: 'Your Subtitle',
    bio: 'Your bio...',
    profileImage: 'assets/profile.jpg',
    resumeUrl: 'assets/resume.pdf'
  },
  
  contact: {
    email: 'your.email@example.com',
    phone: '+880 1234567890',
    location: 'Your City, Country'
  },
  
  socials: [
    { icon: 'github', url: 'https://github.com/yourusername', label: 'GitHub' },
    // Add more social links...
  ],
  
  experience: [
    {
      period: 'Jan 2024 - Present',
      title: 'Your Job Title',
      company: 'Company Name',
      description: 'Job description...',
      current: true
    }
  ],
  
  projects: [
    {
      title: 'Project Name',
      description: 'Project description...',
      image: 'assets/projects/project1.jpg',
      technologies: ['Angular', 'TypeScript'],
      link: 'https://github.com/yourusername/project'
    }
  ]
}
```

### Add Your Images

1. **Profile Photo**: `src/assets/profile.jpg`
2. **Project Images**: `src/assets/projects/`
3. **Resume PDF**: `src/assets/resume.pdf`

### Customize Colors

Edit `src/styles.css`:

```css
:root {
  --primary-color: #3dd9b3;
  --bg-primary: #0d0d0d;
  --text-primary: #ffffff;
}
```

## 📁 Project Structure

```
portfolio/
├── src/app/
│   ├── components/        # All components
│   ├── data/
│   │   └── portfolio.config.ts  # YOUR DATA HERE!
│   └── app.component.ts
├── src/assets/            # Images
└── src/styles.css         # Global styles
```

## 🚀 Building for Production

```bash
npm run build
# Deploy dist/portfolio/browser/
```

## 🎯 Adding New Sections

1. Generate component: `npm run ng generate component components/new-section`
2. Add data to `portfolio.config.ts`
3. Import in `app.component.ts`
4. Add to `app.component.html`

**Built with Angular 18 | Easy to Customize | Fully Reusable**
