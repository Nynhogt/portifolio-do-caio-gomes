import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { skills } from '../../data/portfolio';

export default function Stack3D() {
  const mount = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mount.current) return;
    const w = mount.current.clientWidth, h = 420;
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    cam.position.z = 6;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    mount.current.appendChild(renderer.domElement);

    const geo = new THREE.BoxGeometry(2.2, 2.2, 2.2);
    const mat = new THREE.MeshStandardMaterial({ color: 0x121218, metalness: 0.6, roughness: 0.3, emissive: 0x1a1a00, emissiveIntensity: 0.15 });
    const cube = new THREE.Mesh(geo, mat);
    scene.add(cube);
    const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: 0xc8ff2e }));
    cube.add(edges);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const light = new THREE.DirectionalLight(0xc8ff2e, 1.2);
    light.position.set(3, 4, 5);
    scene.add(light);

    let mx = 0, my = 0;
    const onMove = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove);
    let raf = 0;
    const loop = () => {
      cube.rotation.x += 0.004 + my * 0.002;
      cube.rotation.y += 0.006 + mx * 0.01;
      renderer.render(scene, cam);
      raf = requestAnimationFrame(loop);
    };
    loop();
    const onResize = () => {
      const nw = mount.current?.clientWidth || w;
      renderer.setSize(nw, h);
      cam.aspect = nw / h; cam.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onMove); window.removeEventListener('resize', onResize); renderer.dispose(); mount.current?.removeChild(renderer.domElement); };
  }, []);

  const faces = ['REACT', 'SPRING', 'JAVA', 'PYTHON', 'DJANGO', 'AI'];
  return (
    <section id="stack">
      <div className="wrap">
        <p className="kicker reveal">Stack</p>
        <h2 className="h-display reveal" style={{ fontSize: 'clamp(32px,5vw,64px)', margin: '18px 0' }}>Tecnologias</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 24 }} className="stack-grid">
          <div className="card reveal" style={{ padding: 16 }}>
            <div ref={mount} style={{ width: '100%', height: 420 }} />
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', padding: '0 12px 16px' }}>
              {faces.map(f => <span key={f} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, border: '1px solid var(--line)', padding: '6px 12px', borderRadius: 999, color: 'var(--accent)' }}>{f}</span>)}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {skills.map(s => (
              <div key={s.name} className="card reveal" style={{ padding: '16px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                  <strong>{s.name}</strong><span style={{ fontFamily: 'var(--font-mono)', color: 'var(--muted)', fontSize: 12 }}>{s.tag} — {s.level}%</span>
                </div>
                <div style={{ height: 6, background: 'rgba(255,255,255,.08)', borderRadius: 99, marginTop: 10 }}>
                  <div style={{ width: `${s.level}%`, height: '100%', borderRadius: 99, background: 'linear-gradient(90deg,var(--accent),var(--accent-2))' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:960px){.stack-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}
