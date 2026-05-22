# Quick Start Guide

## 🚀 3 Steps to Get Started

### Step 1: Install & Run
```bash
cd portfolio
npm install
npm start
```

### Step 2: Update Your Data
Edit this ONE file: `src/app/data/portfolio.config.ts`

Change:
- Your name, title, bio
- Contact information
- Social media links
- Work experience
- Projects
- Skills
- Achievements

### Step 3: Add Your Images
Place your images in:
- `src/assets/profile.jpg` - Your photo
- `src/assets/projects/` - Project screenshots
- `src/assets/resume.pdf` - Your resume

## 🎨 Customize Colors (Optional)
Edit `src/styles.css`:
```css
:root {
  --primary-color: #3dd9b3; /* Change this! */
}
```

## ✅ That's It!

Your portfolio is ready to use. The entire app is built with reusable components that automatically update when you change the data file.

## 📚 Need More Help?
- See `README.md` for detailed documentation
- See `BANGLA_GUIDE.md` for Bangla instructions
- All components are in `src/app/components/`

## 🚀 Deploy
```bash
npm run build
```
Upload `dist/portfolio/browser/` to any hosting service!
