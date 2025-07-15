'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 Abhinav Kotta. All rights reserved.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Icons: <a 
                href="https://www.flaticon.com/free-icons/coding" 
                title="coding icons"
                className="text-blue-500 hover:text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Freepik - Flaticon
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 