import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function heroIntro(scope: HTMLElement) {
  const q = gsap.utils.selector(scope);
  const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.1 } });
  tl.fromTo(q('.mask-inner'), { yPercent: 120 }, { yPercent: 0, stagger: 0.12 })
    .fromTo(q('.hero-fade'), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, stagger: 0.1 }, '-=0.6')
    .fromTo(q('.hero-cta'), { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, stagger: 0.08 }, '-=0.5');
  return tl;
}

export function heroScrollOut(scope: HTMLElement) {
  const q = gsap.utils.selector(scope);
  gsap.to(q('.hero-title'), {
    yPercent: -18, autoAlpha: 0.15, scale: 0.96, ease: 'none',
    scrollTrigger: { trigger: scope, start: 'top top', end: 'bottom top', scrub: 1 },
  });
}

export function batchReveal() {
  gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 40 }, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
    });
  });
}

export function magnetic(el: HTMLElement) {
  const move = (e: MouseEvent) => {
    const r = el.getBoundingClientRect();
    gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.25, duration: 0.4 });
  };
  const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,0.4)' });
  el.addEventListener('mousemove', move);
  el.addEventListener('mouseleave', leave);
  return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave); };
}
