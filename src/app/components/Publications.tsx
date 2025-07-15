'use client';

import { motion } from 'framer-motion';
import BlurText from '@/TextAnimations/BlurText/BlurText';

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi: string;
  description: string;
  gradient: string;
  borderColor: string;
  url: string;
}

const publications: Publication[] = [
  {
    title: "Hurricane Power Outage Prediction Using Spatio-Temporal Graph Neural Networks",
    authors: "Abhinav Kotta, et al.",
    journal: "IEEE Photovoltaic Specialists Conference (PVSC)",
    year: "2024",
    doi: "10.1109/PVSC48320.2024.000000",
    description: "Developed a novel spatio-temporal GNN model to predict power outages during hurricanes at 500m resolution using satellite imagery and weather data.",
    gradient: "linear-gradient(145deg,#10B981,#1a1a3d)",
    borderColor: "#10B981",
    url: "https://ieeexplore.ieee.org/document/10749545"
  }
];

const Publications = () => {
  const handlePublicationClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="publications" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <BlurText
            text="Publications"
            className="cool-title text-4xl md:text-5xl font-bold justify-center"
            animateBy="words"
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative mb-8"
            >
              <div
                className="relative p-8 rounded-2xl border-2 border-transparent transition-all duration-300 cursor-pointer hover:scale-105 overflow-hidden"
                style={{
                  background: publication.gradient,
                  borderColor: publication.borderColor,
                }}
                onClick={() => handlePublicationClick(publication.url)}
              >
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-xl md:text-2xl mb-3 leading-tight">
                        {publication.title}
                      </h3>
                      <p className="text-gray-200 text-base mb-2">
                        {publication.authors}
                      </p>
                      <p className="text-gray-300 text-sm mb-4">
                        {publication.journal} • {publication.year}
                      </p>
                      <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                        {publication.description}
                      </p>
                    </div>
                    <div className="text-3xl ml-6">📄</div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm font-mono">
                      DOI: {publication.doi}
                    </span>
                    <div className="flex items-center text-white text-base">
                      <span>Read Paper</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Additional Publications Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Publications; 