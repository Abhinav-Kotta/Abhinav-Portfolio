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
    handle: "D3.js, React, Node.js",
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg,#10B981,#1a1a3d)",
    url: "https://github.com/aaparcedo/multimodal_outage",
  },
  {
    image: "https://picsum.photos/seed/project3/600/400",
    title: "This Portfolio Website",
    subtitle: "Built with Next.js, Framer Motion, and GSAP.",
    handle: "Next.js, Tailwind CSS",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg,#F59E0B,#1a1a3d)",
    url: "#",
  },
    {
    image: "https://picsum.photos/seed/project4/600/400",
    title: "Mobile Task Manager",
    subtitle: "A cross-platform app for managing daily tasks.",
    handle: "React Native, Firebase",
    borderColor: "#EF4444",
    gradient: "linear-gradient(195deg,#EF4444,#1a1a3d)",
    url: "https://github.com/",
  },
    {
    image: "https://picsum.photos/seed/project5/600/400",
    title: "Cloud File Storage",
    subtitle: "A secure file storage service using AWS S3.",
    handle: "AWS, Node.js, Express",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(135deg,#06B6D4,#1a1a3d)",
    url: "https://aws.amazon.com/",
    },
      {
    image: "https://picsum.photos/seed/project6/600/400",
    title: "AI Chatbot",
    subtitle: "An intelligent chatbot using OpenAI's API.",
    handle: "Python, Flask, OpenAI",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg,#8B5CF6,#1a1a3d)",
    url: "https://github.com/",
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