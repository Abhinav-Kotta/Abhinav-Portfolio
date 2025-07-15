'use client';

import ChromaGrid from '@/Components_Animation/ChromaGrid/ChromaGrid';
import type { ChromaItem } from '@/Components_Animation/ChromaGrid/ChromaGrid';
import BlurText from '@/TextAnimations/BlurText/BlurText';

const myProjects: ChromaItem[] = [
  {
    image: "/drift.png",
    title: "DRIFT",
    subtitle: "A full-stack VR application for drone racing.",
    handle: "React, Next.js, Stripe",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg,#4F46E5,#1a1a3d)",
    url: "https://github.com/Abhinav-Kotta/DRIFT",
  },
  {
    image: "/hurricane.png",
    title: "Hurricane Power Outage Predictor",
    subtitle: "Power outage prediction model",
    handle: "Python, GNN, U-Net",
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg,#10B981,#1a1a3d)",
    url: "https://ieeexplore.ieee.org/document/10749545",
  },
  {
    image: "/react-next.png",
    title: "This Portfolio Website",
    subtitle: "Built with Next.js, Framer Motion, and GSAP.",
    handle: "Next.js, Tailwind CSS",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg,#F59E0B,#1a1a3d)",
    url: "https://github.com/Abhinav-Kotta/Abhinav-Portfolio",
  },
    {
    image: "/tabla_playing.jpg",
    title: "Knights Khayal",
    subtitle: "Website created for a south asain musical group",
    handle: "React, Typescript, Vite",
    borderColor: "#EF4444",
    gradient: "linear-gradient(195deg,#EF4444,#1a1a3d)",
    url: "https://kkhayal.com/",
  },
    {
    image: "/BTGen.svg",
    title: "Behavior Tree Generator",
    subtitle: "Automated Behavior Tree creation for military simulations.",
    handle: "C++, Python, CodeLlama",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(135deg,#06B6D4,#1a1a3d)",
    url: "https://github.com/Abhinav-Kotta/Behavior-Tree-Generation",
    },
      {
    image: "/VIMA.mp4",
    title: "CLARITY",
    subtitle: "CLARITY is a lightweight VIMA add-on that defends against rephrasing attacks by aligning prompt representations for robust performance.",
    handle: "Python, VIMA, LLM",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg,#8B5CF6,#1a1a3d)",
    url: "https://github.com/SandysPappy/LASER",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <BlurText
            text="My Projects"
            className="cool-title text-4xl md:text-5xl font-bold justify-center"
            animateBy="words"
          />
        </div>
        <ChromaGrid items={myProjects} />
      </div>
    </section>
  );
};

export default Projects; 