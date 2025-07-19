'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface EducationItem {
  timespan: string;
  logo: string;
  degree: string;
  university: string;
  description: string;
  startYear: number;
  endYear: number;
}

const educationData: EducationItem[] = [
  {
    timespan: "2025 - 2026",
    logo: "/seals/cornell.png",
    degree: "Master of Engineering",
    university: "Cornell Tech",
    description: "Computer Science",
    startYear: 2025,
    endYear: 2026
  },
  {
    timespan: "2021 - 2025",
    logo: "/seals/ucf.png",
    degree: "Bachelor of Science",
    university: "University of Central Florida",
    description: "Computer Science",
    startYear: 2021,
    endYear: 2025
  }
];

const Education = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [animatedProgress, setAnimatedProgress] = useState<{ [key: string]: number }>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentYear(now.getFullYear());
      setCurrentMonth(now.getMonth() + 1);
    }, 1000 * 60 * 60 * 24); // Update daily

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
      educationData.forEach((item, index) => {
        const progress = calculateProgress(item.startYear, item.endYear);
        setTimeout(() => {
          setAnimatedProgress(prev => ({
            ...prev,
            [item.university]: progress
          }));
        }, index * 200); // Stagger the animations
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [currentYear, currentMonth]);

  const calculateProgress = (startYear: number, endYear: number) => {
    const now = new Date();
    const currentMonth = now.getMonth() + 1; // 1-12
    const currentDay = now.getDate();
    const currentYear = now.getFullYear();
    
    // Check if we're in the current academic year
    const isInCurrentAcademicYear = (year: number) => {
      // Academic year runs from Aug 25 of year to May 24 of next year
      if (currentYear === year) {
        // In the start year - check if we're past Aug 25
        return currentMonth > 8 || (currentMonth === 8 && currentDay >= 25);
      } else if (currentYear === year + 1) {
        // In the end year - check if we're before May 24
        return currentMonth < 5 || (currentMonth === 5 && currentDay <= 24);
      }
      return false;
    };
    
    // If we haven't reached the start date yet, return 0
    if (currentYear < startYear || (currentYear === startYear && (currentMonth < 8 || (currentMonth === 8 && currentDay < 25)))) {
      return 0;
    }
    
    // If we've passed the end date, return 100
    if (currentYear > endYear || (currentYear === endYear && (currentMonth > 5 || (currentMonth === 5 && currentDay > 24)))) {
      return 100;
    }
    
    // Calculate progress within the academic year
    const academicYearStart = new Date(startYear, 7, 25); // August 25th
    const academicYearEnd = new Date(endYear, 4, 24); // May 24th
    const currentDate = new Date(currentYear, currentMonth - 1, currentDay);
    
    const totalDuration = academicYearEnd.getTime() - academicYearStart.getTime();
    const elapsed = currentDate.getTime() - academicYearStart.getTime();
    
    const progress = (elapsed / totalDuration) * 100;
    
    return Math.max(0, Math.min(100, progress));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mt-6 md:mt-8"
    >
      <div className="flex items-center justify-center lg:justify-start gap-8">
        {educationData.map((item, index) => {
          const progress = calculateProgress(item.startYear, item.endYear);
          const animatedValue = animatedProgress[item.university] || 0;
          
          return (
            <motion.div
              key={item.university}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="group relative flex items-center"
            >
              {/* Progress Bar with Logo */}
              <div className="relative w-20 h-20 mr-4">
                {/* Progress Bar - Border Outline */}
                <motion.div 
                  className="absolute inset-0 border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                >
                  {/* Progress fill */}
                  <motion.div 
                    className="h-full bg-blue-600 dark:bg-blue-400"
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedValue}%` }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 1 + index * 0.2,
                      ease: "easeOut"
                    }}
                  />
                </motion.div>
                
                {/* University Logo in center */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center p-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                >
                  <div className="w-16 h-16 relative bg-white dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <Image
                      src={item.logo}
                      alt={`${item.university} logo`}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  </div>
                </motion.div>
                
                {/* Animated Progress percentage */}
                <motion.div 
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-blue-600 dark:text-blue-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
                >
                  {Math.round(animatedValue)}%
                </motion.div>
              </div>
              
              {/* Degree Info */}
              <motion.div 
                className="text-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
              >
                <div className="font-semibold text-gray-800 dark:text-gray-200">
                  {item.degree}
                </div>
                <div className="text-xs text-blue-600 dark:text-blue-400">
                  {item.university}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {item.timespan}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500">
                  {animatedValue < 100 ? 'In Progress' : 'Completed'}
                </div>
              </motion.div>
              
              {/* Hover Tooltip */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap">
                  <div className="font-semibold">{item.degree}</div>
                  <div className="text-gray-300">{item.university}</div>
                  <div className="text-gray-400">{item.description}</div>
                  <div className="text-blue-300">{item.timespan}</div>
                  <div className="text-gray-400">Progress: {Math.round(animatedValue)}%</div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900"></div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Education; 