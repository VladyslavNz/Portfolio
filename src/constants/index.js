import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";


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
      "A responsive coffee shop website built with React, featuring a clean design and user-friendly navigation.",
    technologies: ["React", "Vite", "Tailwind", "Framer Motion"],
    github_link: "https://github.com/VladyslavNz/coffee-shop",
    live_link: "https://coffee-shop-liard-rho.vercel.app/",
  },
  {
    title: "Currency Converter",
    image: project2,
    description:
      "A currency converter app that allows users to convert between different currencies in real-time.",
    technologies: ["React", "Vite", "Tailwind"],
    github_link: "https://github.com/VladyslavNz/Currency-Converter",
    live_link: "https://currency-converter-beige-theta.vercel.app/",
  },
  {
    title: "Weather App",
    image: project3,
    description:
      "A weather app that provides real-time weather updates and forecasts for any location.",
    technologies: ["React", "Vite", "Tailwind"],
    github_link: "https://github.com/VladyslavNz/Weather-app",
    live_link: "https://weather-app-rouge-three-80.vercel.app/",
  },
];

export const contacts = {
  address: "Gdansk, Poland",
  phone: "+48 577 283 672",
  email: "vladnazarchuk406@gmail.com",
};
