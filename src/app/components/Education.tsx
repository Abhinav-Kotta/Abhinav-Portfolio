'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface EducationItem {
  timespan: string;
  logo: string;
  degree: string;
  university: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    timespan: "2025 - 2026",
    logo: "/seals/cornell.png",
    degree: "Master of Engineering",
    university: "Cornell Tech",
    description: "Computer Science"
  },
  {
    timespan: "2021 - 2025",
    logo: "/seals/ucf.png",
    degree: "Bachelor of Science",
    university: "University of Central Florida",
    description: "Computer Science"
  }
];

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-8 md:mt-12"
    >
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
        {educationData.map((item, index) => (
          <motion.div
            key={item.university}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            className="flex items-center space-x-3 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-gray-200 dark:border-gray-700 hover:bg-white/20 dark:hover:bg-gray-800/30 transition-all duration-300"
          >
            {/* University Logo */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 relative">
                <Image
                  src={item.logo}
                  alt={`${item.university} logo`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Degree Information */}
            <div className="flex-1 min-w-0">
              <div className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">
                {item.timespan}
              </div>
              <div className="text-sm md:text-base font-bold text-gray-800 dark:text-gray-200">
                {item.degree}
              </div>
              <div className="text-xs md:text-sm text-blue-600 dark:text-blue-400 font-medium">
                {item.university}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {item.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education; 