import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center items-center text-base text-gray-700 dark:text-gray-300">
          <Link href="#projects" className="px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <span className="h-5 w-px bg-gray-300 dark:bg-gray-700 mx-2"></span>
          <Link href="#experience" className="px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Work Experience
          </Link>
          <span className="h-5 w-px bg-gray-300 dark:bg-gray-700 mx-2"></span>
          <Link href="#contact" className="px-4 py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 