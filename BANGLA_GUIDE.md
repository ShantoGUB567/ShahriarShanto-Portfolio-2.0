# সেটআপ গাইড (Bangla)

## 🚀 কিভাবে শুরু করবেন

### ১. প্রথম বার চালানো

```bash
cd portfolio
npm install
npm start
```

ব্রাউজারে যান: `http://localhost:4200`

### ২. আপনার তথ্য আপডেট করুন

**শুধুমাত্র এই ফাইলটি এডিট করুন:**
`src/app/data/portfolio.config.ts`

```typescript
export const PORTFOLIO_DATA = {
  personalInfo: {
    name: 'আপনার নাম',
    title: 'আপনার টাইটেল',
    bio: 'আপনার সম্পর্কে...',
    profileImage: 'assets/profile.jpg'
  },
  
  contact: {
    email: 'your@email.com',
    phone: '+880 1234567890',
    location: 'ঢাকা, বাংলাদেশ'
  },
  
  experience: [
    {
      period: 'Feb 2024 - Present',
      title: 'আপনার পদবি',
      company: 'কোম্পানির নাম',
      description: 'কাজের বিবরণ...',
      current: true
    }
  ],
  
  projects: [
    {
      title: 'প্রজেক্টের নাম',
      description: 'প্রজেক্ট সম্পর্কে...',
      image: 'assets/projects/project1.jpg',
      technologies: ['Angular', 'TypeScript'],
      link: 'https://github.com/yourproject'
    }
  ]
}
```

### ৩. ছবি যোগ করুন

- **প্রোফাইল ছবি**: `src/assets/profile.jpg`
- **প্রজেক্ট ছবি**: `src/assets/projects/` ফোল্ডারে
- **রিজিউম**: `src/assets/resume.pdf`

### ৪. রঙ পরিবর্তন করুন

`src/styles.css` ফাইলে:

```css
:root {
  --primary-color: #3dd9b3;  /* মূল রঙ */
  --bg-primary: #0d0d0d;     /* ব্যাকগ্রাউন্ড */
}
```

## 🎨 নতুন সেকশন যোগ করুন

### ১. নতুন কম্পোনেন্ট তৈরি করুন

```bash
npm run ng generate component components/blog --skip-tests
```

### ২. Data যোগ করুন

`portfolio.config.ts` তে:

```typescript
export interface BlogPost {
  title: string;
  content: string;
  date: string;
}

export const PORTFOLIO_DATA = {
  // ... আগের ডেটা
  
  blogs: [
    {
      title: 'আমার প্রথম ব্লগ',
      content: 'ব্লগের কন্টেন্ট...',
      date: '2024-01-01'
    }
  ]
}
```

### ৩. Component এ Import করুন

`src/app/components/blog/blog.component.ts`:

```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.config';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Input() blogs = PORTFOLIO_DATA.blogs;
}
```

### ৪. HTML Template

`blog.component.html`:

```html
<section id="blog" class="section">
  <div class="container">
    <h2 class="section-title">আমার ব্লগ</h2>
    <div *ngFor="let blog of blogs" class="blog-post">
      <h3>{{ blog.title }}</h3>
      <p>{{ blog.content }}</p>
      <span>{{ blog.date }}</span>
    </div>
  </div>
</section>
```

### ৫. App Component এ যোগ করুন

`app.component.ts`:

```typescript
import { BlogComponent } from './components/blog/blog.component';

@Component({
  imports: [
    // ... অন্যান্য imports
    BlogComponent
  ]
})
```

`app.component.html`:

```html
<app-blog></app-blog>
```

## 📦 Production Build

```bash
npm run build
```

Build ফাইল পাবেন: `dist/portfolio/browser/`

এই ফোল্ডার deploy করুন:
- Netlify
- Vercel
- Firebase Hosting
- GitHub Pages

## 💡 গুরুত্বপূর্ণ টিপস

1. **সব ডেটা একটি ফাইলে** - `portfolio.config.ts`
2. **Component গুলো reusable** - সহজে add/remove করতে পারবেন
3. **Mobile responsive** - সব device এ কাজ করবে
4. **Type-safe** - TypeScript error দেখাবে যদি কোনো ভুল হয়

## 🔧 Commands

```bash
npm start          # Development server চালান
npm run build      # Production build তৈরি করুন
```

## ❓ সমস্যা হলে

1. `npm install` আবার চালান
2. Node.js version 18+ আছে কিনা চেক করুন
3. `node_modules` delete করে আবার `npm install` করুন

---

**সহজ, Reusable, এবং Customizable!**
