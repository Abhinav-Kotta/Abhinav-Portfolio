'use client';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import BlurText from '@/TextAnimations/BlurText/BlurText';
import Image from 'next/image';
import { useState } from 'react';

// Custom SVG Icons (fallbacks)
const WorkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
  </svg>
);

const SchoolIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09v6h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
  </svg>
);

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

// Timeline data with logo support
const timelineData = [
  {
    type: 'work',
    date: 'May 2025 - Present',
    title: 'Supercomputing Intern',
    subtitle: 'Los Alamos National Laboratory',
    description: 'I built a 10-node InfiniBand-connected HPC cluster with automated node provisioning using PXE boot and cloud-init. To improve accessibility, I integrated Charliecloud with Open OnDemand, allowing researchers to run secure, GPU-accelerated workflows through a simple web interface.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    logo: '/logos/LANL.png',
    fallbackIcon: <WorkIcon />
  },
  {
    type: 'education',
    date: 'Sep 2024 - Dec 2024',
    title: 'AI Researcher',
    subtitle: 'Intelligent Agents Lab - UCF',
    description: 'In a research project with Lockheed Martin, I built a React-based tool to visualize behavior tree outputs and implemented a dual-LLM system using LoRA-tuned CodeLlama for generation and LlamaChat for interpretation. I also integrated a Pinecone vector database with military doctrine to enable RAG-based tactical tree generation.',
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    logo: '/logos/UCF.png',
    fallbackIcon: <SchoolIcon />
  },
  {
    type: 'work',
    date: 'May 2024 - Aug 2024',
    title: 'Software Engeering Intern',
    subtitle: 'L3Harris',
    description: 'At my internship, I optimized the LiteLLM proxy with TGI and containerized AWQ models on Docker and vLLM, improving accuracy by 40%. I led front-end development of a RAG-based assistant used by 15,000+ employees, and conducted trade studies on 15+ models. I also performed attack vector analysis, mitigating over 15 cyber risks.',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    logo: '/logos/L3Harris.avif',
    fallbackIcon: <WorkIcon />
  },
  {
    type: 'education',
    date: 'Feb 2024 - Jun 2024',
    title: 'AI Researcher',
    subtitle: 'FLorida Solar Energy Center',
    description: 'I built a tool to predict hurricane-related power outages at 500m resolution using a spatio-temporal GNN with U-Net and GNN layers. I analyzed 3,000+ NASA satellite images to boost model performance, resulting in a paper accepted at IEEE PVSC 2024.',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
    logo: '/logos/FSEC.jpeg',
    fallbackIcon: <SchoolIcon />
  }
];

// Logo Component for displaying next to titles
const CompanyLogo = ({ logo }: { logo?: string }) => {
  const [logoError, setLogoError] = useState(false);

  if (!logo || logoError) {
    return null;
  }

  return (
    <div className="flex-shrink-0 ml-3">
      <Image
        src={logo}
        alt="Company logo"
        width={40}
        height={40}
        className="object-contain rounded-lg"
        onError={() => {
          console.log(`Logo failed to load: ${logo}`);
          setLogoError(true);
        }}
        onLoad={() => {
          console.log(`Logo loaded successfully: ${logo}`);
        }}
      />
    </div>
  );
};

const WorkExperience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <BlurText
            text="Work Experience"
            className="cool-title text-4xl md:text-5xl font-bold justify-center mb-4"
            animateBy="words"
          />
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development and technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <VerticalTimeline>
            {timelineData.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className={`vertical-timeline-element--${item.type}`}
                contentStyle={{ 
                  background: item.gradient, 
                  color: '#fff',
                  boxShadow: `0 8px 32px ${item.gradient.includes('#667eea') ? 'rgba(102, 126, 234, 0.3)' : 
                    item.gradient.includes('#10B981') ? 'rgba(16, 185, 129, 0.3)' :
                    item.gradient.includes('#F59E0B') ? 'rgba(245, 158, 11, 0.3)' :
                    item.gradient.includes('#8B5CF6') ? 'rgba(139, 92, 246, 0.3)' :
                    'rgba(239, 68, 68, 0.3)'}`
                }}
                contentArrowStyle={{ 
                  borderRight: `7px solid ${item.gradient.includes('#667eea') ? '#667eea' : 
                    item.gradient.includes('#10B981') ? '#10B981' :
                    item.gradient.includes('#F59E0B') ? '#F59E0B' :
                    item.gradient.includes('#8B5CF6') ? '#8B5CF6' :
                    '#EF4444'}`
                }}
                date={item.date}
                iconStyle={{ 
                  background: item.gradient, 
                  color: '#fff',
                  boxShadow: `0 4px 16px ${item.gradient.includes('#667eea') ? 'rgba(102, 126, 234, 0.4)' : 
                    item.gradient.includes('#10B981') ? 'rgba(16, 185, 129, 0.4)' :
                    item.gradient.includes('#F59E0B') ? 'rgba(245, 158, 11, 0.4)' :
                    item.gradient.includes('#8B5CF6') ? 'rgba(139, 92, 246, 0.4)' :
                    'rgba(239, 68, 68, 0.4)'}`
                }}
                icon={item.fallbackIcon}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="vertical-timeline-element-title text-xl font-bold">
                    {item.title}
                  </h3>
                  <CompanyLogo logo={item.logo} />
                </div>
                <h4 className="vertical-timeline-element-subtitle text-lg mb-3 opacity-90">
                  {item.subtitle}
                </h4>
                <p className="text-sm leading-relaxed">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience; 