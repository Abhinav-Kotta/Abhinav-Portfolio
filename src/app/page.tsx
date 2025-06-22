import Hero from './components/Hero';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      {/* Other sections will be added here */}
    </main>
  );
}
