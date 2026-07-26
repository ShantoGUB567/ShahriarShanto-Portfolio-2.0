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
  longDescription?: string;
  image: string;
  technologies?: string[];
  links?: {
    live?: string;
    playStore?: string;
    appStore?: string;
    testFlight?: string;
    openTesting?: string;
    github?: string;
  };
}

export interface Achievement {
  title: string;
  organization: string;
  period: string;
  description?: string;
  icon?: string | null;
}

export interface Skill {
  name: string;
  category: string;
  iconType: string;
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
  skills: Skill[];
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
    email: 'me.shahriarshanto@gmail.com',
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
    { icon: '/assets/media_icons/email.png', url: 'mailto:me.shahriarshanto@gmail.com', label: 'Email' },
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
      title: 'Sippd.Coffee',
      description: 'A location-based coffee discovery and review platform with Firebase authentication, REST API integration, and AI-driven insights.',
      longDescription: 'Sippd.Coffee is a location-based coffee discovery and review platform with Firebase authentication, REST API integration, and AI-driven insights, enabling users to explore nearby cafés, submit ratings, and share real-time feedback.',
      image: '/assets/projects/sippd-coffee.png',
      technologies: ['Flutter', 'REST API', 'AI/ML', 'Firebase'],
      links: {
        appStore: 'https://apps.apple.com/sg/app/sippd-coffee/id6752921147',
        playStore: 'https://play.google.com/store/apps/details?id=com.sipped.app&hl=en'
      }
    },
    {
      title: 'Real Convert',
      description: 'A currency converter supporting 160+ currencies with live exchange rates, historical charts, home screen widgets, and offline mode.',
      longDescription: 'Real Convert is a currency converter supporting 160+ currencies with live exchange rates, historical charts, home screen widgets, and offline mode.',
      image: '/assets/projects/real-convert.png',
      technologies: ['Flutter', 'REST API', 'Widgets'],
      links: {
        appStore: 'https://apps.apple.com/in/app/real-convert/id6748574890',
        playStore: 'https://play.google.com/store/apps/details?id=com.solank.currencyconverter'
      }
    },
    {
      title: 'NW RMG Website',
      description: 'A professional business website for NW RMG, showcasing apparel products, sustainable manufacturing processes...',
      longDescription: 'NW RMG Website is a highly responsive web application designed for a premium Ready-Made Garments (RMG) manufacturer. It allows international buyers to explore clothing categories, inspect production certifications, view facilities, and submit detailed order inquiries. Built to load fast and rank well on search engines.',
      image: '/assets/projects/nw-rmg.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
      links: {
        live: 'https://www.nw-rmg.com/',
        // github: 'https://github.com/ShantoGUB567/nw-rmg'
      }
    },
    {
      title: 'Green Campus',
      description: 'A campus utility portal for GUB students offering class routines, results tracking, and cafeteria ordering...',
      longDescription: 'Green Campus is a comprehensive mobile application designed specifically for students at Green University of Bangladesh. It consolidates crucial student portal features such as current schedules, attendance visualizer, exam routines, direct portal results, and a digital cafeteria menu with ordering features into one native application.',
      image: '/assets/projects/green-campus.jpg',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST API', 'GetX'],
      links: {
        github: 'https://github.com/ShantoGUB567/Green-Campus.git',
        // playStore: 'https://play.google.com/store/apps/details?id=com.gub.greencampus',
        // openTesting: 'https://play.google.com/apps/testing/com.gub.greencampus'
      }
    },
    {
      title: 'AI Classroom Assistant',
      description: 'An AI-powered academic assistant leveraging Google Gemini for summaries, search, and note translation...',
      longDescription: 'AI Classroom Assistant is a state-of-the-art mobile application that integrates Google Gemini AI to assist students and educators in their daily academic tasks. It features real-time OCR for scanning physical handouts, automated summaries, dynamic quiz generation, and quick references. Built using Clean Architecture.',
      image: '/assets/projects/ai-assistant.jpg',
      technologies: ['Flutter', 'Dart', 'Google Gemini AI', 'Riverpod', 'Hive'],
      links: {
        github: 'https://github.com/ShantoGUB567/ai-assistant',
        testFlight: 'https://testflight.apple.com/join/ai-classroom-assistant'
      }
    },
    {
      title: 'Billing Infrastructure',
      description: 'An offline POS application utilizing Riverpod and SQLite for sales logging and receipt generation...',
      longDescription: 'Billing Infrastructure is a feature-rich, offline-first Point of Sale (POS) and inventory tracker built for local retail shops. It supports inventory cataloging, sales analytics dashboards, low-stock warnings, barcode scanning simulation, and immediate PDF invoice generation. Using SQLite, it is fast and requires zero network access.',
      image: '/assets/projects/billing.jpg',
      technologies: ['Flutter', 'Dart', 'Riverpod', 'SQLite', 'PDF Library'],
      links: {
        github: 'https://github.com/ShantoGUB567/billing',
        appStore: 'https://apps.apple.com/app/billing-infrastructure'
      }
    }
  ],
  skills: [
    { name: 'C', category: 'languages', iconType: 'c' },
    { name: 'C++', category: 'languages', iconType: 'cpp' },
    { name: 'Java', category: 'languages', iconType: 'java' },
    { name: 'Python', category: 'languages', iconType: 'python' },
    { name: 'Dart', category: 'languages', iconType: 'dart' },
    { name: 'Flutter', category: 'mobile', iconType: 'flutter' },
    { name: 'Go', category: 'backend', iconType: 'go' },
    { name: 'Angular', category: 'frontend', iconType: 'angular' },
    { name: 'HTML', category: 'frontend', iconType: 'html' },
    { name: 'CSS', category: 'frontend', iconType: 'css' },
    { name: 'JavaScript', category: 'frontend', iconType: 'javascript' },
    { name: 'Git', category: 'tools', iconType: 'git' },
    { name: 'GitHub', category: 'tools', iconType: 'github' },
    { name: 'GitLab', category: 'tools', iconType: 'gitlab' },
    { name: 'Firebase', category: 'databases', iconType: 'firebase' },
    { name: 'Supabase', category: 'databases', iconType: 'supabase' },
    { name: 'MySQL', category: 'databases', iconType: 'mysql' },
    { name: 'SQLite', category: 'databases', iconType: 'sqlite' },
    { name: 'App Store', category: 'tools', iconType: 'appstore' },
    { name: 'Google Play', category: 'tools', iconType: 'googleplay' },
    { name: 'Bash', category: 'tools', iconType: 'bash' },
    { name: 'Postman', category: 'tools', iconType: 'postman' },
    { name: 'VS Code', category: 'tools', iconType: 'vscode' },
    { name: 'Android Studio', category: 'tools', iconType: 'androidstudio' },
    { name: 'Xcode', category: 'tools', iconType: 'xcode' }
  ],
  achievements: [
    {
      title: 'Joint General Secretary',
      organization: 'Green University Computer Club (GUCC)',
      period: '10 March 2025 to 26 April, 2026',
      description: 'Directing daily club operations, structuring tech seminars, workshops, and competitive programming bootcamps for 500+ active members. Serving as the primary coordinator between student leads and university officials.',
      icon: '/assets/leadership_positions/jgs.jpg'
    },
    {
      title: 'Lead Organizer',
      organization: 'HackTheAI – The Inter-University Hackathon',
      period: '25 Sep, 2025',
      description: 'HackTheAI – The Inter-University Hackathon powered by SmythOS is coming to Green University of Bangladesh (GUB), proudly organized by the Department of CSE, Green University of Bangladesh and the Green University Computer Club (GUCC). 🎉 This is your chance to showcase your coding and problem-solving skills, compete with the brightest talents, and win big!',
      icon: null
    },
    {
      title: 'Advisor to President',
      organization: 'LEO Club of Green University',
      period: '03 March 2025 to November 2025',
      description: 'Assisting the LEO Club presidency with strategic planning, program delegation, and leadership training. Advising on community charity initiatives, blood donation drives, and youth engagement campaigns.',
      icon: '/assets/leadership_positions/FB_IMG_1764545465407.jpg'
    },
    {
      title: 'Joint Treasurer',
      organization: 'LEO Club of Green University',
      period: '02 July 2024 to 03 March 2025',
      description: 'Managing organizational budgets, auditing membership collections, and tracking funding allocations for multiple social service projects and community relief campaigns.',
      icon: '/assets/leadership_positions/FB_IMG_1764545521185.jpg'
    },
    {
      title: 'Technical Support & Event Manager Internship',
      organization: 'Center of Excellence for Teaching and Learning (CETL)',
      period: 'June 2024 to December 2025',
      description: 'Managing digital seminar infrastructure, assisting faculty training sessions, maintaining technical hardware systems, and streamlining campus-wide pedagogical workshop execution.',
      icon: '/assets/leadership_positions/FB_IMG_1764545573033.jpg'
    },
    {
      title: 'Event Coordinator',
      organization: 'Green University Computer Club (GUCC)',
      period: '21 May 2024 to 10 March 2025',
      description: 'Planning, mapping out, and executing major events, programming battles, and networking seminars. Coordinated logistic support, volunteer assignments, and developer sessions.',
      icon: '/assets/leadership_positions/ec.jpg'
    },
    {
      title: 'Lead Member',
      organization: 'GUB CSE Carnival 2024',
      period: '2–4 October 2024',
      description: "Led volunteer sub-teams during GUB's largest technical carnival, coordinating competitive programming venues, coding bootcamps, and project showcasing logistics.",
      icon: null
    },
    {
      title: 'Executive Member',
      organization: 'Green University Computer Club (GUCC)',
      period: '01 August 2023 to 21 May 2024',
      description: 'Organizing competitive coding mock contests, designing marketing campaigns for workshops, and supporting logistic operations during programming events.',
      icon: '/assets/leadership_positions/em.jpg'
    },
    {
      title: 'Volunteer',
      organization: '2022 ICPC ASIA DHAKA REGIONAL CONTEST',
      period: '9–10 March 2023',
      description: 'Supported venue preparations, team registrations, code submission system updates, and overall logistics during the prestigious regional collegiate programming contest.',
      icon: null
    }
  ]
};
