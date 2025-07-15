import Hero from './components/Hero';
import TechnologyCarousel from './components/TechnologyCarousel';
import Projects from './components/Projects';
import Publications from './components/Publications';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechnologyCarousel />
      <Projects />
      <Publications />
      <WorkExperience />
      <Contact />
      {/* Other sections will be added here */}
    </main>
  );
}
