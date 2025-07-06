import Hero from './components/Hero';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <WorkExperience />
      <Contact />
      {/* Other sections will be added here */}
    </main>
  );
}
