/**
 * Portfolio Data Configuration for Amit Kumar
 * 
 * =======================================================================
 * HOW TO CUSTOMIZE THIS DATA:
 * 1. Personal Info: Edit the `personalInfo` object below.
 * 2. Projects: Add, edit, or remove items in the `projects` array.
 *    To use your own project screenshots: place images in `/public/projects/`
 *    and set the `image` field to `/projects/my-screenshot.png`.
 * 3. Skills: Update percentages or add new skills in the `skills` array.
 * 4. Services: Modify items in the `services` array.
 * =======================================================================
 */

export interface PersonalInfo {
  name: string;
  role: string;
  education: string;
  goal: string;
  location: string;
  email: string;
  shortIntro: string;
  heroHeading: string;
  heroSupportingText: string;
  rotatingTitles: string[];
  aboutBio: string;
  photoUrl: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  username: string;
  ariaLabel: string;
}

export interface Skill {
  name: string;
  percentage: number;
  category: 'web' | 'frontend' | 'programming' | 'design' | 'tools';
  description?: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'Code' | 'Layout' | 'Smartphone' | 'Briefcase';
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'web-apps' | 'frontend' | 'fullstack';
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  features: string[];
}

export const personalInfo: PersonalInfo = {
  name: 'Amit Kumar',
  role: 'Web Developer | Computer Science Student | Aspiring Software Engineer',
  education: 'B.Tech Computer Science Engineering — 3rd Year',
  goal: 'Software Engineer',
  location: 'India',
  email: 'amitkumar678793@gmail.com',
  shortIntro: 'I am a B.Tech Computer Science Engineering student and aspiring Web Developer with a passion for creating modern, responsive and user-friendly websites.',
  heroHeading: "I'm a Web Developer",
  heroSupportingText: "I'm a B.Tech Computer Science Engineering student passionate about web development, modern UI design and building useful digital experiences.",
  rotatingTitles: [
    'Web Developer',
    'Frontend Developer',
    'CSE Student',
    'Aspiring Software Engineer'
  ],
  aboutBio: "Hi, I'm Amit Kumar, a B.Tech Computer Science Engineering student and aspiring Web Developer. I enjoy learning modern web technologies and creating responsive, clean and user-friendly websites. My goal is to become a skilled software engineer and build real-world digital products.",
  // Primary photograph provided by user
  photoUrl: '/assets/aistudio/file_0000000094cc8230b1f0142616e32268_74b213cd.png',
};

export const socialLinks: SocialLink[] = [
  {
    id: 'facebook',
    platform: 'Facebook',
    url: 'https://www.facebook.com/amitkashyap703/',
    username: 'amitkashyap703',
    ariaLabel: 'Visit Amit Kumar on Facebook',
  },
  {
    id: 'x',
    platform: 'X (Twitter)',
    url: 'https://x.com/amit11ak',
    username: '@amit11ak',
    ariaLabel: 'Follow Amit Kumar on X',
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    url: 'https://www.instagram.com/amitkashyap.__',
    username: '@amitkashyap.__',
    ariaLabel: 'Follow Amit Kumar on Instagram',
  },
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kumaramittt/',
    username: 'kumaramittt',
    ariaLabel: 'Connect with Amit Kumar on LinkedIn',
  },
];

export const skills: Skill[] = [
  { name: 'HTML', percentage: 85, category: 'web', description: 'Semantic markup, accessibility, SEO best practices' },
  { name: 'CSS', percentage: 80, category: 'web', description: 'Flexbox, CSS Grid, Tailwind CSS, animations' },
  { name: 'JavaScript', percentage: 70, category: 'web', description: 'ES6+, asynchronous programming, DOM manipulation' },
  { name: 'React', percentage: 65, category: 'frontend', description: 'Components, hooks, state management, SPA routing' },
  { name: 'Python', percentage: 65, category: 'programming', description: 'Core Python, data structures, algorithms, problem solving' },
  { name: 'Git & GitHub', percentage: 70, category: 'tools', description: 'Version control, branch management, collaboration' },
  { name: 'Responsive Web Design', percentage: 85, category: 'design', description: 'Mobile-first workflows, media queries, cross-device testing' },
  { name: 'UI/UX Basics', percentage: 75, category: 'design', description: 'Visual hierarchy, user flow, wireframing, color harmony' },
];

export const services: Service[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Web Development',
    description: 'Building responsive and modern websites using current web technologies and standard conventions.',
    iconName: 'Code',
    features: ['Modern tech stack', 'Clean & maintainable code', 'Fast loading speed', 'Search engine optimization'],
  },
  {
    id: 'frontend-dev',
    number: '02',
    title: 'Frontend Development',
    description: 'Creating clean, interactive and responsive user interfaces with smooth user experience.',
    iconName: 'Layout',
    features: ['React & Component architecture', 'State management', 'Interactive UI elements', 'Cross-browser testing'],
  },
  {
    id: 'responsive-design',
    number: '03',
    title: 'Responsive Design',
    description: 'Designing websites that work smoothly across desktop, tablet, and mobile smartphone devices.',
    iconName: 'Smartphone',
    features: ['Mobile-first philosophy', 'Fluid layouts & typography', 'Touch gesture compatibility', 'Retina screen optimization'],
  },
  {
    id: 'portfolio-sites',
    number: '04',
    title: 'Portfolio Websites',
    description: 'Creating professional portfolio websites for students, developers, and professionals to stand out.',
    iconName: 'Briefcase',
    features: ['Personal branding focus', 'Project showcase galleries', 'Interactive contact forms', 'Fast deployment ready'],
  },
];

export const projects: Project[] = [
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    category: 'frontend',
    shortDescription: 'High-contrast, sleek personal portfolio inspired by modern developer aesthetic.',
    longDescription: 'A clean, high-performance developer portfolio featuring dark theme styling, smooth animations, interactive project showcases, and a responsive layout designed for mobile and desktop.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/assets/aistudio/Free_Personal_Portfolio_Template_-_Free_PSD_Template_-_Freebies_-_Fribly_c4657866.jfif',
    demoUrl: '#home',
    githubUrl: 'https://github.com/kumaramittt',
    features: [
      'Monochrome hero presentation with smooth gradient blending',
      'Interactive skill progress meters and filterable project grid',
      'Responsive hamburger drawer for mobile viewports',
      'Client-side contact form with input validation'
    ],
  },
  {
    id: 'food-delivery',
    title: 'Food Delivery Website',
    category: 'web-apps',
    shortDescription: 'Interactive food ordering platform with restaurant menu browsing and cart management.',
    longDescription: 'A modern food delivery web application allowing users to browse dish categories, search local restaurants, customize orders, and manage checkout cart items with real-time price calculation.',
    technologies: ['React', 'JavaScript', 'CSS', 'Tailwind'],
    image: '',
    demoUrl: 'https://github.com/kumaramittt/food-delivery-app',
    githubUrl: 'https://github.com/kumaramittt/food-delivery-app',
    features: [
      'Dynamic menu filtering by cuisine and price range',
      'Persistent cart state with quantity adjustments',
      'Interactive modal for dish customization',
      'Responsive order summary view'
    ],
  },
  {
    id: 'ecommerce-website',
    title: 'E-Commerce Website',
    category: 'fullstack',
    shortDescription: 'Modern electronic storefront featuring product catalogs, ratings, and wishlist.',
    longDescription: 'A feature-rich e-commerce store interface featuring responsive product cards, image zoom previews, filtering by price and rating, cart drawer, and order checkout flows.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    image: '',
    demoUrl: 'https://github.com/kumaramittt/ecommerce-platform',
    githubUrl: 'https://github.com/kumaramittt/ecommerce-platform',
    features: [
      'Product grid with instant keyword search',
      'Filter by category, price, and customer rating',
      'Slide-over shopping cart with checkout flow',
      'Mobile-optimized touch navigation'
    ],
  },
  {
    id: 'ai-chatbot-interface',
    title: 'AI Chatbot Interface',
    category: 'web-apps',
    shortDescription: 'Clean conversational assistant interface with markdown rendering and streaming UI.',
    longDescription: 'A sleek conversational web UI featuring message threads, code syntax highlighting, copyable snippet blocks, response rating, and responsive chat input with attachment preview.',
    technologies: ['React', 'JavaScript', 'AI API', 'Tailwind CSS'],
    image: '',
    demoUrl: 'https://github.com/kumaramittt/ai-chatbot-ui',
    githubUrl: 'https://github.com/kumaramittt/ai-chatbot-ui',
    features: [
      'Real-time conversation bubble stream',
      'Code block syntax highlighting with 1-click copy',
      'Suggested prompts and topic starters',
      'Session history drawer for desktop & mobile'
    ],
  },
];
