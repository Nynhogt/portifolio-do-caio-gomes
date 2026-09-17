import { GithubLogo, LinkedinLogo, EnvelopeSimple, ArrowUpRight } from '@phosphor-icons/react';

export default function Contact() {
  return (
    <section id="contato" style={{ paddingBottom: 40 }}>
      <div className="wrap">
        <div className="card reveal" style={{ padding: 'clamp(32px,6vw,80px)', textAlign: 'center', background: 'radial-gradient(circle at 50% 0%, rgba(200,255,46,.12), transparent 60%), linear-gradient(180deg, rgba(255,255,255,.05), transparent)' }}>
          <p className="kicker" style={{ justifyContent: 'center' }}>Contato</p>
          <h2 className="h-display" style={{ fontSize: 'clamp(40px,7vw,96px)', margin: '20px 0' }}>Vamos criar<br />algo<span style={{ color: 'var(--accent)' }}>?</span></h2>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
            <a href="#" className="btn btn-solid"><GithubLogo size={18} /> GitHub</a>
            <a href="https://www.linkedin.com/in/caio-mata-8bb741219/" target="_blank" rel="noreferrer" className="btn btn-ghost"><LinkedinLogo size={18} /> LinkedIn</a>
            <a href="mailto:gcaio98406@gmail.com" className="btn btn-ghost"><EnvelopeSimple size={18} /> Email <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <footer style={{ display: 'flex', justifyContent: 'space-between', padding: '28px 0', color: 'var(--muted)', fontFamily: 'var(--font-mono)', fontSize: 12, flexWrap: 'wrap', gap: 10 }}>
          <span>© 2026 CAIO GOMES — Full Stack + IA</span>
          <span>React • Spring • Django • LangChain4j</span>
        </footer>
      </div>
    </section>
  );
}
