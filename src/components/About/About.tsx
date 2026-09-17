export default function About() {
  const blocks = [
    { n: '01', t: 'Quem sou', d: 'Desenvolvedor em formação, atualmente atuando com Suporte Técnico e cursando Ciência da Computação.' },
    { n: '02', t: 'Como penso', d: 'Gosto de entender como as coisas funcionam, investigar problemas e encontrar formas de melhorar, automatizar e construir soluções.' },
    { n: '03', t: 'O que estou construindo', d: 'Expandindo para desenvolvimento de sistemas, automação e Inteligência Artificial aplicada com React, Spring Boot, Django e LangChain4j.' },
  ];
  return (
    <section id="sobre">
      <div className="wrap">
        <p className="kicker reveal">Sobre mim</p>
        <h2 className="h-display reveal" style={{ fontSize: 'clamp(32px,5vw,64px)', margin: '18px 0 40px' }}>Trajetória<br />técnica & humana</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 18 }}>
          {blocks.map(b => (
            <div key={b.n} className="card reveal" style={{ padding: 28 }}>
              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: 13 }}>{b.n}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, margin: '12px 0' }}>{b.t}</h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>{b.d}</p>
              {b.n === '01' && (
                <div style={{ marginTop: 20, display: 'flex', gap: 14, alignItems: 'center' }}>
                  <img src="/images/profile.jpg" alt="Caio" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', filter: 'grayscale(1)', border: '1px solid var(--line)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--muted)' }}>Coloque sua foto em<br />public/images/profile.jpg</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="card reveal" style={{ marginTop: 18, padding: 28, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {['Suporte Técnico', 'Ciência da Computação', 'Desenvolvimento Full Stack', 'Filosofia: automatizar & melhorar'].map(f => (
            <span key={f} style={{ border: '1px solid var(--line)', borderRadius: 999, padding: '10px 18px', fontSize: 13, color: 'var(--muted)' }}>{f}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
