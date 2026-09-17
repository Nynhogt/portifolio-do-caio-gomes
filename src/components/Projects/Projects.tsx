import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react';
import { projects } from '../../data/portfolio';

export default function Projects() {
  return (
    <section id="projetos">
      <div className="wrap">
        <p className="kicker reveal">Projetos</p>
        <h2 className="h-display reveal" style={{ fontSize: 'clamp(36px,6vw,84px)', margin: '18px 0 44px' }}>Trabalho<br />em destaque</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {projects.map((p) => (
            <article key={p.id} className="card reveal" style={{ padding: 'clamp(24px,4vw,56px)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} >
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 64, opacity: 0.18, fontWeight: 800 }}>{p.id}</div>
                <h3 className="h-display" style={{ fontSize: 'clamp(24px,3.5vw,48px)', margin: '8px 0' }}>{p.title}</h3>
                <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>{p.stack}</p>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6, marginTop: 12 }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
                  {p.tags.map(t => <span key={t} style={{ fontSize: 12, border: '1px solid var(--line)', padding: '6px 12px', borderRadius: 999 }}>{t}</span>)}
                </div>
                <div style={{ display: 'flex', gap: 12, marginTop: 22 }}>
                  <a href={p.github} className="btn btn-ghost" style={{ padding: '12px 20px', fontSize: 12 }}><GithubLogo size={16} /> GitHub</a>
                  <a href={p.demo} className="btn btn-solid" style={{ padding: '12px 20px', fontSize: 12 }}>Live demo <ArrowUpRight size={16} /></a>
                </div>
              </div>
              <div style={{ minHeight: 260, borderRadius: 16, border: '1px solid var(--line)', background: 'radial-gradient(circle at 30% 20%, rgba(200,255,46,.15), transparent 60%), linear-gradient(180deg,#17171f,#0b0b10)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', color: 'var(--muted)', letterSpacing: '.2em' }}>
                PREVIEW
              </div>
              <style>{`@media(max-width:900px){article.card{grid-template-columns:1fr!important}}`}</style>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
