import { BrainCircuit, Cube, SiCsharp, SiFastapi, SiMongodb, SiMysql, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiTailwindcss, SiTypescript } from "../components/IconCompetence";

// Données extraites de votre CV pour peupler le site
export const portfolioData = {
  name: "Atchè Marc Ahebié",
  title: "Développeur FullStack & Mobile",
  email: "ahebiemarc22@gmail.com",
  phone: "+216 58 164 490",
  location: "Monastir, Tunisie",
  cvUrl: "./public/cv/CV_MarC.pdf", // Assurez-vous que ce fichier est dans le dossier public
  socials: {
    linkedin: "https://www.linkedin.com/in/atche-marc-ahebie-97b16a1a5", // À remplacer
    github: "https://github.com/Ahebiemarc",
  },
  about: "Diplômé en Génie Logiciel avec mention, passionné par le développement de solutions technologiques innovantes. Fort d'une expérience diversifiée, j'ai réalisé plusieurs projets d'applications web, mobiles et d'API, ainsi que des systèmes d'intelligence artificielle. Motivé et rigoureux, je cherche à mettre mes compétences au service de projets ambitieux.",
  projects: [
    {
      title: "Application Mobile de Vote Présidentiel",
      description: "Conception et réalisation d'une application mobile sécurisée intégrant blockchain et IA pour garantir l'intégrité du processus électoral.",
      videoUrl: "/videos/vote_app.mp4",
      imageUrl: "images/vote_app/VotingA.png",  
      tags: ["React Native", "Blockchain", "IA", "UML", "Smart Contracts", "Node.js"],
      screenshots: [
        "images/vote_app/1.png",
        "images/vote_app/2.png",
        "images/vote_app/3.png",
        "images/vote_app/4.png",
        "images/vote_app/5.png",
        "images/vote_app/6.png",
        "images/vote_app/7.png",
        "images/vote_app/8.png",
        "images/vote_app/9.png",
        "images/vote_app/10.png",
        "images/vote_app/11.png",
        "images/vote_app/12.png",
        "images/vote_app/13.png",
        "images/vote_app/14.png",
      ],
      githubUrl: "https://github.com/Ahebiemarc/monpresident_app"
    },
    {
      title: "Application Mobile de Location Immobilière",
      description: "Développement d'une application React Native pour aider les étudiants à trouver des logements à louer en fonction de leur localisation.",
      videoUrl: "https://placehold.co/1920x1080/333/fff.mp4?text=Vidéo+Projet+2",
      imageUrl: "https://img.freepik.com/vecteurs-libre/recherche-immobiliere-telephone-mobile_23-2148656898.jpg?semt=ais_hybrid&w=740&q=80",
      tags: ["React Native", "Géolocalisation", "Web Sockets", "Node.js", "MongoDB", "Prisma"],
      screenshots: [
        "images/shaus/1.png",
        "images/shaus/2.png",
        "images/shaus/3.png",
        "images/shaus/4.png",
        "images/shaus/5.png",
        "images/shaus/6.png",
        "images/shaus/7.png",
        "images/shaus/9.png",
        "images/shaus/10.png",
        "images/shaus/11.png",
        "images/shaus/12.png",
        "images/shaus/13.png",
      ],
      githubUrl: "https://github.com/Ahebiemarc/monpresident_app"

    },
    {
      title: "Plateforme Web de Gestion d'Événements",
      description: "Création d'une application web avec React permettant la publication d'événements et l'achat de billets en ligne.",
      videoUrl: "https://placehold.co/1920x1080/333/fff.mp4?text=Vidéo+Projet+3",
      imageUrl: "https://placehold.co/600x400/1a1a1a/ffffff?text=Events+Web+App",
      tags: ["React", "Gestion d'événements", "Paiement en ligne", "Node.js", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Système de Reconnaissance Faciale",
      description: "Développement d'une solution précise de détection et reconnaissance de visages avec Python, OpenCV et face_recognition.",
      videoUrl: "https://placehold.co/1920x1080/333/fff.mp4?text=Vidéo+Projet+4",
      imageUrl: "https://placehold.co/600x400/1a1a1a/ffffff?text=Facial+Recognition",
      tags: ["Python", "OpenCV", "IA", "Sécurité"],
    },
    {
      title: "Modèle Anti-Spoofing",
      description: "Création d'un système d'anti-spoofing avec Python et CUDA pour prévenir les fraudes biométriques et renforcer la sécurité.",
      videoUrl: "https://placehold.co/1920x1080/333/fff.mp4?text=Vidéo+Projet+5",
      imageUrl: "https://placehold.co/600x400/1a1a1a/ffffff?text=Anti-Spoofing",
      tags: ["Python", "Deep Learning", "CUDA", "GPU"],
    },
    {
      title: "Application Mobile Scan2Pay",
      description: "Développement d'une application de paiement par QR code avec React Native, .NET Core et PostgreSQL.",
      videoUrl: "https://placehold.co/1920x1080/333/fff.mp4?text=Vidéo+Projet+6",
      imageUrl: "https://placehold.co/600x400/1a1a1a/ffffff?text=Scan2Pay",
      tags: ["React Native", ".NET Core", "PostgreSQL", "Paiement", "QR Code", "API REST", "Postman","Docker"],
      screenshots: [
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1331&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop",
      ],
      githubUrl: "https://github.com"
    },
  ],
  skills: [
    { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" /> },
    { name: "React / React Native", icon: <SiReact className="w-8 h-8" /> },
    { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8" /> },
    { name: "Python", icon: <SiPython className="w-8 h-8" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8" /> },
    { name: "MySQL", icon: <SiMysql className="w-8 h-8" /> },
    { name: "C# / .NET", icon: <SiCsharp className="w-8 h-8" /> },
    { name: "FastAPI", icon: <SiFastapi className="w-8 h-8" /> },
    { name: "IA / Deep Learning", icon: <BrainCircuit className="w-8 h-8" /> },
    { name: "Blockchain", icon: <Cube className="w-8 h-8" /> },
  ],
};