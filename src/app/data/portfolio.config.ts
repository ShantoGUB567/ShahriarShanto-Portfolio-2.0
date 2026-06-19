export interface SocialLink {
  icon: string;
  url: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  current?: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  address: string;
  gpa?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies?: string[];
  link?: string;
}

export interface Achievement {
  title: string;
  organization: string;
  description: string;
  icon: string;
}

export interface TechStack {
  category: string;
  icon: string;
  technologies: string[];
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    subtitle: string;
    bio: string;
    profileImage: string;
    resumeUrl?: string;
  };
  contact: ContactInfo;
  socials: SocialLink[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  techStack: TechStack[];
  achievements: Achievement[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  personalInfo: {
    name: 'Al Shahriar Ahommed Shanto',
    title: 'Cross-Platform Mobile App Developer | Flutter Enthusiast | Dart Developer',
    subtitle: 'Focused on scalable apps, clean architecture and building modern mobile apps with clean UI & smooth performance',
    bio: `I work on cross-platform mobile applications, modern web platforms, backend systems, and deployment workflows, focusing on building complete and scalable digital solutions from concept to production. My development approach combines clean architecture, performance optimization, and user-centered design to create applications that are both visually engaging and technically reliable. I enjoy working across different layers of software development, including frontend interfaces, API integration, backend logic, database management, and cloud deployment.

    With a strong passion for software engineering and continuous learning, I constantly explore modern technologies, frameworks, and development practices to improve both product quality and development efficiency. I am particularly interested in creating responsive user experiences, maintaining clean and maintainable codebases, and developing systems that can scale effectively in real-world environments.

    Beyond technical development, I value problem-solving, teamwork, and adaptability. I enjoy collaborating on innovative projects, learning from new challenges, and transforming ideas into impactful digital products. My goal is to grow as a versatile full stack developer while building modern applications that deliver meaningful experiences and long-term value to users and businesses.`,
    profileImage: '/assets/profile/profile.jpg',
    resumeUrl: '/assets/profile/resume.pdf'
  },

  // Personal ContactInfo
  contact: {
    email: 'alshahriarahommedshanto@gmail.com',
    phone: '+880 1521582378',
    location: 'Mirpur-14, Dhaka, Bangladesh'
  },

  // SocialLink 
  socials: [
    { icon: '/assets/media_icons/github.png', url: 'https://github.com/ShantoGUB567', label: 'GitHub' },
    { icon: '/assets/media_icons/linkedin.png', url: 'https://www.linkedin.com/in/alshahriarshanto/', label: 'LinkedIn' },
    { icon: '/assets/media_icons/facebook.png', url: 'https://www.facebook.com/shanto.4916', label: 'facebook' },
    // { icon: '/assets/media_icons/instagram.png', url: 'https://www.instagram.com/alshahriarshanto/', label: 'instagram' },
    // { icon: '/assets/media_icons/twitter.png', url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: '/assets/media_icons/email.png', url: 'mailto:alshahriarahommedshanto@gmail.com', label: 'Email' },
    { icon: '/assets/media_icons/whatsapp.png', url: 'https://wa.me/qr/OPSAGQFNRKHFA1', label: 'whatsapp' },
    // { icon: '/assets/media_icons/website.png', url: 'https://yourwebsite.com', label: 'Website' }
  ],

  // Work Experience
  experience: [
    {
      period: 'November 2025 - Present',
      title: 'Flutter Developer',
      company: 'Softvence Omega, Betopia Group',
      description: 'Developing and maintaining cross-platform mobile applications using Flutter, focusing on scalable architecture, clean code practices, API integration, state management, and performance optimization. Collaborating with teams to deliver user-friendly, responsive, and production-ready applications while contributing to project planning and feature implementation.',
      current: true
    },
    {
      period: 'October 2025 - November 2025',
      title: 'Flutter Developer Intern',
      company: 'Zensoft Lab',
      description: 'Learned and worked on Flutter fundamentals including UI development, widget structuring, state management basics, project architecture, and folder structure organization. Gained hands-on experience in building responsive interfaces and understanding industry-standard development workflows.'
    },
    {
      period: 'June 2024 - January 2026',
      title: 'Technical Support & Event Manager Intern',
      company: 'Center of Excellence for Teaching and Learning (CETL)',
      description: 'Managed technical support operations for academic and institutional programs, coordinated event logistics, handled digital systems setup, and ensured smooth execution of workshops, seminars, and training sessions. Worked closely with faculty and management to support educational activities efficiently.'
    },
    {
      period: 'April 2024 - December 2025',
      title: 'Assistant Invigilator',
      company: 'NAT Test (Nihongo Achievement Test), Green University of Bangladesh',
      description: 'Assisted in organizing and supervising examination sessions, ensuring proper conduct of test procedures, maintaining discipline, and supporting administrative tasks for smooth examination management.'
    }
  ],

  // Education Info
  education: [
    {
      degree: 'B.Sc in Computer Science and Engineering (CSE)',
      institution: 'Green University of Bangladesh',
      period: '2022-2026',
      address: 'Purbachal American City, Rupganj, Narayanganj',
      gpa: 'CGPA: 3.44'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Shaheed Police Smrity College',
      period: '2020',
      address: 'Mirpur-14, Dhaka',
      gpa: 'GPA: 5.00'
    },
    {
      degree: 'Secondary School Certificate  (SSC)',
      institution: 'Shaheed Police Smrity College',
      period: '2018',
      address: 'Mirpur-14, Dhaka',
      gpa: 'GPA: 5.00'
    }
  ],

  // Personal Project
  projects: [
    {
      title: 'Green Campus',
      description: 'A comprehensive campus management platform for GUB students including course schedules, attendance tracking and cafeteria...',
      image: '/assets/projects/green-campus.jpg',
      technologies: ['Flutter', 'Firebase', 'REST API'],
      link: 'https://github.com/yourusername/green-campus'
    },
    {
      title: 'AI Classroom Assistant',
      description: 'A flutter-based classroom assistant powered by Google Gemini AI integrating real-time AI assistance to streamline...',
      image: '/assets/projects/ai-assistant.jpg',
      technologies: ['Flutter', 'AI/ML', 'Google Gemini'],
      link: 'https://github.com/yourusername/ai-assistant'
    },
    {
      title: 'Billing Infrastructure',
      description: 'A custom point-of-sales app built using Rivod architecture for inventory management...',
      image: '/assets/projects/billing.jpg',
      technologies: ['Flutter', 'Riverpod', 'SQLite'],
      link: 'https://github.com/yourusername/billing'
    }
  ],
  techStack: [
    {
      category: 'Frameworks',
      icon: 'frameworks',
      technologies: ['Flutter/Dart', 'Python', 'Java', 'C']
    },
    {
      category: 'Programming',
      icon: 'code',
      technologies: ['Flutter/Dart', 'Python', 'Java', 'C']
    },
    {
      category: 'Web & Scripting',
      icon: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'NodeJS']
    },
    {
      category: 'Engineering Tools',
      icon: 'tools',
      technologies: ['Git', 'Firebase', 'Postman', 'Figma']
    },
    {
      category: 'Databases',
      icon: 'database',
      technologies: ['MongoDB', 'Hive', 'MySQL Builder', 'PostgreSQL']
    }
  ],
  achievements: [
    {
      title: 'GUCC 2025 General Secretary',
      organization: 'Green University Computer Club',
      description: 'Leading a dynamic team of coding enthusiasts by organizing tech events, workshops and programming competitions.',
      icon: '/assets/achievements/trophy.png'
    },
    {
      title: 'Major Event Milestones',
      organization: 'GUB Events',
      description: 'Successfully led major GUCC V2C event [Takes Coders Battles] and organized 200+ students',
      icon: '/assets/achievements/star.png'
    },
    {
      title: 'LEO Club Green',
      organization: 'GUB LEO Club',
      description: 'Contributing to community service initiatives and social responsibility programs...',
      icon: '/assets/achievements/heart.png'
    },
    {
      title: 'App Developer & Publisher',
      organization: 'Google Play Store',
      description: 'Published 3+ cross-platform mobile apps built with Flutter, gaining over 1,000+ active users collectively.',
      icon: '/assets/achievements/rocket.png'
    },
    {
      title: 'Coding Hackathon Winner',
      organization: 'National Programming Contests',
      description: 'Secured top positions in regional university programming contests and tech hackathons, showcasing strong Dart and Flutter prototyping skills.',
      icon: '/assets/achievements/medal.png'
    }
  ]
};
