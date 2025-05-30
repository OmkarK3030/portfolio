// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import morningstarLogo from './assets/company_logo/morningstar.png'

// Education Section Logo's
import bvLogo from './assets/education_logo/bv.jpeg'
import ngLogo from './assets/education_logo/ng.jpeg';
import sdaLogo from './assets/education_logo/sda.jpeg';

// Project Section Logo's
import blinkitLogo from './assets/work_logo/blinkit.jpg';
import groupOrderingLogo from './assets/work_logo/proj2.webp';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: morningstarLogo, // Replace with actual logo reference
      role: "MDP Associate",
      company: "Morningstar",
      date: "June 2025 - Present",
      desc: "Working in Morningstar’s Data Operations under the MDP program, contributing to accurate and timely financial and non-financial data collection. Supporting global investment research by maintaining data quality and collaborating across teams to enhance operational efficiency.",
      skills: [
        "Data Analysis",
        "Financial Research",
        "MS Excel",
        "Content Interpretation",
        "ESG Research",
        "Quality Auditing",
        "Agile Methodology",
        "Critical Thinking",
        "Communication",
        "Problem Solving"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: bvLogo,
      school: "Bharti VidyaPeeth, Kharghar",
      date: "Sept 2016 - July 2020",
      grade: "7.81 CGPA",
      desc: "I have completed my Bachelor's degree in Electronics and Telecommunication Engineering from Bharati Vidyapeeth College of Engineering, Kharghar. During my time at Bharati Vidyapeeth, I built a solid foundation in electronics, communication systems, digital signal processing, and embedded systems. My coursework included subjects such as Analog and Digital Electronics, Microprocessors, Communication Networks, Control Systems, and VLSI Design. I also actively participated in technical workshops, seminars, and project exhibitions, which allowed me to enhance both my theoretical knowledge and practical skills. This experience has played a vital role in shaping my engineering mindset and problem-solving approach.",
      degree: "Bachelor of Engineering",
    },
    {
      id: 1,
      img: ngLogo,
      school: "Acharya College, Mumbai",
      date: "Sept 2014 - Aug 2016",
      grade: "73.2%",
      desc: "I completed my class 10 education from SDA English High School, Sanpad, under the HSC board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "Higher Secondary Education",
    },
    {
      id: 2,
      img: sdaLogo,
      school: "SDA English High School, Sanpada",
      date: "Apr 2013 - March 2014",
      grade: "78%",
      desc: "I completed my class 10 education from SDA English High School, Sanpad, under the ICSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "ICSE",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Blinkit Product Growth and Analytics",
      description:
        "A strategic product research and analytics case study focused on improving Blinkit's customer retention and average order value (AOV). The project analyzes user personas, pain points, and competitive benchmarks, and proposes feature enhancements like personalized recommendations, wishlist functionality, real-time tracking, and a loyalty program to drive user engagement and sustainable growth.",
      image: blinkitLogo, // Replace with actual image reference
      tags: [
        "Product Strategy",
        "User Research",
        "Market Analysis",
        "UX Design",
        "Business Analytics",
        "Growth Metrics",
        "Quick Commerce"
      ],
      github: "https://github.com/OmkarK3030/blinkit",
      webapp: "https://drive.google.com/file/d/1qQ8ZoklrT-bHo1BLptMmJb_KWzwVtFC3/view?usp=sharing",
    },
    {
      id: 2,
      title: "Community Group Ordering – Quick Commerce",
      description:
        "A strategic product feature proposal aimed at increasing Average Order Value (AOV) and delivery efficiency for quick commerce platforms. This PRD introduces a Community Group Ordering system where users in shared locations can combine orders, split delivery fees, and engage via cart-sharing. It outlines detailed personas, use cases, feature scope, technical architecture, and success metrics to guide implementation and pilot rollout.",
      image: groupOrderingLogo, // Replace with the actual image or logo
      tags: [
        "Product Management",
        "PRD",
        "User Personas",
        "Quick Commerce",
        "Delivery Optimization",
        "UX Design",
        "Growth Strategy"
      ],
      github: "https://github.com/OmkarK3030/quick-commerce-feature", // Add GitHub repo if available
      webapp: "https://drive.google.com/file/d/1U3QNTzZSWFzQyZD4CfPGGtgQUo98eL2J/view?usp=sharing", // Add link to hosted PRD or case study if available
    }
    
  ];