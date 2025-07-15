'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import BlurText from '@/TextAnimations/BlurText/BlurText';

interface Technology {
  name: string;
  icon: string;
  logo?: string; // Add optional logo path
  color: string;
  category: string;
}

const technologies: Technology[] = [
  // Programming Languages
  { name: 'Python', icon: '🐍', logo: '/logos/python.png', color: '#3776AB', category: 'Programming Languages' },
  { name: 'SQL', icon: '🗄️', logo: '/logos/sql.png', color: '#336791', category: 'Programming Languages' },
  { name: 'Java', icon: '☕', logo: '/logos/java.png', color: '#ED8B00', category: 'Programming Languages' },
  { name: 'C', icon: '🔵', logo: '/logos/c.png', color: '#A8B9CC', category: 'Programming Languages' },
  { name: 'C++', icon: '🔷', logo: '/logos/c++.png', color: '#00599C', category: 'Programming Languages' },
  { name: 'C#', icon: '💜', logo: '/logos/c-sharp.png', color: '#68217A', category: 'Programming Languages' },
  { name: 'JavaScript', icon: '🟨', logo: '/logos/js.png', color: '#F7DF1E', category: 'Programming Languages' },
  { name: 'TypeScript', icon: '📘', logo: '/logos/typescript.png', color: '#3178C6', category: 'Programming Languages' },
  { name: 'Bash', icon: '🐚', logo: '/logos/window.png', color: '#4EAA25', category: 'Programming Languages' },
  
  // Frameworks & Libraries
  { name: 'TGI', icon: '🤖', logo: '/logos/hugging.png', color: '#FF6B6B', category: 'Frameworks' },
  { name: 'vLLM', icon: '⚡', logo: '/logos/vllm.png', color: '#00C7B7', category: 'Frameworks' },
  { name: 'Slurm', icon: '🖥️', logo: '/logos/slurm.png', color: '#FF9900', category: 'Frameworks' },
  { name: 'Infiniband', icon: '🔗', logo: '/logos/infiniband.png', color: '#FFD700', category: 'Frameworks' },
  { name: 'PyTorch', icon: '🔥', logo: '/logos/pytorch.png', color: '#EE4C2C', category: 'Frameworks' },
  { name: 'Docker', icon: '🐳', logo: '/logos/docker.png', color: '#2496ED', category: 'Frameworks' },
  { name: 'AWS', icon: '☁️', logo: '/logos/aws.png', color: '#FF9900', category: 'Frameworks' },
  { name: 'Git', icon: '📝', logo: '/logos/git.png', color: '#F05032', category: 'Frameworks' },
  { name: 'Flask', icon: '🍶', logo: '/logos/flask.png', color: '#000000', category: 'Frameworks' },
  { name: 'React', icon: '⚛️', logo: '/logos/react.png', color: '#61DAFB', category: 'Frameworks' },
];

const TechnologyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [showCollapseButton, setShowCollapseButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const categories = ['All', 'Programming Languages', 'Frameworks'];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTechnologies = !selectedCategory || selectedCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 md:mb-8"
          >
            <BlurText
              text="Technologies I Work With"
              className="cool-title text-3xl sm:text-4xl md:text-5xl font-bold justify-center mb-4"
              animateBy="words"
            />
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
              A comprehensive stack of modern technologies I use to build robust and scalable applications
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-6 px-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowGrid(true);
                  setShowCollapseButton(true);
                }}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
            {showCollapseButton && (
              <button
                onClick={() => {
                  setShowGrid(false);
                  setSelectedCategory(null);
                  setShowCollapseButton(false);
                }}
                className="px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 bg-red-500 text-white hover:bg-red-600 shadow-lg"
              >
                Collapse
              </button>
            )}
          </motion.div>

          {/* Technology Grid - Collapsible */}
          {showGrid && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto mb-8 md:mb-12 px-4"
            >
              {filteredTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <div className="text-center">
                      <div 
                        className="text-2xl sm:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300 flex justify-center items-center"
                        style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }}
                      >
                        {tech.logo ? (
                          <img src={tech.logo} alt={tech.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                        ) : (
                          tech.icon
                        )}
                      </div>
                      <h3 className="font-semibold text-gray-800 dark:text-white text-xs sm:text-sm">
                        {tech.name}
                      </h3>
                      <div 
                        className="w-4 sm:w-6 h-1 mx-auto mt-2 rounded-full"
                        style={{ backgroundColor: tech.color }}
                      ></div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Featured Technology Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 md:mt-12 px-4"
          >
            <div className="relative overflow-hidden">
              <div className="flex space-x-4 sm:space-x-8 animate-scroll">
                {[...technologies, ...technologies].map((tech, index) => (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0 bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 shadow-md border border-gray-200 dark:border-gray-700 min-w-[160px] sm:min-w-[200px]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="text-xl sm:text-2xl flex-shrink-0">
                        {tech.logo ? (
                          <img src={tech.logo} alt={tech.name} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
                        ) : (
                          tech.icon
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base">{tech.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{tech.category}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TechnologyCarousel; 