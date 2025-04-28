import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";


export const profile = {
  title: "Hi, I'm Vladyslav",
  subtitle: "Frontend Developer",
  description:
    "I'm a frontend developer passionate about building clean, scalable interfaces. I focus on creating solutions that deliver high performance and an intuitive, engaging user experience.",
};

export const projects = [
  {
    title: "Coffee Shop",
    image: project1,
    description:
      "A stylish and fully responsive coffee shop website developed with React and TailwindCSS. Designed to reflect a cozy café vibe, the site includes sections for services, store locations, promotions, and a dynamic product showcase. Framer Motion adds smooth, eye-catching animations that enhance the user journey. Carefully optimized for mobile and desktop, it ensures fast performance and a pleasant browsing experience.",
    technologies: ["React", "Vite", "Tailwind", "Framer Motion"],
    github_link: "https://github.com/VladyslavNz/coffee-shop",
    live_link: "https://coffee-shop-liard-rho.vercel.app/",
  },
  {
    title: "Currency Converter",
    image: project2,
    description:
      "A clean and functional currency converter web app created with React and TailwindCSS. Users can effortlessly convert between multiple currencies using real-time exchange rates, reverse selections with a single click, and interact with smooth transitions. The minimalist design and responsive layout make it easy to use on any device, with an emphasis on simplicity and speed.",
    technologies: ["React", "Vite", "Tailwind"],
    github_link: "https://github.com/VladyslavNz/Currency-Converter",
    live_link: "https://currency-converter-beige-theta.vercel.app/",
  },
  {
    title: "Weather App",
    image: project3,
    description:
      "An interactive and fully responsive weather application built with React and TailwindCSS. The app lets users search cities to view real-time weather data, daily conditions, and multi-day forecasts. Designed with mobile-first principles, it features touch-friendly horizontal scrolling and a sleek interface that adapts to all screen sizes. The focus was on delivering up-to-date information in a visually engaging way.",
    technologies: ["React", "Vite", "Tailwind"],
    github_link: "https://github.com/VladyslavNz/Weather-app",
    live_link: "https://weather-app-rouge-three-80.vercel.app/",
  },
  {
    title: "Calorie intake calculator with recipe creation",
    image: project4,
    description:
      "A feature-rich fitness and nutrition tracker web app built with React, TailwindCSS, and Express.js. Users can calculate daily calorie needs, track progress with visual weight charts, and generate personalized meal recipes using Deepseek AI. The application includes user authentication, dynamic dashboards, and form validation with Zod, all wrapped in a modern UI built with shadcn. The backend is powered by Prisma and fully optimized for performance and usability.",
    technologies: ["React", "Vite", "Tailwind", "shadcn/ui", "Express.Js", "Prisma", "Deepseek"],
    github_link: "https://github.com/vakulenko10/fitApp-frontend",
    live_link: "https://fit-app-frontend.vercel.app/",
  },
  {
    title: "Personal Portfolio",
    image: project5,
    description:
      "A sleek and responsive portfolio site designed to showcase my work, skills, and contact information. Built with React and TailwindCSS, it features smooth page transitions and element animations using Framer Motion. The layout is clean and professional, with sections for projects, a downloadable resume, and social links — all fully responsive and optimized for a polished viewing experience across all devices.",
    technologies: ["React", "Vite", "Tailwind", "Framer Motion"],
    github_link: "https://github.com/VladyslavNz/Portfolio",
    live_link: "https://portfolio-vladyslavnzs-projects.vercel.app/",
  },
  {
    title: "TableFlow",
    image: project6,
    description:
      "Restaurant reservation app with real-time table selection using TableFlow and WebSocketServer. Built on React, TailwindCSS, and Next.js for a fast, modern, and responsive booking experience.",
      technologies: ["React", "Next.js", "Tailwind", "Redux Toolkit", "WebSocketServer", "Express.js", "Prisma"],
      github_link: "https://github.com/vakulenko10/tableFlow",
      live_link: "https://table-flow.vercel.app/",
  }
];


export const contacts = {
  address: "Gdansk, Poland",
  phone: "+48 577 283 672",
  email: "vladnazarchuk406@gmail.com",
};
