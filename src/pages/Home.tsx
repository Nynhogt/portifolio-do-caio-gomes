import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Stack3D from '../components/Stack3D/Stack3D';
import Projects from '../components/Projects/Projects';
import AILab from '../components/AILab/AILab';
import Journey from '../components/Journey/Journey';
import Contact from '../components/Contact/Contact';
import { useEffect } from 'react';
import { batchReveal } from '../animations';
import { useLenis } from '../hooks/hooks';

export default function Home() {
  useLenis();
  useEffect(() => { const t = setTimeout(batchReveal, 300); return () => clearTimeout(t); }, []);
  return (
    <>
      <div className="grid-bg" /><div className="noise" /><div className="topo-lines" />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <AILab />
        <Stack3D />
        <Journey />
        <Contact />
      </main>
    </>
  );
}
