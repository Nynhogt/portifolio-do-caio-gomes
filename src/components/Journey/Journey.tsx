import { journey } from '../../data/portfolio';

export default function Journey() {
  return (
    <section id="jornada">
      <div className="wrap">
        <p className="kicker reveal">Jornada</p>
        <h2 className="h-display reveal" style={{ fontSize: 'clamp(32px,5vw,64px)', margin: '18px 0 40px' }}>Aprendizado<br />contínuo</h2>
        <div style={{ position: 'relative', paddingLeft: 28, borderLeft: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {journey.map(j => (
            <div key={j.role} className="reveal" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: -36, top: 4, width: 14, height: 14, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 20px var(--accent)' }} />
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: 13 }}>{j.year}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, margin: '6px 0' }}>{j.role}</h3>
              <div style={{ color: 'var(--muted)' }}>{j.place}</div>
              <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap' }}>
                {j.points.map(p => <span key={p} style={{ fontSize: 12, border: '1px solid var(--line)', padding: '6px 12px', borderRadius: 999 }}>{p}</span>)}
              </div>
            </div>
          ))}
        </div>
        <div className="card reveal" style={{ marginTop: 32, padding: 24, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {['Fundamentos IA Generativa', 'React + Vite', 'Spring Boot', 'Django REST', 'Docker básico'].map(c => (
            <span key={c} style={{ padding: '12px 18px', borderRadius: 12, background: 'rgba(200,255,46,.08)', border: '1px solid rgba(200,255,46,.25)', fontSize: 13 }}>◈ {c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
