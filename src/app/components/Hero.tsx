'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BlurText from '@/TextAnimations/BlurText/BlurText';
import AnimatedContent from '@/Animations/AnimatedContent/AnimatedContent';
import ProfileCard from '@/Components_Animation/ProfileCard/ProfileCard';

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log('Name animation completed!');
  };

  const handleContactClick = () => {
    // Scroll to contact section or handle contact action
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
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
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <h1 className="mb-4 md:mb-6">
                <BlurText
                  text="Hi, I'm Abhinav Kotta"
                  className="cool-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight justify-center lg:justify-start"
                  delay={50}
                  animateBy="letters"
                  direction="top"
                  onAnimationComplete={handleAnimationComplete}
                />
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-gray-700 dark:text-gray-300">
                Software Developer
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0">
                I build elegant solutions to complex problems. Specializing in full-stack development,
                I create performant and scalable applications that make a difference.
              </p>
              
              <AnimatedContent delay={0.2} duration={0.6}>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-8 md:mb-12 px-4 lg:px-0">
                  <Link
                    href="#projects"
                    className="px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base"
                  >
                    View My Work
                  </Link>
                  <Link
                    href="#contact"
                    className="px-6 sm:px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300 text-sm sm:text-base"
                  >
                    Contact Me
                  </Link>
                </div>
              </AnimatedContent>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400 px-4 lg:px-0">
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

            {/* Right Column - Profile Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <ProfileCard
                avatarUrl="/professional_headshot-removebg-preview.png"
                name="Abhinav Kotta"
                title="Software Developer"
                handle="abhinavkotta"
                status="Available for work"
                contactText="Get in touch"
                showUserInfo={true}
                onContactClick={handleContactClick}
                enableTilt={true}
                showBehindGradient={true}
                className="w-full max-w-xs sm:max-w-sm"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 