import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09 });
    const raf = (t: number) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
}

export function useMousePosition() {
  const ref = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const fn = (e: MouseEvent) => { ref.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', fn);
    return () => window.removeEventListener('mousemove', fn);
  }, []);
  return ref;
}
