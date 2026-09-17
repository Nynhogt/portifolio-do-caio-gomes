import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowUpRight } from '@phosphor-icons/react';
import { heroIntro, heroScrollOut } from '../../animations';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    if (!root.current) return;
    heroIntro(root.current);
    heroScrollOut(root.current);
  }, { scope: root });

  return (
    <section ref={root} id="top" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 100 }}>
      <div className="wrap" style={{ width: '100%' }}>
        <p className="kicker hero-fade">Portfólio 2026 — Full Stack + IA</p>
        <h1 className="h-display hero-title" style={{ fontSize: 'clamp(48px,9vw,132px)', margin: '24px 0' }}>
          <span className="mask-line"><span className="mask-inner">Desenvolvedor</span></span>
          <span className="mask-line"><span className="mask-inner">Full Stack</span></span>
          <span className="mask-line"><span className="mask-inner" style={{ color: 'transparent', WebkitTextStroke: '1.5px var(--text)' }}>+ Inteligência</span></span>
          <span className="mask-line"><span className="mask-inner" style={{ color: 'var(--accent)' }}>Artificial</span></span>
        </h1>
        <p className="hero-fade" style={{ maxWidth: 560, fontSize: 18, color: 'var(--muted)' }}>
          “Transformo problemas reais em soluções usando tecnologia.”
        </p>
        <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
          <a href="#projetos" className="btn btn-solid hero-cta">Ver projetos <ArrowUpRight size={18} /></a>
          <a href="#sobre" className="btn btn-ghost hero-cta">Sobre mim</a>
        </div>
        <div className="hero-fade" style={{ marginTop: 70, display: 'flex', alignItems: 'center', gap: 10, color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '.25em' }}>
          <ArrowDown size={16} /> SCROLL
        </div>
      </div>
    </section>
  );
}
