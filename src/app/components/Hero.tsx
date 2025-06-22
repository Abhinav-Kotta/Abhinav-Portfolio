'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BlurText from '@/TextAnimations/BlurText/BlurText';
import AnimatedContent from '@/Animations/AnimatedContent/AnimatedContent';
import Image from 'next/image';

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log('Name animation completed!');
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <h1 className="mb-6">
                <BlurText
                  text="Hi, I'm Abhinav Kotta"
                  className="cool-title text-3xl md:text-5xl font-black tracking-tight leading-tight justify-center lg:justify-start"
                  delay={50}
                  animateBy="letters"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                />
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-700 dark:text-gray-300">
                Software Developer
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0">
                I build elegant solutions to complex problems. Specializing in full-stack development,
                I create performant and scalable applications that make a difference.
              </p>
              
              <AnimatedContent delay={0.2} duration={0.6}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                  <Link
                    href="#projects"
                    className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    View My Work
                  </Link>
                  <Link
                    href="#contact"
                    className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300"
                  >
                    Contact Me
                  </Link>
                </div>
              </AnimatedContent>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  React
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  TypeScript
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Node.js
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Python
                </span>
              </div>
            </motion.div>

            {/* Right Column - Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-80 h-80 shadow-2xl rounded-full">
                {/* Decorative spinning ring as background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-spin-slow"></div>

                {/* Container for the image, with padding to create the border effect */}
                <div className="absolute inset-1 bg-gray-900 rounded-full overflow-hidden">
                  <Image
                    src="/professional_headshot.jpeg"
                    alt="Abhinav Kotta"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 